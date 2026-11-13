# Mahasamudram Likitha — Portfolio

A responsive modern developer portfolio website showcasing full-stack Java projects, interactive animations, and engineering capabilities.

## Live Site
- **URL:** [https://myportfolio-sepia-xi-37.vercel.app/](https://myportfolio-sepia-xi-37.vercel.app/)

## Tech Stack
- **Framework & Build:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS (Animate on Scroll), WebGL (Fluid Splash Cursor)
- **Email Service:** EmailJS (`@emailjs/browser`)
- **Icons & QR:** React Icons / SVGs, `react-qr-code`

## Environment Variables
To enable the interactive contact form with EmailJS, create a `.env.local` file in the root directory and configure the following variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

*(Note: If these variables are left unconfigured, the contact form automatically falls back to invoking the user's default email client via a prefilled mailto link).*

## Run Locally

Install project dependencies:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Run the linter:
```bash
npm run lint
```

## Credits
Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
