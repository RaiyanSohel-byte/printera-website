# 🖨️ Printera – Printing Service Website

A modern, full-featured business website for a professional printing and signage company. Built with Next.js and deployed on Vercel.

🔗 **Live Demo:** [printera-website.vercel.app](https://www.plasticlettersandsigns.com/)

---

## 📸 Overview

Printera is a business-facing web application for a printing and signage company offering ADA signs, nameplates, banners, decals, and more. The site features an interactive product customizer with live previews, a filterable product catalog, a portfolio gallery, user authentication, and a quote request system.

---

## ✨ Features

- **🏠 Landing Page** — Hero section with image carousel, category browser, featured products grid, testimonials, and newsletter signup
- **🛍️ Product Catalog** — Browse all products with multi-filter support (material, application type, price range)
- **🎨 Interactive Product Customizer** — Live sign preview with real-time pricing updates based on selected dimensions and materials; step-by-step configuration flow
- **🖼️ Portfolio Gallery** — Filterable project gallery (Government, Corporate, Retail) with individual project detail pages
- **📋 Request a Quote** — Contact form for customers to submit project inquiries
- **🔐 User Authentication** — Register/login flow with Google OAuth sign-in option
- **📱 Responsive Design** — Fully responsive layout across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology                  | Purpose                  |
| --------------------------- | ------------------------ |
| **Next.js 14** (App Router) | Framework & routing      |
| **React**                   | UI component library     |
| **JavaScript**              | Primary language         |
| **Tailwind CSS**            | Utility-first styling    |
| **Next.js Image**           | Optimized image delivery |
| **Vercel**                  | Deployment & hosting     |

---

## 📁 Project Structure

```
printera-website/
├── app/
│   ├── page.js               # Home / landing page
│   ├── products/
│   │   ├── page.js           # Product catalog with filters
│   │   └── [id]/page.js      # Individual product customizer
│   ├── portfolio/
│   │   ├── page.js           # Portfolio gallery
│   │   └── [id]/page.js      # Portfolio project detail
│   ├── request-quote/
│   │   └── page.js           # Quote request form
│   ├── promo-catalogue/
│   │   └── page.js           # Promotional catalog
│   ├── register/page.js      # User registration
│   ├── login/page.js         # User login
│   └── layout.js             # Root layout
├── public/                   # Static assets (images, icons)
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/RaiyanSohel-byte/printera-website.git
cd printera-website

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 📦 Deployment

This project demo is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build

---

## 📄 Pages

| Route              | Description                          |
| ------------------ | ------------------------------------ |
| `/`                | Home / landing page                  |
| `/products`        | Full product catalog with filters    |
| `/products/[id]`   | Product customizer with live preview |
| `/portfolio`       | Project portfolio gallery            |
| `/portfolio/[id]`  | Portfolio project detail             |
| `/request-quote`   | Quote request form                   |
| `/promo-catalogue` | Promotional catalog                  |
| `/register`        | User registration                    |
| `/login`           | User login                           |

---

## 📬 Contact

For questions about this project, reach out via the [Request a Quote](https://printera-website.vercel.app/request-quote) page on the live site.
