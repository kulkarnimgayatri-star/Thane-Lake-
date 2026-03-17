import re

# Update HTML
with open(r'd:\thane-lakes-website\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

menu_btn_pattern = r'\s*<!-- Mobile Menu Button -->\s*<button class="menu-btn" id="menuBtn">.*?</button>'
html = re.sub(menu_btn_pattern, '', html, flags=re.DOTALL)

close_btn_pattern = r'\s*<button class="close-sidebar-btn" id="closeSidebarBtn">&times;</button>'
html = re.sub(close_btn_pattern, '', html, flags=re.DOTALL)

with open(r'd:\thane-lakes-website\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update CSS
with open(r'd:\thane-lakes-website\style.css', 'r', encoding='utf-8') as f:
    css = f.read()

responsive_css_pattern = r'/\* ---------- RESPONSIVE STYLES ---------- \*/.*'
css = re.sub(responsive_css_pattern, '', css, flags=re.DOTALL)

modal_css_old_replacement = r'''.modal-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* Vertical Stacking */
  position: relative;
  overflow-y: auto;
  /* Enable vertical scroll */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.collage-grid {
  flex: 0 0 60vh;
  /* Fixed 60% of screen height */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33.33%, 1fr));
  gap: 0;
  background: #000;
  overflow: hidden;
}

.collage-item-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.collage-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.collage-item-wrapper:hover .collage-item {
  transform: scale(1.08);
}

.modal-info {
  flex: 1 0 auto;
  /* Allow expansion for long descriptions */
  padding: 4rem 8%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.modal-info h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  color: #fff;
  text-align: left;
}

.modal-info .divider {
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  margin-bottom: 1.5rem;
}

.modal-info p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 100%;
  margin-bottom: 4rem;
}
/* Responsive Modal */
@media (max-width: 768px) {
  .collage-grid {
    flex: 0 0 50vh;
    grid-template-columns: 1fr;
    overflow-y: visible;
  }

  .modal-info {
    padding: 2rem;
  }

  .modal-info h2 {
    font-size: 2rem;
  }
}
'''

new_modal_css_pattern = r'\.modal-content \{.*?margin-bottom: 4rem;\n\}'
css = re.sub(new_modal_css_pattern, modal_css_old_replacement, css, flags=re.DOTALL)

with open(r'd:\thane-lakes-website\style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update JS
with open(r'd:\thane-lakes-website\script.js', 'r', encoding='utf-8') as f:
    js = f.read()

js_mobile_toggle = r'// Mobile Sidebar Toggle.*?function closeSidebarOnMobile\(\) \{.*?\n\}\n'
js = re.sub(js_mobile_toggle, '', js, flags=re.DOTALL)

js = js.replace('''li.onclick = () => {
        displayLake(i);
        closeSidebarOnMobile();
      };''', 'li.onclick = () => displayLake(i);')

with open(r'd:\thane-lakes-website\script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Reverted to previous.")
