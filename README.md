SwapAm — React Crypto Exchange Website

**SwapaAm** is a modern, responsive, single-page crypto and gift cards exchange platform built with React, Tailwind CSS, and Framer Motion. It provides real-time market data, trading CTA buttons, FAQs, and a secure trading feel — perfect for onboarding users into the crypto world.

## ✨ Features

- Hero section with animated CTA
- Real-time crypto market prices (CoinGecko API)
- “Why Trade With Us” section with animation
- FAQ accordion using Headless UI
- WhatsApp integration for instant trading
- Mobile-first responsive design
- Styled with Tailwind CSS
- Animations with Framer Motion
- Toast & modal alerts with Sonner & SweetAlert2
- Secure structure ready for expansion

🛠️ Tech Stack

| Frontend   | Purpose                     |
|------------|-----------------------------|
| React      | Component-based UI          |
| Tailwind CSS | Styling framework         |
| Framer Motion | Animation & transitions |
| Sonner     | Toast alerts                |
| SweetAlert2 | Confirmation modals        |
| Lucide React | Beautiful icons           |
| CoinGecko API | Real-time market data    |


## Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/cryptoxchange.git

# Go into the project folder
cd SwapAm

# Install dependencies
npm install

# Start development server
npm run dev


src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── MarketSection.jsx
│   ├── WhyTradeSection.jsx
│   ├── FaqSection.jsx
│   └── Footer.jsx
├── reuseables/
│   └── Button.jsx
├── App.jsx
└── main.jsx

