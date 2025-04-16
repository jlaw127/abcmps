'use strict';

// === Utility ===

// === Equalize .nav-button widths ===
function setEqualWidth() {
  // Select all elements with class 'nav-button'
  const buttons = document.querySelectorAll('.nav-button');

  let maxWidth = 0;

  // First pass: determine the maximum width among all buttons
  buttons.forEach(btn => {
    btn.style.width = 'auto'; // Reset width before measuring
    const width = btn.offsetWidth;
    if (width > maxWidth) maxWidth = width;
  });

  // Second pass: set all buttons to the maximum width
  buttons.forEach(btn => {
    btn.style.width = `${maxWidth}px`;
  });
}

// Run the function on page load
window.addEventListener('load', setEqualWidth);

// Optional: update widths when the window is resized
window.addEventListener('resize', setEqualWidth);




// Toggles the 'active' class for a given element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// === Mobile Toggle ===
// handle the toggle of the mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const originalLinks = document.querySelector('.sidebar-link-block');

  // toggle menu visibility
  menu.classList.toggle('active');

  // copy sidebar links into the mobile menu (only on first open)
  if (menu.classList.contains('active') && menu.innerHTML.trim() === '') {
    menu.innerHTML = originalLinks.innerHTML;
  }

  // add or remove click-outside listener
  if (menu.classList.contains('active')) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
}

// close mobile menu when clicking outside of it
function handleClickOutside(event) {
  const menu = document.getElementById('mobile-menu');
  const toggleBtn = document.querySelector('.mobile-toggle');

  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove('active');
    document.removeEventListener('click', handleClickOutside);
  }
}

// auto-close menu when screen resizes to desktop width
window.addEventListener('resize', () => {
  const menu = document.getElementById('mobile-menu');
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    document.removeEventListener('click', handleClickOutside);
  }
});


// === Page Navigation ===
// switch between page sections
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l, i) => {
      l.classList.toggle("active", i === index);
      pages[i].classList.toggle("active", i === index);
    });
    window.scrollTo(0, 0); // Scroll to top when navigating
  });
});

// === Redirect Home Page (for button use) ===
// reset active section to the home page
function redirectToHomePage() {
  if (pages && navigationLinks) {
    pages.forEach(p => p.classList.remove("active"));
    navigationLinks.forEach(link => link.classList.remove("active"));
    if (pages[0]) pages[0].classList.add("active");
    if (navigationLinks[0]) navigationLinks[0].classList.add("active");
    window.scrollTo(0, 0);
  }
}

// === Markdown Loader + KaTeX Support ===
// Loads Markdown content dynamically and renders math expressions with KaTeX
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll("[data-md]");
  const basePath = "./assets/md/";

  containers.forEach(container => {
    const file = container.getAttribute("data-md");
    if (!file) return;

    const src = basePath + file;

    fetch(src)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${src}`);
        return res.text();
      })
      .then(md => {
        // Extract and remove first-level heading
        const match = md.match(/^# (.+)$/m);
        let title = "Empty # Heading";
        if (match) {
          title = match[1].trim();
          md = md.replace(match[0], "").trim();
        }

        // Update article title if available
        const article = container.closest("article");
        if (article && title) {
          const titleElement = document.createElement("div");
          titleElement.className = "article-title";
          titleElement.textContent = title;
          article.insertBefore(titleElement, article.firstChild);
        }

        // Render Markdown to HTML
        container.innerHTML = `<div class="markdown-body">${marked.parse(md)}</div>`;

        // Render math using KaTeX if available
        if (window.renderMathInElement) {
          renderMathInElement(container, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false }
            ],
            throwOnError: false
          });
        }
      })
      .catch(err => {
        container.innerHTML = `<p style="color: red;">⚠️ Failed to load content: ${err.message}</p>`;
        console.error(err);
      });
  });
});
