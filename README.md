# A Basic Clean Markdown-powered Personal Site template

## Overview
```
├── index.html
├── style.css
├── script.js  
├── archived/           
├── assets/ 
│   ├── images/          
│   └── md/     
│       └── XXX.md
│       └── XXX.md              
```

This project aims to manage most of its content using Markdown for simplicity and readability. Both `.css` and `.js` files are intentionally kept minimal to ensure lightweight performance and ease of customization. The repository is primarily organized into the following components:

- `index.html`: The main entry point of the site, typically an HTML file that loads content from Markdown files.
- `style.css`: Contains all custom styles.
- `scripts.js`: Handles basic interactivity and dynamic content rendering.
- `assets`: A folder for storing static resources such as Markdown files and images.

The general layout of each page is outlined below.

```
Body: The largest set
+------------------------------------------------------+
| <header> (navbar, some info)                         |
+----------------------+-------------------------------+
| <aside> (sidebar) | <main>                           |
|                   |   <section id='xxx'>             |
|                   |     <article>                    |
|                   |       <h2>title</h2>             |
|                   |       <p>content</p>             |
|                   |                                  |
|                   |   <section id='xxx'>             |
|                   |     <article> ...                |
+----------------------+-------------------------------+
| <footer> some info                                   |
+------------------------------------------------------+
```

## Getting Started

Running the following commands requires Git. If you're not familiar with Bash, you can download the ZIP file directly.

Note: AI can be very helpful. If you encounter any bugs or errors, consider using AI to troubleshoot and solve the problems. This is one reason why the repository is intentionally kept simple and minimal.

### Clone the Repository

Run the command below:

```bash
git clone https://github.com/
```

## Customization Guide

### Navigation & Sidebar
To update the navigation bar or sidebar, modify `index.html`.

### Section Content
To update section content, modify the relevant `.md` files.

### Style & Layout
To change the layout, color scheme or animations, edit `style.css`.


## Deployment

### Open Locally
You can either open `index.html` directly in your browser or run

```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser. If you update your files but do not see any changes, try pressing `Shift + Ctrl + R` to refresh the webpage.

### Deploy with GitHub Pages
1. Create a new repository named `XXX.github.io`, where `XXX` is your GitHub username. This will also be your website's URL.
1. Go to `Settings > Pages`.
1. Under Source, select the `main` branch and `/ (root)` folder.
1. Click Save — your site will be live at `https://XXX.github.io/`.

## Acknowledgment
This template is inspired and developed based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io.git) and [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio.git).

## License
MIT License.

