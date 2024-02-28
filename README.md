# Preston's Portfolio ([pjnalls.github.io](pjnalls.github.io))

🌴🏠🌳 Professional portfolio website of a human-centered frontend engineer promoting joy of learning natural and programming languages of all kinds ❤️ #onelove 🌏🌍🌎

## Basic Frontend Dev Solution Steps

### 1. 🏗️ build: create new vite project

#### (1️⃣) run `npm create vite@latest . -- --template react-ts` from root of new repo for GitHub Pages

#### (2️⃣) answer one prompt and choose option to display infomation below:

```
✔ Current directory is not empty. Please choose how to proceed:
› Ignore files and continue

Scaffolding project in ~/problemesolvers.github.io...

Done. Now run:

  npm install
  npm run dev
```

### 2. 🏗️ build: add Mantine components library and React Router

#### (1️⃣) Run `npm i @mantine/core @mantine/hooks react-router react-router-dom` from the root of the repo.

#### (2️⃣) Go to [https://mantine.dev/getting-started/](https://mantine.dev/getting-started/) to see how setup Mantine for a React project.

#### (3️⃣) Refer to [https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial) to see different recipes for setting up routing for your React app.'

#### (4️⃣) Refer to [https://github.com/problemesolvers/problemesolvers.github.io](https://github.com/problemesolvers/problemesolvers.github.io) for an example of navigation for a React app using Mantine and React Router.

### 3. 🆕 feat: add `useDocumentTitle` Mantine hook to make `title` of SPA dynamically accessible

```tsx
import { Container, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import "../styles/components/About.scss";

function About() {
  useDocumentTitle("About | Portfolio");

  return (
    <Container className="about" size={"xs"}>
      <Text ta={"left"}>{/** ... */}</Text>
    </Container>
  );
}

export default About;
```

### 4. 🐞 fix: add `404.html` redirect

⚡️🐞🧑‍🏫 [Follow steps here](https://github.com/pjnalls/pages-404-fix/blob/main/README.md#github-pages-404-error-page-fix) for how to resolve a common 404 error when deploying a SPA (single-page application) as static content to GitHub Pages

### 5. 🆕 feat: add `vite-plugin-pwa`

#### Refer to [https://www.npmjs.com/package/vite-plugin-pwa](https://www.npmjs.com/package/vite-plugin-pwa) for a "Zero-config PWA Framework-agnostic Plugin for Vite".

#### Run `npm i vite-plugin-pwa` from the root of the repo.

#### `vite.config.ts` for reference of PWA plugin:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifest: VitePWAOptions = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Preston's Portfolio",
    short_name: "pjnalls.github.io",
    start_url: "/",
    description:
      "🌴🏠🌳 Professional portfolio website of a human-centered frontend engineer promoting joy of learning natural and programming languages of all kinds ❤️ #onelove 🌏🌍🌎",
    icons: [
      {
        src: "/assets/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/pwa/apple-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#e9dfff",
    background_color: "#190444",
    display: "standalone",
    scope: "/",
    orientation: "portrait",
  },
  injectRegister: false,
  minify: false,
  workbox: {},
  injectManifest: {},
  includeManifestIcons: false,
  disable: false,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
```

_Note: an asset generator can be used to create the images for your PWA's manifest (e.g., `npx pwa-asset-generator`)_

### 6. 🏗️ build: add `~/.github/workflows/deploy.yml` workflow and the follow code to deploy `main` with GitHub Actions.

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "npm"
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```
