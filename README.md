# Restaurant Page

A dynamic restaurant website built with JavaScript modules and Webpack as part of the :contentReference[oaicite:0]{index=0} curriculum.

This project demonstrates:

- Webpack setup and configuration
- ES Modules
- DOM manipulation
- Dynamic page rendering
- Tabbed navigation
- Modular JavaScript architecture

---

## Features

- Home, Menu, and Contact tabs
- Dynamic content rendering with JavaScript
- Single-page application behavior
- Modular file structure
- Styled with custom CSS
- Bundled with Webpack

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES Modules)
- Webpack
- Webpack Dev Server

---

## Project Structure

```text
restaurant-page/
│
├── dist/
│
├── src/
│   ├── contact.js
│   ├── home.js
│   ├── index.js
│   ├── menu.js
│   ├── styles.css
│   └── template.html
│
├── .gitignore
├── package-lock.json
├── package.json
└── webpack.config.js
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd restaurant-page
```

Install dependencies:

```bash
npm install
```

---

## Running the Development Server

Start the Webpack development server:

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:8080
```

---

## Build for Production

Generate the production build:

```bash
npm run build
```

The bundled files will be generated inside the `dist/` directory.

---

## What I Learned

Through this project I practiced:

- Configuring Webpack manually
- Using ES module imports/exports
- Separating functionality into modules
- Creating and appending DOM elements with JavaScript
- Handling tab-switching logic with event listeners
- Structuring a small frontend application

---

## Deployment to GitHub Pages

Create the deployment branch (first deployment only):

```bash
git branch gh-pages
```

Commit your latest work:

```bash
git status
git add .
git commit -m "Your commit message"
```

Switch branches and sync changes:

```bash
git checkout gh-pages && git merge main --no-edit
```

Build the project:

```bash
npm run build
```

Deploy the `dist` folder:

```bash
git add dist -f && git commit -m "Deployment commit"

git subtree push --prefix dist origin gh-pages

git checkout main
```

Finally:

- Open your GitHub repository
- Go to **Settings → Pages**
- Set the source branch to `gh-pages`

Your project should now be live.

---

## Acknowledgements

Project assignment from The Odin Project.
