# Pavan Gowda J | Ryomen Sukuna Portfolio & AstroRunner

[![React](https://img.shields.io/badge/React-19-61dafb.svg?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-rose.svg?style=for-the-badge)](LICENSE)

> **両面宿儺 · 呪霊技術**
> *"Those who build with cursed precision need no permission to expand their domain."*

Personal developer portfolio of **Pavan Gowda J**, BCA AI & Data Science student and software engineer, featuring the **Malevolent Shrine** aesthetic, an interactive **Cursed CLI Terminal**, real-world AI and computer vision projects, and a fully playable retro arcade game: **AstroRunner: Asteroid Belt**.

---

## ⛩️ Key Features

- **Domain Expansion Visual System**:
  - Immersive Malevolent Shrine obsidian & cinnabar aesthetic with Japanese typography (`Cinzel` & `JetBrains Mono`).
  - Interactive Cursed Particles Canvas: floating crimson embers and dynamic mouse-drag slash trails.
  - Three switchable Domain states: *Malevolent Shrine* (Dark), *Reverse Cursed Technique* (Ethereal Silver), and *Domain Amplification* (Cyber Amber).
  - Screen-slicing *Cleave & Dismantle* animations.
- **AstroRunner: Asteroid Belt (Playable Arcade)**:
  - 60 FPS deterministic canvas 2D endless runner built directly into the site.
  - Leap over rocky surface asteroids (`[SPACE]` / `[↑]`) and slide/duck under low-orbit surveillance satellites (`[S]` / `[↓]`).
  - Collect oxygen canisters, star cores, and secret Sukuna finger shards.
  - CRT scanline shader pass toggle & on-screen mobile touch controls.
  - LocalStorage high-score persistence.
- **Web Audio API Sound Engine**:
  - Zero external MP3/WAV dependencies; real-time browser oscillator synthesis.
  - Retro 8-bit arcade tones, resonant domain expansion bell, and visceral slash cutting sound effects with one-click master mute.
- **Cursed CLI Terminal (`sukuna-shrine-cli`)**:
  - Interactive terminal emulator with keyboard command history (`↑`/`↓`).
  - Supported directives: `help`, `whoami`, `skills`, `projects`, `astrorunner`, `domain`, `cleave`, `relics`, `contact`, `clear`.
- **20 Sukuna Fingers Relic Tracker**:
  - Interactive cursed relic inventory. Click individual talismans across the site to awaken dormant cursed energy and scale your output capacity to 100%.
- **Direct Summoning Transmission**:
  - Integrated contact channel for `mikeysanomanjiro558@gmail.com` with one-click clipboard copying, direct mail client integration, and sealed inscription form.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Hooks, Functional Architecture)
- **Language**: TypeScript 5.x (Strict Typing)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`)
- **Graphics Engine**: HTML5 Canvas 2D Context (AstroRunner & Particle System)
- **Audio Synthesis**: Native Web Audio API (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`)
- **Icons**: Lucide React
- **Build Tool**: Vite 8

---

## 🚀 Quickstart & Local Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or bun or yarn

### 1. Clone or Download Repository
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/pavan-gowda-sukuna-portfolio.git
cd pavan-gowda-sukuna-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` folder.

---

## 📦 How to Publish to GitHub (Step-by-Step)

Follow these steps to publish this project to your GitHub account:

### Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g. `pavan-gowda-sukuna-portfolio` or `<your-username>.github.io` for your main portfolio).
3. Set visibility to **Public**.
4. Leave "Add a README file" **unchecked** (we already have this complete README!).
5. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
Run the following commands in your project terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: Initial release of Pavan Gowda J Ryomen Sukuna Portfolio & AstroRunner"

# Rename branch to main
git branch -M main

# Link your GitHub repository (replace with your actual GitHub repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/pavan-gowda-sukuna-portfolio.git

# Push to GitHub!
git push -u origin main
```

---

## 🌐 Free 1-Click Deployment Options

### Option A: Deploy to GitHub Pages (Automated via GitHub Actions)
A pre-configured GitHub Actions workflow is included at `.github/workflows/deploy.yml`.
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every time you push to `main`, your portfolio will automatically build and publish!

### Option B: Deploy to Vercel (Fastest)
1. Go to [vercel.com](https://vercel.com) and click **Add New** → **Project**.
2. Import your GitHub repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**. Done in 30 seconds!

### Option C: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and click **Add new site** → **Import an existing project**.
2. Connect your GitHub repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 🎮 AstroRunner Game Controls

| Action | Keyboard | Touch / Mobile |
| :--- | :--- | :--- |
| **Jump / Launch** | `[SPACE]`, `[↑]`, `[W]` | Tap `JUMP [↑]` Button |
| **Slide / Duck** | `[↓]`, `[S]` | Hold `DUCK [↓]` Button |
| **Pause / Resume** | `[P]` | On-screen pause |
| **Restart Game** | `[R]` (when game over) | Tap `Restart` Button |
| **Toggle Scanlines** | On-screen CRT icon | On-screen CRT icon |

---

## 💻 Cursed CLI Terminal Commands

Inside the on-page terminal:
- `help` - Display available commands
- `whoami` - Show developer profile, education, and credentials
- `skills` - Display full AI, Data Science & Software Engineering stack
- `projects` - List all technical deployments & specifications
- `astrorunner` - Launch the retro arcade endless runner
- `domain` - Unfold Domain Expansion visual state
- `cleave` / `dismantle` - Trigger spatial screen slash animation
- `relics` - View status of collected Sukuna Finger Shards
- `contact` - Transmit message to Pavan Gowda J
- `clear` - Wipe console viewport

---

## 👤 Author & Contact

**Pavan Gowda J**  
- **Degree**: Bachelor of Computer Applications (BCA) in Artificial Intelligence & Data Science  
- **Email**: [mikeysanomanjiro558@gmail.com](mailto:mikeysanomanjiro558@gmail.com)  
- **GitHub**: [github.com](https://github.com)  
- **LinkedIn**: [linkedin.com](https://linkedin.com)  

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal portfolio inspiration or educational projects!
