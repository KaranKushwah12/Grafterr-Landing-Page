# 🚀 Grafterr - Modern Technology Provider Landing Page

Grafterr is a high-performance, responsive landing page built with **React.js** and **Plain CSS**. It was developed to strictly match a provided Figma design, delivering a pixel-perfect UI/UX experience using modular architecture, custom responsive carousels, and robust state management without the use of any CSS frameworks.

---

## 🌐 Live Demo

🔗 [Insert Vercel / Netlify / GitHub Pages Live URL Here]

---

## ✨ Features

- 📱 **Fully Responsive Design** (Mobile, Tablet, Desktop)
- 🎡 **Custom Responsive Carousel** with touch swipe support
- 🧩 **Reusable Components Architecture**
- 🎨 **Pixel-Perfect UI** (Strict adherence to Figma without CSS frameworks)
- ⚡ **Fast Performance** with Vite
- ⏳ **Loading States** with custom Skeleton components
- ⚠️ **Error Boundaries** with retry mechanisms
- 📦 **Data-Driven Rendering** using mocked async APIs
- 🧠 **Custom Hooks** (`useContent`, `useCarousel`) for logic reusability

---

## 🛠️ Tech Stack

- **Framework:** React 18 (Functional Components + Hooks)
- **Build Tool:** Vite
- **Styling:** Plain CSS with CSS Variables (No CSS frameworks)
- **Data Fetching:** Mocked API with Promises simulating network latency

---

## 🚀 Advanced Improvements

- 🔐 TypeScript Integration (Static typing & interfaces)
- 🧪 Comprehensive Testing (Jest / React Testing Library)
- ⚡ Lazy Loading (React Suspense for images and sections)
- 🎯 Scroll Animations (Intersection Observer API)
- ♿ Accessibility Enhancements (ARIA, Semantic HTML, Keyboard Navigation)
- 🔄 CI/CD Pipeline Integration

---

## 📂 Project Structure

The project follows the required modular architecture:

```text
grafterr-landing/
├── public/
│   └── images/              # Image assets (pos.png, kiosk.png, kds.png)
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI elements (GradientText, GradientButton, ProductCard, Carousel, Skeleton)
│   ├── sections/            # Page sections (HeroSection, FeaturesSection)
│   ├── hooks/               # Custom hooks (useContent, useCarousel)
│   ├── services/            # Mock API layer (api.js)
│   ├── data/                # Static JSON content (content.json)
│   ├── styles/              # Global styles and CSS variables
│   ├── App.jsx              # Main application layout & error boundary
│   └── main.jsx             # React entry point

```

---

## 📦 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-username/grafterr-landing.git
```

### 2. Navigate to Project

```bash
cd grafterr-landing
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Project

```bash
npm run dev
```

If you like this project, please ⭐ the repository!
