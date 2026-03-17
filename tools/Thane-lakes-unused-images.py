import os
import re

script_path = r'd:\thane-lakes-website\script.js'
images_dir = r'd:\thane-lakes-website\lake-images'

with open(script_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# All image files on disk
all_files = set(f for f in os.listdir(images_dir) if f.endswith('.JPG'))

# Find all lake-images/ references in JS
used_files = set(re.findall(r'lake-images/([^"\',]+)', js_content))

unused_files = all_files - used_files

if unused_files:
    print(f"Found {len(unused_files)} image files on disk NOT used in script.js:")
    for f in sorted(list(unused_files)):
        print(f"  - {f}")
else:
    print("All image files in lake-images/ are referenced in script.js.")
