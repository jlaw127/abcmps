# A clean markdown-powered personal site template

## Overview
This template is developed based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io.git) and [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio.git), with the goal of achieving a basic, clean, and readable design. 

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

Running the following commands requires Git, which is the recommended method. If you're not familiar with using Bash, you can also download the ZIP file directly.


### Clone the Repository

Run the command below:

```bash
git clone https://github.com/
```


## File Structure
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

## Customization Guide

### Navigation & Sidebar
Edit the sidebar and navigation bar content directly in `index.html`.

### Section Content
Main content sections are written in Markdown. Update the relevant `.md` files in the `assets/md` directory to make changes.

### Style & Layout
To change the layout, color scheme or animations, modify `style.css`.

## Deployment

### Open Locally
You can either open `index.html` directly in your browser or run:

```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser. If you update your files but don not see any changes, try pressing `Shift + Ctrl + R` to refresh the webpage.

### Deploy with GitHub Pages
1. Create a new repository named `XXX.github.io`, where `XXX` is your GitHub username. This will also be your website's URL.
1. Go to `Settings > Pages`.
1. Under Source, select the `main` branch and `/ (root)` folder.
1. Click Save — your site will be live at `https://XXX.github.io/`.
1. Push your code to this repository. If you're not familiar with Git, you can use GitHub Codespaces (AI can be helpful).


## License
MIT License.

