# Content Guide

## Overview

This document explains how website content is structured, managed and updated for the Beyond Horizon Technologies website.

The website uses a data-driven approach where most content is separated from HTML pages and stored inside JSON files.

This allows content updates without modifying the main website structure.

---

# Content Structure


data/

├── company.json
├── faq.json
├── industries.json
├── navigation.json
├── products.json
├── services.json
├── settings.json
└── testimonials.json


---

# Company Content

File:


data/company.json


Used for:

- Company information
- Mission and vision
- Technology focus
- Contact details
- Certifications

Example:

```json
{
    "name": "Beyond Horizon Technologies",
    "description": "Company description"
}

Update when:

Company profile changes
New certifications are added
Contact information changes
Product Content

File:

data/products.json

Controls:

Product listings
Product categories
Features
Applications
Gallery images
Videos
Documents

Each product contains:

Product
│
├── Name
├── Category
├── Description
├── Features
├── Applications
├── Media
└── Documents

Example:

{
    "id": "product-name",
    "name": "Product Name",
    "category": [
        "inspection"
    ]
}
Adding A New Product
Step 1: Create Product Folder

Create:

assets/images/products/product-name/

Add:

hero.webp
overview.webp
features.webp
package.webp
gallery1.webp
gallery2.webp
gallery3.webp
Step 2: Add Product Documents

Add files:

assets/downloads/brochures/

assets/downloads/datasheets/

assets/downloads/manuals/
Step 3: Add Video

Create:

assets/videos/products/product-name/

Add:

intro.mp4
Step 4: Update JSON

Add product information inside:

data/products.json
Industry Content

File:

data/industries.json

Controls:

Industry pages
Industry descriptions
Applications
Recommended solutions

Each industry contains:

Industry
│
├── Name
├── Image
├── Description
├── Applications
└── Solutions
Service Content

File:

data/services.json

Controls:

Service descriptions
Capabilities
Supported industries

Used for:

Service sections
Company overview
Solution pages
FAQ Content

File:

data/faq.json

Controls:

Frequently asked questions
Support page FAQ section

Structure:

{
    "question": "Question",
    "answer": "Answer"
}
Navigation Content

File:

data/navigation.json

Controls:

Main menu
Dropdown menus
Sidebar navigation

Example:

{
    "title": "Products",
    "url": "products.html"
}

Update when:

Adding pages
Removing pages
Changing menu structure
Website Settings

File:

data/settings.json

Controls:

Website title
SEO information
Theme settings
Feature switches
File paths

Example:

{
    "theme_color": "#0b132b"
}
Testimonial Content

File:

data/testimonials.json

Controls:

Customer reviews
Partner feedback
Success stories

Each testimonial contains:

Testimonial
│
├── Name
├── Company
├── Role
├── Message
└── Image
Writing Guidelines
Company Tone

Content should be:

✅ Professional
✅ Technology-focused
✅ Clear and concise
✅ Solution-oriented

Avoid:

❌ Excessive technical jargon
❌ Unsupported claims
❌ Over-promising results

Product Description Guidelines

Recommended structure:

Short Description

1 sentence explaining what the product does.

Example:

Advanced UAV solution for aerial inspection and digital mapping.
Full Description

Explain:

Problem solved
Technology used
Operational benefits
Features

Use short points:

Good:

- Remote operation
- High accuracy data capture
- Improved inspection safety

Avoid:

This product is a very advanced system that can help many industries...
Image Content Guidelines

For each product:

Required:

hero.webp
features.webp
overview.webp
package.webp

Recommended:

gallery1.webp
gallery2.webp
gallery3.webp

Images should:

Represent actual technology
Have good quality
Be optimised for web
SEO Content Rules

Every page should include:

Title

Format:

Page Name | Beyond Horizon Technologies

Example:

Products | Beyond Horizon Technologies
Description

Keep between:

120 - 160 characters

Include:

Technology keywords
Industry keywords
Company name
Content Update Workflow

When updating content:

Update JSON file
Check related images
Test page display
Verify links
Deploy website
Content Checklist

Before publishing:

☐ Correct spelling
☐ Updated descriptions
☐ Images available
☐ Documents linked correctly
☐ Mobile display checked
☐ SEO information updated

End of Guide
