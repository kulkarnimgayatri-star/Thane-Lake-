import os
import re

script_path = r'd:\thane-lakes-website\script.js'
images_dir = r'd:\thane-lakes-website\lake-images'

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all lake names in script.js
lake_names = re.findall(r'name:\s*"(.*?)"', content)
print(f"Lakes in script.js: {len(lake_names)}")

# Get all unique prefixes from images
image_files = os.listdir(images_dir)
image_prefixes = set()
for f in image_files:
    if f.endswith('.JPG'):
        # Extract prefix (e.g., MASUNDA from MASUNDA1.JPG)
        prefix_match = re.match(r'^([A-Z\s]+)', f)
        if prefix_match:
            image_prefixes.add(prefix_match.group(1).strip())

print(f"Found {len(image_prefixes)} image prefixes in lake-images folder.")

# Check for prefixes not in script.js
missing_in_script = []
for p in image_prefixes:
    found = False
    for name in lake_names:
        if p.lower() in name.lower() or name.lower() in p.lower():
            found = True
            break
    if not found:
        missing_in_script.append(p)

if missing_in_script:
    print("Found prefixes in images but not in script.js:")
    for p in missing_in_script:
        print(f"  - {p}")
else:
    print("All image prefixes seem to be accounted for in script.js.")
