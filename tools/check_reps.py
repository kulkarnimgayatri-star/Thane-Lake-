
import re
import json

with open(r'd:\thane-lakes-website\assets\js\script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract allLakes array content
match = re.search(r'const allLakes = (\[.*?\]);', content, re.DOTALL)
if match:
    # Clean up the string to be valid JSON-ish or just parse manually
    # encodePath(...) makes it hard to parse as JSON. Let's use regex to find lake blocks.
    lake_blocks = re.findall(r'{\s*name:.*?\n\s*}', match.group(1), re.DOTALL)
    
    for block in lake_blocks:
        name_match = re.search(r'name:\s*"(.*?)"', block)
        name = name_match.group(1) if name_match else "Unknown"
        
        # Find all quoted paths
        paths = re.findall(r'"(lakes/talao photos/FINAL MAIN IMAGES/.*?\.JPG)"', block)
        
        if len(paths) != len(set(paths)):
            print(f"REPETITION FOUND in {name}:")
            seen = set()
            for p in paths:
                if p in seen:
                    print(f"  - Duplicate: {p}")
                seen.add(p)
else:
    print("Could not find allLakes array.")
