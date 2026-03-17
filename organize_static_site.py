import os
import shutil

# Make dirs
os.makedirs('css', exist_ok=True)
os.makedirs('js', exist_ok=True)
os.makedirs(os.path.join('assets', 'images'), exist_ok=True)
os.makedirs('tools', exist_ok=True)

# Move python tools and non-site folders
for f in os.listdir('.'):
    if f.endswith('.py') and f != 'organize_static_site.py':
        try:
            shutil.move(f, os.path.join('tools', f))
        except Exception:
            pass

# Move assets
try:
    if os.path.exists('lake-images'):
        shutil.move('lake-images', os.path.join('assets', 'images', 'lake-images'))
    if os.path.exists('logo'):
        shutil.move('logo', os.path.join('assets', 'images', 'logo'))
except Exception as e:
    print(e)
    pass

# String replacements in index
if os.path.exists('index.html'):
    with open('index.html', 'r', encoding='utf-8') as f:
        idx = f.read()

    idx = idx.replace('href="style.css"', 'href="css/style.css"')
    idx = idx.replace('src="script.js"', 'src="js/script.js"')
    idx = idx.replace('src="lake-images/', 'src="assets/images/lake-images/')
    idx = idx.replace('src="logo/', 'src="assets/images/logo/')
    idx = idx.replace("url('lake-images/", "url('assets/images/lake-images/")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(idx)

# style.css
if os.path.exists('style.css'):
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()
    css = css.replace("url('lake-images/", "url('../assets/images/lake-images/")
    with open(os.path.join('css', 'style.css'), 'w', encoding='utf-8') as f:
        f.write(css)
    os.remove('style.css')

# script.js
if os.path.exists('script.js'):
    with open('script.js', 'r', encoding='utf-8') as f:
        js = f.read()
    js = js.replace('"lake-images/', '"assets/images/lake-images/')
    with open(os.path.join('js', 'script.js'), 'w', encoding='utf-8') as f:
        f.write(js)
    os.remove('script.js')

print("Files arranged nicely for deployment!")
