# React Notes Web App

### NOTE: All credits in regards to the code goes to Chris Blakely on YouTube as this was a code along practice project. Project is deployed in GitHub Pages for easy access and usability.

## Github Pages Link: [Click Here](https://kr0ma-git.github.io/react-notes-app/)

This project uses react-icons:

-`npm install react-icons`

Testing and development:

-`npm run dev`

# GitHub Pages Deployment:

Install gh-pages as dev dependency.

-`npm install gh-pages --save-dev`

Define the app's homepage string as a property in package.json.

-`"homepage": "http://{github-username}.github.io/{app-repo-name}"`

In the scripts, add the predeploy and deploy strings.

```
"scripts": {
  //...
  "predeploy": npm run build",
  "deploy": gh-pages -d build"
  }
```

Deploy after pushing.

-`npm run deploy`

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
