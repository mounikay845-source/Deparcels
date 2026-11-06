# 📦 DPARCELS — On-Demand Instant Logistics & Delivery Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-deparcels.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://deparcels.vercel.app)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)

**DPARCELS** is an on-demand hyperlocal logistics and package delivery platform designed for urban and intercity courier services. Built with a responsive, mobile-first design, it streamlines the end-to-end delivery lifecycle—from real-time fare estimates and map-based route planning to live driver tracking and order management.

---

## 🌐 The DPARCELS Ecosystem (Live Deployments)

The platform is designed with a multi-role architecture connecting customers, delivery riders, and operations administrators:

| Portal | Role | Live URL | Repository |
| :--- | :--- | :--- | :--- |
| **Customer App** | Book deliveries, calculate fares, track shipments | 🚀 [deparcels.vercel.app](https://deparcels.vercel.app) | [Deparcels](https://github.com/mounikay845-source/Deparcels) |
| **Admin Dashboard** | Operations monitoring, order dispatch, logistics analytics | 📊 [d-admin-page.vercel.app](https://d-admin-page.vercel.app) | [DAdminPage](https://github.com/mounikay845-source/DAdminPage) |
| **Rider Partner App** | Order acceptance, navigation, pickup/delivery confirmation | 🛵 [d-rider.vercel.app](https://d-rider.vercel.app) | [DRider](https://github.com/mounikay845-source/DRider) |

---

## ✨ Key Features

- **🗺️ Interactive Route & Map Tracking:** Integrated with **Leaflet.js** for geolocation selection, pickup and drop-off pinning, and route visualization.
- **⚡ Dynamic Pricing & Vehicle Selection:** Instant fare estimations calculated across multiple vehicle tiers (Bike Express, Scooter, Mini Van, Cargo Truck).
- **📦 Comprehensive Order Lifecycle:** Step-by-step parcel booking modal with item categorization, recipient details, and payment options.
- **📜 Active Shipments & Order History:** Dedicated view to inspect past orders, current status badges (*Pending*, *In-Transit*, *Delivered*), and digital receipts.
- **🔔 Live Notifications & Alerts:** Slide-out drawer delivering contextual updates on order status, rider assignments, and promo alerts.
- **🌐 Multi-Language Support:** Language selection drawer supporting localization for regional customer accessibility.
- **📱 Mobile-First PWA-Ready UI:** Optimized for fluid performance on mobile viewports with bottom navigation controls and gesture drawers.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Mapping & Geolocation:** [Leaflet.js](https://leafletjs.com/)
- **Styling:** Custom Modular CSS with CSS Variables & Responsive Flex/Grid
- **Deployment & Hosting:** [Vercel](https://vercel.com/)
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```text
Deparcels/
├── docs/                 # Documentation assets
├── images/               # App icons, screenshots, and visual assets
├── public/               # Static web assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── BottomNav.jsx           # Mobile bottom navigation bar
│   │   ├── Header.jsx              # Navigation header with profile & alerts
│   │   ├── HowItWorks.jsx          # Workflow guide for first-time users
│   │   ├── LanguageDrawer.jsx      # Multi-language selector drawer
│   │   ├── NotificationDrawer.jsx  # Notification center
│   │   ├── OrderModal.jsx          # Booking & map routing modal
│   │   ├── PromoCard.jsx           # Deals, coupons & referral banners
│   │   └── ServiceCards.jsx        # Service category selectors
│   ├── context/          # React Context providers for global state
│   ├── views/            # Main screen views
│   │   ├── HomeView.jsx            # Main dashboard & quick booking
│   │   ├── LoginView.jsx           # User authentication & role selection
│   │   ├── OrdersView.jsx          # Shipment tracking & historical orders
│   │   ├── RegisterView.jsx        # New user onboarding
│   │   ├── SettingsView.jsx        # User preferences & addresses
│   │   └── SupportView.jsx         # Help center & FAQ
│   ├── App.jsx           # Root layout and view router
│   ├── main.jsx          # Entry point
│   └── index.css         # Global design system & theme tokens
├── index.html            # HTML entry template
├── package.json          # Dependencies & scripts
└── vite.config.js        # Vite configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mounikay845-source/Deparcels.git
   cd Deparcels
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👩‍💻 Author

**Mounika Yadav**
- GitHub: [@mounikay845-source](https://github.com/mounikay845-source)
- Email: `mounikay845@gmail.com`
