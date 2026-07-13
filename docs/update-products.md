# Product Update Guide

## Overview

This document explains how to add, remove and update products on the Beyond Horizon Technologies website.

The website uses a data-driven product system where product information is stored separately from the page structure.

Main product data file:


data/products.json


---

# Product Structure

Each product contains:


Product

├── Basic Information
│
├── Description
│
├── Features
│
├── Applications
│
├── Media
│
└── Documents


---

# Adding A New Product

## Step 1: Create Product Image Folder

Navigate to:


assets/images/products/


Create a new folder:

Example:


assets/images/products/new-product/


---

Add required images:


new-product/

├── hero.webp
├── overview.webp
├── features.webp
├── package.webp
├── gallery1.webp
├── gallery2.webp
└── gallery3.webp


---

# Image Purpose

| File | Usage |
|---|---|
| hero.webp | Main product banner image |
| overview.webp | Product introduction section |
| features.webp | Product capability section |
| package.webp | Package contents |
| gallery1.webp | Gallery image |
| gallery2.webp | Gallery image |
| gallery3.webp | Gallery image |

---

# Step 2: Add Product Video

Navigate to:


assets/videos/products/


Create:


new-product/


Add:


intro.mp4


The final path:


assets/videos/products/new-product/intro.mp4


---

# Step 3: Add Product Documents

## Brochure

Add:


assets/downloads/brochures/


Example:


new-product-brochure.pdf


---

## Datasheet

Add:


assets/downloads/datasheets/


Example:


new-product-datasheet.pdf


---

## Manual

Add:


assets/downloads/manuals/


Example:


new-product-manual.pdf


---

# Step 4: Update products.json

Open:


data/products.json


Add a new product object.

Example:

```json
{
    "id": "new-product",

    "name": "New Product",

    "category": [
        "inspection"
    ],

    "image": "new-product/hero.webp",

    "short_description": "Short product description.",

    "description": "Full product description.",

    "features": [
        "Feature one",
        "Feature two"
    ],

    "applications": [
        "Application one",
        "Application two"
    ],

    "media": {
        "gallery": [
            "new-product/gallery1.webp",
            "new-product/gallery2.webp",
            "new-product/gallery3.webp"
        ],

        "video": "new-product/intro.mp4"
    },

    "documents": {
        "brochure": "new-product-brochure.pdf",
        "datasheet": "new-product-datasheet.pdf",
        "manual": "new-product-manual.pdf"
    }
}
Product Categories

Available categories:

uav
robotics
inspection
mapping

A product can have multiple categories.

Example:

"category": [
    "uav",
    "inspection",
    "mapping"
]
Updating Existing Products

To update a product:

Open:
data/products.json
Find the product by:
id

Example:

"id": "dji"
Update:
Name
Description
Features
Images
Documents
Save changes.
Replacing Product Images

Replace files inside:

assets/images/products/product-name/

Keep the same filename.

Example:

Replace:

hero.webp

with a newer version.

No JSON update is required.

Removing A Product
Step 1

Remove product entry from:

data/products.json
Step 2

Remove unused files:

assets/images/products/product-name/

assets/videos/products/product-name/

assets/downloads/
Product Naming Rules

Use:

✅ lowercase

✅ hyphen separation

Examples:

share-uav
inspection-crawler
rov-system

Avoid:

New Product
Product_Final
TEST123
Product Description Guidelines
Short Description

Keep:

1 sentence.

Example:

Professional UAV platform for aerial inspection and mapping.
Full Description

Explain:

What the product does
Problems solved
Technology advantages
Typical applications
Features

Use short points:

Good:

- Remote operation
- High accuracy scanning
- Real-time monitoring

Avoid:

This product is extremely advanced and provides many benefits...
Product Update Checklist

Before publishing:

☐ Product folder created
☐ Images uploaded
☐ Video added
☐ Documents uploaded
☐ JSON updated
☐ Product page tested
☐ Mobile layout checked
☐ Downloads verified

Troubleshooting
Product Not Showing

Check:

JSON syntax
Missing comma
Incorrect product ID
File path errors
Images Not Loading

Verify:

Example:

JSON:

crawler/hero.webp

Folder:

assets/images/products/crawler/hero.webp

Both must match exactly.

Documents Not Downloading

Check:

File name
Folder location
Extension (.pdf)
Browser permissions
Recommended Update Workflow
New Product

↓

Prepare Images & Documents

↓

Update products.json

↓

Test Website

↓

Commit Changes

↓

Deploy
End of Guide
