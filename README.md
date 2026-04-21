# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## GitHub Pages deployment

This repository is configured to deploy to GitHub Pages using GitHub Actions:

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (and manual run via `workflow_dispatch`)
- Output: Vite `dist/` folder

After merging to `main`, enable Pages in repository settings:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
