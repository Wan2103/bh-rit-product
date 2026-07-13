# Assets Guide

## Overview

This document explains the organisation and usage of assets within the Beyond Horizon Technologies website.

The asset structure is designed to keep images, styles, scripts, documents and media files organised for easier maintenance and future updates.

---

# Asset Structure


assets/

├── css/
├── downloads/
├── icons/
├── images/
├── js/
├── pdf/
└── videos/


---

# CSS Directory

Location:


assets/css/


Contains all website styling files.

## Files

| File | Purpose |
|---|---|
| reset.css | Browser style reset |
| variables.css | Global design variables |
| typography.css | Font and text styling |
| layout.css | Containers and page layouts |
| navigation.css | Header and menu styling |
| hero.css | Hero section styling |
| cards.css | Card components |
| buttons.css | Button styles |
| products.css | Product page styling |
| gallery.css | Gallery layouts |
| modal.css | Popup/modal styling |
| slides.css | Slider components |
| timeline.css | Timeline sections |
| animations.css | Animation effects |
| responsive.css | Mobile and tablet layouts |
| style.css | Main stylesheet loader |

---

# JavaScript Directory

Location:


assets/js/


Contains website functionality.

## Files

| File | Purpose |
|---|---|
| app.js | Main application controller |
| loader.js | Component loading system |
| navigation.js | Navbar and menu functions |
| router.js | Page routing functions |
| productBuilder.js | Dynamic product generation |
| gallery.js | Gallery functionality |
| modal.js | Modal windows |
| search.js | Search functionality |
| slideBuilder.js | Slider generation |
| animation.js | Scroll animations |
| scroll.js | Scroll behaviour |
| theme.js | Theme controls |
| utils.js | Shared helper functions |

---

# Images Directory

Location:


assets/images/


Stores all website visual assets.

## Background Images


images/backgrounds/


Used for:

- Hero sections
- About pages
- Contact sections
- Industry banners
- Portfolio sections

---

## Company Images


images/company/


Contains:

- Company logo
- Office images
- Team photos
- Branding images

Example:


logo.webp
logo-white.webp
office.webp
team.webp


---

## Industry Images


images/industries/


Contains industry-specific visuals.

Available industries:

- Construction
- Infrastructure
- Education
- Oil & Gas

---

## Product Images

Location:


images/products/


Each product has its own folder.

Example:


products/
└── dji/
├── hero.webp
├── overview.webp
├── features.webp
├── package.webp
├── gallery1.webp
├── gallery2.webp
└── gallery3.webp


---

# Icon Directory

Location:


assets/icons/


Contains SVG icons.

## Categories

### Features


icons/features/


Used for:

- Inspection
- Mapping
- Robotics
- Analytics


### Industries


icons/industries/


Used for:

- Construction
- Infrastructure
- Education
- Oil & Gas


### Navigation


icons/navigation/


Contains:

- Logo
- Menu
- Search
- Close icons


### Support


icons/support/


Contains:

- FAQ
- Manual
- Contact icons


### UI


icons/ui/


Contains:

- Arrows
- Download icons
- External links
- Play buttons

---

# Download Directory

Location:


assets/downloads/


Contains downloadable resources.

## Categories

### Brochures


downloads/brochures/


Product marketing materials.

---

### Datasheets


downloads/datasheets/


Technical specifications.

---

### Manuals


downloads/manuals/


Product user manuals.

---

### Certifications


downloads/certifications/


Company certifications.

---

# PDF Directory

Location:


assets/pdf/


Contains product PDF resources organised by product.

Example:


pdf/products/
└── crawler/
└── brochure.pdf


---

# Video Directory

Location:


assets/videos/


Contains product demonstration videos.

Example:


videos/products/
└── dji/
└── intro.mp4


---

# Asset Naming Rules

Use:

- lowercase filenames
- hyphen separation
- descriptive names

Correct:


hero-image.webp
product-brochure.pdf
gallery1.webp


Avoid:


IMG001.webp
newfinal2.pdf
test-file.webp


---

# Image Guidelines

Recommended formats:

| Type | Format |
|-|-|
| Photos | WebP |
| Icons | SVG |
| Documents | PDF |
| Videos | MP4 |

Recommended image optimisation:

- Compress before upload
- Use WebP for website images
- Avoid oversized images
- Enable lazy loading

---

# Adding New Product Assets

When adding a new product:

Create:


images/products/product-name/

├── hero.webp
├── overview.webp
├── features.webp
├── package.webp
├── gallery1.webp
├── gallery2.webp
└── gallery3.webp


Add related files:


downloads/brochures/
downloads/datasheets/
downloads/manuals/

videos/products/product-name/


Update:


data/products.json


---

# Maintenance

Before deployment:

Checklist:

- Confirm file paths
- Optimise images
- Check missing assets
- Test downloads
- Verify mobile display
- Clear unused files

---

## End of Guide
