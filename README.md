# Portfolio — React Developer Portfolio

A modern, responsive personal portfolio built with **React.js**, featuring smooth animations, a light/dark theme toggle, an AI-themed neural network background, multi-select project filtering, and a working contact form powered by EmailJS.

## Features

- **Single-Page Application** with client-side routing via React Router
- **Light / Dark Theme** toggle with localStorage persistence
- **Animated Neural Network Background** with floating AI/ML terminology rendered on canvas
- **Smooth Animations** powered by Framer Motion (page transitions, scroll reveals, hover effects, stagger animations)
- **Typing Animation** on the hero section cycling through role titles
- **7 Sections** — About, Education, Experience, Publications, Projects, Certifications, Contact
- **Projects Page** with interactive multi-select category filtering (Generative AI, ML, Frontend, Backend, Full-Stack)
- **Navbar Dropdown** for quick project category navigation
- **Contact Form** with EmailJS integration (name, email, phone, subject, message)
- **Responsive Design** — fully functional on mobile, tablet, and desktop
- **Tailwind CSS** utility-first styling with custom color palette and glass-card effects
- **Social Links** — LinkedIn, GitHub, Medium, Kaggle, LeetCode, Google Scholar, DeepML, Email

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router 7 | Client-side routing |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Type Animation | Typing effect on hero |
| React Icons | Icon library (Hi, Fa, Si) |
| EmailJS | Contact form email delivery |
| Canvas API | Neural network background |

## Project Structure

```
src/
├── components/
│   ├── AnimatedSection.js    # Scroll-triggered animations & stagger wrappers
│   ├── Footer.js             # Social links footer
│   ├── Navbar.js             # Sticky nav with Projects dropdown & theme toggle
│   ├── NeuralBackground.js   # Canvas neural network + floating AI terms
│   └── SectionWrapper.js     # Animated section title wrapper
├── context/
│   └── ThemeContext.js        # Light/dark theme provider
├── data/
│   └── portfolioData.js      # All portfolio content (edit this to personalize)
├── pages/
│   ├── About.js              # Hero section with avatar & social icons
│   ├── Education.js          # Education timeline
│   ├── Experience.js         # Work experience timeline
│   ├── Publications.js       # Research publications
│   ├── Projects.js           # Multi-select filtered project cards
│   ├── Certifications.js     # Certification badges
│   └── Contact.js            # Contact form (EmailJS)
├── App.js                     # Router & layout
├── index.js                   # Entry point
└── index.css                  # Tailwind directives & custom utilities
```

## Prerequisites

- **Node.js**: v24.13.0
- **npm**: v11.6.2
- **Git** (optional, for cloning)

If you prefer to match the exact Node/npm used during development, use `nvm` (macOS/Linux) or `nvm-windows` on Windows and run `nvm install 24.13.0` then `nvm use 24.13.0`.

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   If you cloned the repo and `package-lock.json` exists, use `npm ci` for a reproducible install:

   ```bash
   # use nvm to switch to the pinned Node version first (optional but recommended)
   nvm install 24.13.0
   nvm use 24.13.0

   # install exact dependencies from the lockfile
   npm ci
   ```

   If you don't have a lockfile or need to update packages, use:

   ```bash
   npm install
   ```

3. **Personalize your content**

   Open `src/data/portfolioData.js` and replace the placeholder data with your own information — name, bio, education, work experience, projects, publications, certifications, and social links.

4. **Set up the contact form (EmailJS)**

   See [EmailSetup.md](EmailSetup.md) for detailed instructions on configuring EmailJS so the contact form sends real emails.

5. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

6. **Build for production**

   ```bash
   npm run build
   ```

   The optimized output will be in the `build/` folder, ready to deploy.

## Deployment

The production build can be deployed to any static hosting provider:

- **Vercel** — `npx vercel`
- **Netlify** — drag & drop the `build/` folder, or connect your Git repo
- **GitHub Pages** — install `gh-pages` and add deploy scripts
- **Any static server** — `npx serve -s build`

## Customization

| What to change | Where |
|---|---|
| Personal info, bio, social links | `src/data/portfolioData.js` |
| Avatar / profile photo | `personalInfo.avatarUrl` in portfolioData |
| Theme colors | `tailwind.config.js` → `colors.primary` |
| EmailJS credentials | `src/pages/Contact.js` (see [EmailSetup.md](EmailSetup.md)) |
| Neural background density | `NODE_COUNT` & `WORD_COUNT` in `NeuralBackground.js` |
| AI floating terms | `AI_TERMS` array in `NeuralBackground.js` |

## License

This project is open source and available under the [MIT License](LICENSE).
