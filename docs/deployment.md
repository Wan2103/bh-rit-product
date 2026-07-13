# Deployment Guide

## Overview

This document explains the deployment process for the Beyond Horizon Technologies website.

The website is a static web application built using:

- HTML
- CSS
- JavaScript
- JSON data files
- Static assets

No backend server is required for the standard deployment.

---

# Project Requirements

Before deployment, ensure you have:

- Git installed
- GitHub account
- Hosting platform account
- Updated website files

Recommended tools:

- Visual Studio Code
- GitHub Desktop or Git CLI
- Browser developer tools

---

# Local Testing

## Open Project

Open the project folder:


bh-rit-product


in Visual Studio Code.

---

## Run Local Server

Recommended options:

### VS Code Live Server

Install:


Live Server Extension


Then:

1. Right click `index.html`
2. Select:


Open with Live Server


---

### Local HTTP Server

Using Python:

```bash
python -m http.server 8080

Open:

http://localhost:8080
Before Deployment Checklist
HTML

Check:

☐ All pages load correctly
☐ No missing links
☐ Navigation works
☐ Components load correctly

CSS

Check:

☐ Styles load correctly
☐ Mobile layout works
☐ No broken imports
☐ Animations work properly

JavaScript

Check:

☐ No console errors
☐ Dynamic content loads
☐ Search works
☐ Product builder works
☐ Gallery works

Assets

Check:

☐ Images display correctly
☐ PDFs open correctly
☐ Videos load correctly
☐ File paths are correct

GitHub Deployment
Step 1: Initialise Repository

Open terminal:

git init
Step 2: Add Files
git add .
Step 3: Commit Changes
git commit -m "Initial website deployment"
Step 4: Connect Remote Repository

Example:

git remote add origin https://github.com/username/repository.git
Step 5: Push Code
git branch -M main

git push -u origin main
GitHub Pages Deployment
Enable GitHub Pages
Open repository settings
Select:
Pages
Choose:
Deploy from branch
Select:
main
/
root
Save

The website will be available at:

https://username.github.io/repository-name/
Automated Deployment

The project includes:

.github/workflows/deploy.yml

This enables automatic deployment when changes are pushed.

Workflow:

Code Update

↓

Git Push

↓

GitHub Actions

↓

Build Process

↓

Website Deployment
Production Hosting

The website can also be deployed using:

GitHub Pages
Netlify
Vercel
Cloudflare Pages
Traditional web hosting
Domain Setup

For custom domain:

Example:

www.beyondhorizon.com.my

Configure:

Domain DNS settings
Hosting provider domain settings
SSL certificate
Performance Optimisation

Before production:

Images
Convert images to WebP
Compress large files
Enable lazy loading
CSS
Remove unused styles
Minify files
Combine production files if required
JavaScript
Remove unused scripts
Minify production scripts
Check browser compatibility
Updating Website

When making changes:

Modify files
Test locally
Commit changes

Example:

git add .

git commit -m "Update product information"

git push

Deployment will update automatically.

Rollback Changes

If deployment causes issues:

View previous commits:

git log

Restore previous version:

git checkout commit-id
Troubleshooting
Page Not Found

Check:

File names
Capital letters
Folder paths

Example:

Wrong:

Products.html

Correct:

products.html
Images Not Loading

Check:

Relative paths
File extension
Folder location

Example:

Correct:

<img src="assets/images/logo.webp">
JavaScript Not Working

Check:

Browser console
Script loading order
Missing files
Final Deployment Checklist

☐ Website tested locally
☐ All pages accessible
☐ Assets loading correctly
☐ Mobile responsive
☐ SEO files updated
☐ Sitemap available
☐ Robots.txt configured
☐ Deployment successful

End of Guide
