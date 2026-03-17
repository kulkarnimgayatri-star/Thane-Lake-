import re
with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'\s*<style>\s*/\* Inlined from style\.css \*/.*?</style>', '\n    <link rel="stylesheet" href="style.css">', text, flags=re.DOTALL)
text = re.sub(r'\s*<script>\s*// Inlined from script\.js.*?</script>', '\n    <script src="script.js"></script>', text, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)
