# Veeramani Biscuit Industries Pvt. Ltd. (ROSE®) - Complete Master Technical & Architectural Documentation

> **Project Name**: Veeramani Biscuit Industries Pvt. Ltd. (ROSE® Biscuits)  
> **Repository**: [judsoncodes/VBIL](https://github.com/judsoncodes/VBIL)  
> **Framework**: React 18 + Vite + Tailwind CSS + Framer Motion + React Router DOM + React Helmet Async + React Hook Form  
> **Documentation Date**: August 17, 2026  

---

## 1. Executive Summary & Overview of Accomplishments

This master technical document provides a complete, detailed record of all design system specifications, color tokens, logo/icon implementations, component architectures, governance policies, lead tracking infrastructure, anti-spam mechanisms, and Lighthouse audit metrics for **Veeramani Biscuit Industries Pvt. Ltd. (ROSE® Biscuits)**.

---

## 2. Complete Brand Color System & Tokens

The color palette was sampled directly from the official ROSE® logo graphic (`logo1.png` / `Screenshot 2026-08-16 223356.svg`) and codified into [tailwind.config.js](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/tailwind.config.js):

| Color Name | Hex Code | Token Name | Usage & Role |
| :--- | :---: | :---: | :--- |
| **Sampled ROSE Logo Red** | `#F50108` | `maroon-800` | **Primary Brand Single Source of Truth**: CTAs, main logo oval, active scrollbars, focus rings, flagship badge pills |
| **Deep ROSE Red** | `#9E1117` | `maroon-900` | High-contrast headings, hover states for red buttons, dark maroon gradient stops |
| **Rich Dark ROSE Red** | `#6B0A0F` | `maroon-950` | Radial hero vignettes, dark section background stops |
| **Vibrant Red Accent** | `#FF333B` | `maroon-700` | Soft hover highlights on dark red surfaces |
| **Warm Biscuit-Gold** | `#D9A441` | `gold-500` | Secondary brand color, weight selector pills, gold glows, distribution badges |
| **Dark Biscuit-Gold** | `#C49132` | `gold-600` | Border accents, hover states for gold buttons |
| **Light Gold Tint** | `#E2B65E` | `gold-400` | Subtitles on dark backgrounds, active tab borders |
| **Base Toasted Cream** | `#F7EFE1` | `cream-100` | **Primary App Surface Color**: Light background across all pages and sections |
| **Soft Cream** | `#FFFDF9` | `cream-50` | Radial gradient center points, card highlight surfaces |
| **Warm Cream** | `#EFE4D0` | `cream-200` | Shimmer skeleton placeholders, subtle inner cards |
| **Deep Cream Border** | `#E2D3B8` | `cream-300` | Card borders, subtle divider lines |
| **Near-Black Espresso** | `#241A15` | `espresso-800` | **Primary Body Text**: High-contrast readable typography (WCAG AAA compliant) |
| **Darkest Espresso** | `#17110E` | `espresso-900` | Dark card backgrounds, footer surfaces |
| **Soft Rose Thread** | `#E8B4B8` | `rosePink-500` | Subtle accent borders and decorative line-art highlights |

### Tactile Paper Grain Texture
Applied via `.tactile-paper-grain` in [index.css](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/index.css):
- Uses a `3.5%` opacity SVG noise filter (`mix-blend-mode: multiply`) across cream surfaces to give a tactile, organic paper texture.

---

## 3. Logo & Icon System Implementation

### A. Main Header & Footer Logo Component ([RoseLogo.jsx](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/components/common/RoseLogo.jsx))
- **Image Source**: Renders `logo1.png` directly from `public/logo1.png`.
- **Seamless Background Blending**: Uses `mix-blend-multiply` CSS blending so the logo sits directly on the header's cream background (`#F7EFE1`), eliminating any white card container box or pasted-in rectangular background outline.
- **Clickable Navigation Redirect**: Implements React Router `useNavigate()` redirect to `/` (Home) with hover feedback (`hover:opacity-95`) and tooltip `"ROSE Biscuits - Click to return to Home"`.
- **Responsive Scaling**: Smoothly scales from `52px` down to `42px` when the header scrolls.

### B. Browser Tab Favicon ([index.html](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/index.html) & [public/favicon.svg](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/public/favicon.svg))
- Configured `<link rel="icon" type="image/png" href="/logo1.png" />` in `index.html`.
- Synchronized `public/favicon.svg` with `logo1.png` so the browser tab icon displays the authentic brand logo crisp and clear.

---

## 4. Category Grid Hierarchy ([CategoryGrid.jsx](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/components/home/CategoryGrid.jsx))

The product category grid follows a strict, balanced visual hierarchy:

1. **Card 1: Biscuits & Crackers** *(Flagship Range • 17 SKUs)*: Exclusive Full Brand Red (`bg-maroon-800`) with solid gold CTA button.
2. **Card 2: Hyderabadi Cookies** *(Artisanal Bakery • 10 SKUs)*: Quiet Toasted Cream (`bg-cream-100 border border-cream-300`) with deep maroon "Heritage Recipe" (WCAG AAA 12.5:1 ratio).
3. **Card 3: Chocobullets & Wafer Rolls** *(Wafers & Rolls • 9 SKUs)*: Quiet Toasted Cream (`bg-cream-100 border border-cream-300`).
4. **Card 4: Hyderabadi Biryani Papad** *(Savory & Spicy • 10 SKUs)*: Dark Espresso Neutral (`bg-espresso-800 border border-espresso-700`).
5. **Card 5: Duet Series (Mango, Kulfi & Vanilla)** *(New Teaser)*: Quiet Cream Teaser (`bg-cream-100 border-2 border-dashed border-maroon-800/20`).

---

## 5. Manual Governance Theme System ([theme.js](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/data/theme.js))

Refactored to eliminate automatic date-based activation and enforce manual human approval for festival campaigns:
- **Enforced Governance Policy**:
  ```javascript
  // Explicit human-selected campaign key (e.g. "diwali", "sankranti", "eid", "holi", "rakhi", "ganesh", "christmas")
  // Set `currentCampaign = null` to restore the standard regular brand home screen experience!
  export const currentCampaign = null; 
  ```

---

## 6. B2B Regional Stockist Lookup & Distributors Portal ([Distributors.jsx](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/pages/Distributors.jsx))

- **Clean Placeholder Dataset ([distributors.js](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/data/distributors.js))**: Structured with a single sample entry (`"Sample Entry — Real Data Pending"`) for zero-code client spreadsheet drop-in.
- **Stockist Finder**: Filter by State (Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Karnataka, Kerala) + instant search.
- **B2B Distributor Application Form**: Captures Firm Name, Contact Person, Phone, Email, Target Region, Storage Capacity, Experience, and Notes.

---

## 7. B2B Wholesale Bulk Order Request System ([OrderRequest.jsx](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/src/pages/OrderRequest.jsx))

- **Dedicated Route `/order-request`**: Direct, shareable URL for wholesale buyers & sales representatives.
- **Repeatable Multi-Line Product Selector**: Add multiple SKU line items in **cases/cartons** (Category, SKU Name, Pack Variant, Case Quantity).
- **Expectation Setting**: *"We'll confirm pricing, availability, and delivery timeline within 24-48 hours"* (credit-based trade quote flow, zero payment gateway needed).

---

## 8. Form Submission Architecture & Google Sheets Integration

| Form Component | Route | Target Backend Infrastructure | Environment Variable |
| :--- | :--- | :--- | :--- |
| **General Contact** | `/contact` | Formspree | `VITE_FORMSPREE_CONTACT_ENDPOINT` |
| **Distributor Signup** | `/distributors` | Google Sheets Web App | `VITE_SHEETS_DISTRIBUTOR_ENDPOINT` |
| **Bulk Order Request** | `/order-request` | Google Sheets Web App | `VITE_SHEETS_ORDER_ENDPOINT` |

### Google Apps Script Web App Setup (`google-apps-script.js`)
- **Environment Variable Mapping**: Endpoints configured via `VITE_SHEETS_DISTRIBUTOR_ENDPOINT` and `VITE_SHEETS_ORDER_ENDPOINT` in local `.env` (never hardcoded in documentation).
- **One Row Per SKU Feature**: Automatically iterates over requested product lines and appends **each ordered product SKU as its own individual row** (one by one) into the `Bulk Order Requests` tab!
- **Anti-Spam Protection**: Invisible `faxNumber` honeypot field in B2B forms that silently blocks automated bot spam.
- **Git Security**: `.env` and `.env*.local` added to `.gitignore`. [.env.example](file:///c:/Users/P%20J%20E%20Rajiah/OneDrive/Desktop/VBIL/.env.example) created as repository template.

---

## 9. Fresh Empirical Lighthouse Audit Metrics

Chrome Headless audit executed live against production Vite preview (`http://localhost:4173`):

| Category | Score | Real-Time Audit Summary |
| :--- | :---: | :--- |
| **SEO** | **100 / 100** | Perfect 100 — Meta descriptions, single `<h1>`, `robots.txt`, `sitemap.xml` |
| **Best Practices** | **100 / 100** | Perfect 100 — Modern HTTP headers, optimized JS chunks, zero console errors |
| **Accessibility** | **93 / 100** | High contrast (12.5:1 ratio), focus rings, accessible ARIA attributes |
| **Performance** | **88 / 100** | **Up +6 Points!** — Low Total Blocking Time (`140ms`), Zero Layout Shift (`CLS = 0`) |

### Fresh Core Web Vitals Breakdown:
- **First Contentful Paint (FCP)**: `2.7s`
- **Largest Contentful Paint (LCP)**: `3.0s` (Improved from `3.4s`)
- **Total Blocking Time (TBT)**: `140ms` (Improved from `290ms`)
- **Cumulative Layout Shift (CLS)**: `0.00` (Perfect zero shift)

---

*Document generated for Veeramani Biscuit Industries Pvt. Ltd. (ROSE®).*
