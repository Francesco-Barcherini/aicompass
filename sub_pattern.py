# in the file templates/ai_act.html substitute this pattern:
# <a href="https://artificialintelligenceact.eu/chapter/1/">Chapter I: General Provisions</a>
# where the variable part is the chapter number and the chapter title.
# and replace it with only the chapter title, like this:
# Chapter I: General Provisions

import re

pattern_chapter = r'<a href="https://artificialintelligenceact.eu/chapter/\d+/">(.*?)</a>'
replacement = r'\1'

pattern_section = r'<a href="https://artificialintelligenceact.eu/section/\d+-\d+/">(.*?)</a>'

# use as input the content of the file templates/ai_act.html
# and rewrite the content with the substitution

with open('templates/ai_act.html') as f:
    content = f.read()
    new_content = re.sub(pattern_chapter, replacement, content)
    new_content = re.sub(pattern_section, replacement, new_content)
    with open('templates/ai_act.html', 'w') as f:
        f.write(new_content)

# <p class="parent-title"><a href="https://artificialintelligenceact.eu/chapter/7/">Chapter VII:
# Governance</a>
# has survived the substitution



