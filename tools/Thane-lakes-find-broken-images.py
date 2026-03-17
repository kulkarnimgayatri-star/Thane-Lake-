import os
import re

script_path = r'd:\thane-lakes-website\script.js'
images_dir = r'd:\thane-lakes-website\lake-images'

with open(script_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Get all filenames from the images directory
all_images = set(os.listdir(images_dir))

# Find all relative paths like "lake-images/..." in the JS
found_paths = re.findall(r'lake-images/[^"\',]+', js_content)

missing_files = []
for p in found_paths:
    filename = p.replace('lake-images/', '').strip()
    if filename not in all_images:
        missing_files.append((p, filename))

if missing_files:
    print(f"Found {len(missing_files)} missing image references in JS:")
    for p, f in missing_files:
        print(f"  - {p} (File not found: {f})")
else:
    print("No missing image references found in JS.")
