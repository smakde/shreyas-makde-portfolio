# Shreyas Makde — AI/ML Portfolio

A modern, single-page portfolio designed for senior software and machine learning engineers. The site showcases projects, technical focus areas, and contact information with a polished, animated presentation.

https://github.com/smakde

## ✨ Highlights
- **Hero spotlight** with avatar fallback, personal tagline, and quick access to resume and social links.
- **Projects gallery** prepared for four flagship case studies, each with technology badges and call-to-action buttons.
- **Skills overview** that surfaces cloud, MLOps, and engineering strengths through animated stat cards.
- **About section** outlining recent achievements and technical leadership experience.
- **Responsive, accessible layout** with motion-enhanced transitions, keyboard-friendly navigation, and semantic markup.

## 🛠 Tech Stack
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for lightning-fast local development and builds
- [Tailwind CSS](https://tailwindcss.com/) with utility-based design tokens
- [shadcn/ui](https://ui.shadcn.com/) component primitives (Button, Card, Badge)
- [framer-motion](https://www.framer.com/motion/) for subtle animations
- [lucide-react](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/) iconography

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   Vite will print a local URL (typically `http://localhost:5173`) with hot module reloading enabled.
3. **Create a production build**
   ```bash
   npm run build
   ```
4. **Preview the production bundle locally**
   ```bash
   npm run preview
   ```

> **Node version**: Vite 7 works best on Node.js 18 or later. Use `nvm use 18` (or higher) before installing.

## 📁 Repository Structure
```
├── public/                  # Static assets (resume PDF, project images, favicon, etc.)
├── src/
│   ├── components/ui/       # Reusable UI components (button, badge, card, portfolio page)
│   ├── lib/                 # Utility helpers
│   ├── assets/              # Local images/SVGs imported into React
│   ├── App.tsx              # Entry point that renders the portfolio
│   └── main.tsx             # React/Vite bootstrap
├── index.html               # Root HTML template used by Vite
├── tailwind.config.js       # Tailwind design tokens & content sources
├── tsconfig*.json           # TypeScript project configs
└── vite.config.ts           # Vite bundler configuration
```

## 🧩 Customization Guide
- **Update personal details**: adjust names, taglines, and contact links inside `src/components/ui/Portfolio.tsx`.
- **Swap project tiles**: edit the `projects` array in the same file; supply new titles, descriptions, badges, and URLs.
- **Replace imagery**: store hero/project images in `public/images/` and point the component props to the new paths.
- **Toggle sections**: the skills and contact sections are scaffolded but commented out—uncomment them to enable forms or additional content.
- **Theming**: tweak Tailwind colors or add new utility classes in `tailwind.config.js` for a personalized visual identity.

## 📦 NPM Scripts
| Command        | Purpose                                      |
| -------------- | -------------------------------------------- |
| `npm run dev`  | Launch Vite dev server with HMR              |
| `npm run build`| Type-check and generate an optimized build   |
| `npm run preview` | Serve the production build locally       |
| `npm run lint` | Run ESLint across the project                |

## ☁️ Deployment Tips
- **Static hosting**: Deploy the `dist/` output to Netlify, Vercel, GitHub Pages, or any static host.
- **Custom domains**: Configure DNS to point to your hosting provider and add redirects as needed.
- **Continuous deployment**: Pair with GitHub Actions or your preferred CI to lint, test, and build on every push.

## 📄 License
This project is currently unlicensed. Reach out before reusing or distributing the content.

---
Crafted with care to highlight AI/ML engineering expertise while remaining easy to extend for future work.
