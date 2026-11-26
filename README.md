# Sushant Shrestha — Portfolio

Minimal, dark-mode-ready developer portfolio built with React, Vite, and Tailwind CSS.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (class-based dark mode)
- Motion for smooth scroll-reveal and micro animations
- Heroicons + react-icons
- Space Grotesk & Inter (Google Fonts)

## Features

- Responsive single-page layout: hero, about, skills, projects, contact
- Light / dark theme with system-preference default, persisted in localStorage
- Scroll-spy navigation with an animated active-section indicator
- Smooth scroll-reveal animations that respect `prefers-reduced-motion`
- Built-in assistant chatbot
- SEO meta tags, Open Graph tags, custom favicon

## Getting started

```bash
npm install
npm run dev       # start the dev server
```

## Production build

```bash
npm run build     # static site output in dist/
npm run preview   # preview the production build locally
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`.
4. Click Deploy.

`vercel.json` is already included: it configures SPA rewrites and immutable
caching for hashed assets in `/dist/assets`.

## Project structure

```
src/
  components/
    layout/      page composition
    navbar/      navigation + theme toggle
    pages/home/  hero, about, skills, projects, contact sections
    chatbot/     floating assistant widget
    footer/      site footer
    context/     theme provider + useTheme hook
```
