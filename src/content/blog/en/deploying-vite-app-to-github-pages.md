---
title: 'Deploying Vite App to GitHub Pages'
description: "In this post, I share how to successfully deploy a Vite app to GitHub Pages."
pubDate: 'July 1 2025'
heroImage: '/posts/deploying-vite-app-to-github-pages.jpg'
---
I spent 4+ hours last night trying to deploy a React + Vite app to GitHub Pages, and finally figured out how to do so successfully. Here are the steps I followed:

1️⃣ Add `base: ''`, to your `vite.config.js` file.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
 base: '',
 plugins: [react(), tsconfigPaths()],
});
```
<br/>

2️⃣ From the root of the project, run this command to add `gh-pages` as a dependency:
```bash
npm install gh-pages --save-dev
```
<br />

3️⃣ Add these two lines to `package.json` file under the `"scripts"` property `"deploy": "gh-pages -d dist"`,
```json
// package.json
{
 "name": "name-of-your-project",
 "private": true,
 "version": "0.0.0",
 "type": "module",
 "scripts": {
 "dev": "vite --open",
 "build": "tsc -b && vite build",
 "deploy": "gh-pages -d dist",
 "lint": "eslint .",
 "preview": "vite preview"
 },
 // ... rest of package.json attributes ...
}
```

<br />

4️⃣ From the root of the project, run the following commands:
```bash
npm run build && npm run deploy
```

<br />

5️⃣ Check your repository's pages settings, the `gh-pages` branch should be selected.

<br />
<br />

⚠️ Gotcha ⚠️: Ensure that you do not add a `"/"` at the beginning of image source URIs. For example, if you want to use the image `culture.jpg` in your app, ensure the source and URI are `src="culture.jpg"`, not `src="/culture.jpg"`. 
Otherwise, Vite will not be able to find the image.
