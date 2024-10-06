from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

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

# AI Act Route (with scraping)
@app.route('/ai-act')
def ai_act():
    articles = scrape_articles()
    return render_template('ai_act_scraped.html', articles=articles)

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
