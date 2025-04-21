# VipTech Store

A comprehensive e-commerce platform built with Next.js 15, React 19, TypeScript, and PostgreSQL.

<img src="/public/images/doc1.png" alt="Vip Tech Store" />

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Database](#database)
  - [Setup](#setup)
  - [Seeding the Database](#seeding-the-database)
  - [Prisma Studio](#prisma-studio)
- [Development](#development)
- [Testing](#testing)
- [Production](#production)
- [Email Development](#email-development)
- [Common Issues & Solutions](#common-issues--solutions)
  - [Edge Function Size Limits](#edge-function-size-limits)
  - [Cart Isolation Between Users](#cart-isolation-between-users)
  - [Order Privacy Protection](#order-privacy-protection)
  - [Cart Button Loading States](#cart-button-loading-states)
- [Tailwind CSS v4 Notes](#tailwind-css-v4-notes)
- [License](#license)

## Overview

VipTech Store is a feature-rich e-commerce platform for technology products. This project demonstrates a modern approach to building e-commerce solutions with the latest web technologies, focusing on performance, user experience, and developer ergonomics.

**Live Demo:** [https://viptech.store](https://viptech.store)

## Features

- **Authentication:** Secure user authentication with Next Auth
- **Admin Dashboard:** Comprehensive admin area with analytics and charts
- **Order Management:** Complete order lifecycle management
- **User Profiles:** User area with profile customization and order history
- **Payment Integration:** Multiple payment options including Stripe and PayPal
- **Cash on Delivery:** Support for offline payment methods
- **Interactive Checkout:** Streamlined multi-step checkout process
- **Product Showcase:** Featured products with banner displays
- **Multi-image Support:** Product galleries using Uploadthing
- **Reviews & Ratings:** Customer feedback and rating system
- **Search Functionality:** Advanced search with filtering options
- **Sorting & Filtering:** Dynamic product browsing
- **Pagination:** Efficient data loading and display
- **Dark/Light Mode:** Theme toggle for user preference
- **Email Notifications:** Order confirmations and receipts via Resend
- **Responsive Design:** Mobile-friendly interface

<img src="/public/images/doc2.png" alt="Vip Tech Store" />

*Admin dashboard showing sales analytics and key performance metrics*

## Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ShadCN UI
- Recharts
- Framer Motion
- Embla Carousel

### Backend

- Next.js API Routes
- PostgreSQL
- Prisma ORM
- Next Auth
- Zod Validation

### Payment Processing

- Stripe API
- PayPal API

### File Storage

- Uploadthing

### Email Services

- Resend API
- React Email

### Testing

- Jest

<img src="/public/images/doc3.png" alt="Vip Tech Store" />
*Product catalog page with advanced filtering and sorting options*

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- PostgreSQL database (Recommended: Neon Postgres)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/viptech-store.git
   cd viptech-store
   ```

2. Install dependencies:

   ```bash
   npm install
   # Or if you encounter React 19 compatibility issues:
   npm install --legacy-peer-deps
   ```

3. Set up environment variables (see below)

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NEXT_PUBLIC_APP_NAME = "Vip Tech Store"
NEXT_PUBLIC_APP_DESCRIPTION = "A modern technology products store"
NEXT_PUBLIC_SERVER_URL = "http://localhost:3000"

# Database
DATABASE_URL="postgresql://username:password@host:port/dbname"

# Auth
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000

# Payment
PAYMENT_METHODS="PayPal, Stripe, CashOnDelivery"
DEFAULT_PAYMENT_METHOD="PayPal"
PAYPAL_API_URL="https://api-m.sandbox.paypal.com"
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_APP_SECRET="your-paypal-secret"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"

# File Uploads
UPLOADTHING_TOKEN="your-uploadthing-token"
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APPID="your-uploadthing-appid"

# Email
RESEND_API_KEY="your-resend-api-key"
SENDER_EMAIL="your-verified-email@domain.com"
```

#### Generating a Next Auth Secret

```bash
openssl rand -base64 32
```

## Database

### Setup

This project uses PostgreSQL with Prisma ORM. For a free PostgreSQL database, you can use Neon:

1. Sign up at [Neon](https://neon.tech)
2. Create a new project and get your connection string
3. Add the connection string to your `.env` file as `DATABASE_URL`

### Seeding the Database

To populate your database with initial data:

```bash
npx tsx ./db/seed
```

### Prisma Studio

To open the Prisma database GUI:

```bash
npx prisma studio
```

## Development

```bash
# Start the development server
npm run dev
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Email Development

To preview emails during development:

```bash
npm run email
```

This will start a preview server at [http://localhost:3001](http://localhost:3001)

## Common Issues & Solutions

### Edge Function Size Limits

If you encounter a Vercel deployment error about edge function size limits, modify your middleware configuration to reduce the bundle size. Check the Vercel documentation for more details on optimizing edge function size.

### Cart Isolation Between Users

To ensure each user has their own isolated cart, the system clears cart data during user sign-out. This prevents the next user on the same device from inheriting items from the previous user's cart.

### Order Privacy Protection

The application includes authorization checks to prevent users from viewing orders that don't belong to them. If a user attempts to access another user's order, they will be redirected to an unauthorized page.

### Cart Button Loading States

Each cart modification button (add/remove) has its own independent loading state to improve user experience during cart updates.

<img src="/public/images/doc4.png" alt="Vip Tech Store" />

*Responsive mobile design ensures optimal shopping experience on all devices*

## Tailwind CSS v4 Notes

This project works with Tailwind CSS v4. If you're upgrading from v3, you may need to run the migration tool:

```bash
npx @tailwindcss/upgrade
```

Key changes for Tailwind v4:

- Updated global CSS structure
- Different configuration format
- Modified utility class names

## License

**All Rights Reserved**

Copyright (c) 2025 Fernando Hiroshi - [GitHub](https://github.com/fernandohiroshi)

This source code is provided for viewing and testing purposes only.

No permission is granted for:

- Copying, modifying, or distributing this software
- Using any portion of this code in other projects
- Commercial or non-commercial use of any kind

You may view and test this application, but may not reproduce, distribute, or create derivative works from it.
