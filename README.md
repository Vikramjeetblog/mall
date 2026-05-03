#  Sell Deck – Interactive Experience Platform

An immersive, non-linear **sell deck web experience** designed to showcase Retail, Sponsorship, and Event opportunities through cinematic UI, video storytelling, and structured navigation.

##  Overview

This project is not a traditional website.  
It is a **decision-driven interface** that guides users through different commercial opportunities using a layered experience.

Instead of presenting all information at once, the platform:
- Introduces high-level context
- Allows users to choose a path
- Leads them into detailed sections
##  Core Concept

> “Guide first. Explain later.”

The system is structured into:

1. **Why Section** → Builds trust & context  
2. **Sell Desk** → Helps users choose direction  
3. **Detail Pages** → Provides complete information  

##  User Flow
Hero Section
↓
Why This Property (Story Slides)
↓
Sell Desk Panel (Retail / Sponsors / Events)
↓
Detailed Pages (Deep Dive)

---

##  Key Features

###  Cinematic UI
- Full-screen video storytelling
- Smooth transitions using Framer Motion

###  Non-linear Navigation
- Users can switch between categories instantly
- No forced linear flow

###  Structured Exploration
- Minimal overview → Detailed pages
- Reduces cognitive load

###  Dynamic CTA
- Context-based actions (Retail / Sponsorship / Events)

---

##  Media Strategy

A balanced approach is used:

### Video
- Used for **entry points and storytelling**
- Communicates scale and environment

### Images (AI Generated)
- Used in **subsections (leasing, breakdowns)**
- Improves clarity and focus

> Video attracts attention, images deliver information.

##  Tech Stack

-  React (Vite)
-  Framer Motion
-  Tailwind CSS
-  React Router
-  react icons

## Project Structure
src/
├── components/
│ ├── SellDeskPanel.jsx
│
├── pages/
│ ├── Why.jsx
│ ├── Experience.jsx
│ ├── Retail.jsx
│ ├── Sponsor.jsx
│ ├── Events.jsx
│
├── assets/
│ ├── videos/
│ ├── images/
│
└── App.jsx

##  Getting Started

### 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mall.git
cd mall
### 2. Install dependencies
npm install
### 3. Run development server
npm run dev
##  Build

##  Known Challenges

- Video loading performance
- Mobile responsiveness (partially optimized)
- Large media asset handling

##  Future Improvements

- Video optimization (compression + preload)
- Full mobile responsiveness polish
- Scroll-based storytelling (Apple-style UX)
- Performance enhancements
- Lead capture / conversion features

##  Design Philosophy

- Minimal at entry  
- Deep on demand  
- Visual-first storytelling  
- Decision-driven UX  

---
