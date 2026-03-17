import os
import re

script_path = r'd:\thane-lakes-website\script.js'
images_dir = r'd:\thane-lakes-website\lake-images'

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image paths in script.js
image_paths = re.findall(r'image:\s*"(.*?)"', content)
more_image_paths = re.findall(r'"(lake-images/.*?\.JPG)"', content)

all_paths = image_paths + more_image_paths

broken_paths = []
for path in all_paths:
    # Normalize path
    # script uses "lake-images/..."
    # relative to d:\thane-lakes-website
    abs_path = os.path.join(r'd:\thane-lakes-website', path.replace('/', os.sep))
    if not os.path.exists(abs_path):
        broken_paths.append(path)

if broken_paths:
    print(f"Found {len(set(broken_paths))} broken image paths:")
    for path in sorted(list(set(broken_paths))):
        print(f"  - {path}")
else:
    print("All image paths in script.js exist on disk.")
