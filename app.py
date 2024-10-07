from flask import Flask, render_template, request, redirect
import requests
from bs4 import BeautifulSoup
import re

app = Flask(__name__)
app.url_map.strict_slashes = False

# Scraping function to get articles
def scrape_articles():
    url = 'https://artificialintelligenceact.eu/'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    articles = []
    for article_link in soup.select('.child-article a'):
        articles.append({
            'title': article_link.text,
            'link': article_link['href']
        })
    return articles

def scrape(type, num):
    if type not in ['article', 'annex']:
        return None
    
    url = f'https://artificialintelligenceact.eu/{type}/{num}'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # select h1 element with class entry-title and pass it to the template as element, not as text content
    entry_title = soup.select_one('.entry-title').prettify()

    # extract the content of the summary. It is all the paragraphs except the last one inside .aia-clairk-summary-content-section element
    summary = soup.select('.aia-clairk-summary-content-section p')[:-1]
    
    # extract the content of the article. It is all the elements inside class="et_pb_module et_pb_post_content et_pb_post_content_0_tb_body"
    content = soup.select_one('.et_pb_module.et_pb_post_content.et_pb_post_content_0_tb_body')
    content = str(content)
    #remove all span .aia-recital-ref elements
    content = re.sub(r'<span class="aia-recital-ref">.*?</span>', '', content)
    #make all <a> elements to be simple text, without links
    content = re.sub(r'<a.*?>(.*?)</a>', r'\1', content)

    # make back a HTML element from the string
    content = BeautifulSoup(content, 'html.parser').prettify()

    return render_template('article_annex.html', entry_title=entry_title, summary=summary, content=content)

# Middleware to redirect HTTPS to HTTP
@app.before_request
def redirect_https_to_http():
    if request.is_secure:
        url = request.url.replace("https://", "http://", 1)
        return redirect(url, code=301)

# AI Act Route (with scraping)
@app.route('/ai-act')
def ai_act():
    #articles = scrape_articles()
    return render_template('ai_act.html', articles=None)

# AI Act Route for articles with scraping
# all links /article/#num goes into article_annex.html with args entry_tile, summary and content
@app.route('/article/<num>')
def article_annex(num):
    return scrape('article', num)

@app.route('/annex/<num>')
def annex(num):
    return scrape('annex', num)

# Home Route
@app.route('/')
def home():
    return render_template('home.html')

# AI Evaluator Route
@app.route('/ai-evaluator', methods=['GET', 'POST'])
def ai_evaluator():
    if request.method == 'POST':
        # Process the form data and display relevant articles
        # Decision tree logic can go here
        user_input = request.form['input_data']
        result = process_user_input(user_input)  # Function to decide articles
        return render_template('ai_evaluator_result.html', result=result)
    return render_template('ai_evaluator.html')

def process_user_input(user_input):
    # Use the decision tree logic (from the diagram) to evaluate the input
    if user_input == 'some_condition':
        return ['Article 1', 'Article 2']
    return ['No matching articles found']

if __name__ == '__main__':
    app.run(debug=True)
