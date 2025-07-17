# MiniCommerce

MiniCommerce is a lightweight front-end shopping app built with Angular. It’s a clean, mobile-friendly prototype that lets users browse products, search through them, and add items to their cart — all without needing a backend.


## What I Built

This is a small e-commerce front-end made for a technical assessment. It includes:

- A home page with a grid of featured products
- A cart system that stores items using `localStorage`
- A working search bar to filter products
- A mobile-friendly navigation menu
- Cart item count displayed in the nav
- Basic checkout page

No database, no backend — just a simple, clean front-end built with real-world practices.


## Design & Responsiveness

The UI is simple but carefully thought out:

- **Layout**: Uses Tailwind’s grid and flex utilities for a responsive layout
- **Colors**: Clean whites and grays with orange accents for CTAs and green for success
- **Responsiveness**:
  - Works smoothly on all screen sizes
  - Hamburger menu appears on mobile
  - Product grid adjusts columns from 1 (mobile) to 4 (large screens)
- **User feedback**:
  - Buttons change on hover
  - Add-to-cart success includes a bouncing check icon

Everything is optimized to look good and feel responsive.


## Tools & Techniques

- **Framework**: Angular 17 (with standalone components)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome for cart, checkout, etc.
- **State Management**: Local component state + `localStorage`
- **Routing**: Angular Router (no lazy loading yet)
- **Patterns**: Reusable components, separation of concerns

*No backend, no API calls — this is a 100% front-end project.*


## 🚀 SEO & Performance

Since it's a single-page app (SPA), SEO is limited, but:

- Semantic tags like `<main>`, `<section>`, and ARIA labels are used
- Images are optimized with fixed height + `object-cover`
- CSS is lean thanks to Tailwind’s purge feature

The result: fast, accessible, and easy to navigate.


## 🧯 Error Handling

There’s no backend, but I’ve handled typical UI scenarios:

- **Loading state**: Spinner shown while products load
- **Empty state**: “No products found” if search returns nothing
- **Cart logic**:
  - “Add to cart” button is disabled once an item is added
  - A success message with a green check appears after adding

If this were connected to an API, I’d add global error handling and a logging service