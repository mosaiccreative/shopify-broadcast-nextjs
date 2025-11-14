# Broadcast UX Sections Guide

This guide explains how to use the 5 premium Broadcast sections to create an editorial, magazine-style store that matches the aesthetic of high-end Broadcast theme sites like Holuna Studio and Erewhon.

## Installation Complete Checklist

Upload these 5 section files to Shopify (Themes → broadcast-theme → Edit Code → Sections):

- [ ] `broadcast-hero-banner.liquid`
- [ ] `broadcast-split-content.liquid`
- [ ] `broadcast-feature-grid.liquid`
- [ ] `broadcast-carousel.liquid`
- [ ] `broadcast-rich-text.liquid`

---

## How to Add Sections to Your Homepage

1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** on broadcast-theme
3. In the left sidebar, click **Add section**
4. Find your new Broadcast sections in the list
5. Customize settings and add your content

---

## Section 1: Hero Banner

**File:** `sections/broadcast-hero-banner.liquid`

**Purpose:** Large, impactful hero section with full-width image and centered text overlay

**Best For:**
- Homepage hero
- Collection landing pages
- Campaign launches
- Seasonal promotions

**Settings:**
- **Heading:** Main headline (large Playfair Display font)
- **Subheading:** Supporting text below heading
- **Button Label & Link:** Call-to-action button
- **Desktop Image:** 1600x900px recommended
- **Mobile Image:** 800x1000px recommended
- **Text Color:** Choose contrast color for readability
- **Overlay Opacity:** Dark overlay to improve text readability (0-80%)

**Example Content:**
\`\`\`
Heading: "Handcrafted Indian Spice Hot Sauces"
Subheading: "Small-batch artisanal sauces made with premium ingredients"
Button: "Shop Collection" → /collections/hot-sauces
\`\`\`

---

## Section 2: Split Content

**File:** `sections/broadcast-split-content.liquid`

**Purpose:** 50/50 image and text layout for storytelling and product features

**Best For:**
- Brand story
- Product highlights
- Process explanations
- Founder story

**Settings:**
- **Heading:** Section title
- **Content:** Rich text area for paragraphs
- **Button Label & Link:** Optional CTA
- **Image:** 800x800px recommended (square)
- **Layout:** Image Left or Image Right
- **Background Color:** Section background

**Example Content:**
\`\`\`
Heading: "Crafted with Care"
Content: "Each bottle is handcrafted in small batches using traditional Indian spices sourced directly from family farms. We blend ancient recipes with modern flavors to create something truly unique."
Button: "Our Story" → /pages/about
Image: Photo of sauce-making process or ingredients
\`\`\`

**Pro Tip:** Alternate layout (left/right) between multiple split sections for visual rhythm.

---

## Section 3: Feature Grid

**File:** `sections/broadcast-feature-grid.liquid`

**Purpose:** Highlight 2-3 key features or values in a clean grid layout

**Best For:**
- USPs (Unique Selling Points)
- Benefits
- Values
- Process steps
- Certifications

**Settings:**
- **Heading:** Optional section title
- **Blocks:** Add up to 3 feature blocks
  - Each block has: Icon emoji, title, description
- **Column Count:** 2 or 3 columns
- **Background Color:** Section background

**Example Content:**
\`\`\`
Block 1:
  Icon: 🌶️
  Heading: "Authentic Flavors"
  Description: "Traditional Indian spice blends passed down through generations"

Block 2:
  Icon: 🌱
  Heading: "Natural Ingredients"
  Description: "No preservatives, no artificial colors, just pure spice and flavor"

Block 3:
  Icon: 🔥
  Heading: "Heat Levels for All"
  Description: "From mild golden turmeric to fiery chili blends"
\`\`\`

---

## Section 4: Product Carousel

**File:** `sections/broadcast-carousel.liquid`

**Purpose:** Horizontal scrolling showcase of products from a collection

**Best For:**
- Featured products
- New arrivals
- Best sellers
- Related products

**Settings:**
- **Heading:** Section title
- **Collection:** Choose which collection to display
- **View All Link:** Link to full collection page
- **Background Color:** Section background

**Usage:**
- Automatically displays up to 8 products from selected collection
- Uses your `product-card-broadcast` snippet for consistent styling
- Mobile-friendly horizontal scroll
- Shows product images, titles, prices, sale badges

**Example Content:**
\`\`\`
Heading: "Our Signature Sauces"
Collection: Hot Sauces
View All Link: /collections/hot-sauces
\`\`\`

---

## Section 5: Rich Text

**File:** `sections/broadcast-rich-text.liquid`

**Purpose:** Typography-focused content section for editorial copy

**Best For:**
- Mission statements
- Detailed product descriptions
- Press mentions
- Quotes and testimonials
- Editorial content

**Settings:**
- **Heading:** Optional section title
- **Content:** Full rich text editor
- **Text Alignment:** Left, Center, or Right
- **Max Width:** Narrow (600px), Medium (800px), or Wide (1000px)
- **Background Color:** Section background

**Example Content:**
\`\`\`
Heading: "Our Philosophy"
Content: "We believe great hot sauce starts with great ingredients. That's why we source our spices directly from small farms in India, ensuring quality and supporting local communities. Each batch is carefully crafted to balance heat, flavor, and tradition."
Alignment: Center
Max Width: Medium
\`\`\`

---

## Recommended Homepage Structure

To match the Broadcast editorial aesthetic (like Holuna Studio and Erewhon):

1. **Hero Banner** - Large visual impact with your main message
2. **Split Content** - Tell your brand story with imagery
3. **Product Carousel** - Showcase featured products
4. **Feature Grid** - Highlight your unique qualities
5. **Split Content** (alternate layout) - Deeper product/process story
6. **Rich Text** - Editorial content or mission statement
7. **Product Carousel** - Show another collection

---

## Design Tips for Broadcast Aesthetic

**Photography:**
- Use high-quality, editorial-style product photography
- Natural lighting and simple backgrounds
- Lifestyle shots showing products in use
- Consistent color grading across all images

**Typography:**
- Keep headlines short and impactful
- Use generous line spacing for readability
- Let white space breathe around text
- Use Playfair Display for headlines, Inter for body

**Layout:**
- Generous padding (5rem+) between sections
- Don't overcrowd - less is more
- Balance image-heavy and text-heavy sections
- Create visual rhythm with alternating layouts

**Color:**
- Stick to your brand palette (turmeric, saffron, warm neutrals)
- Use neutral backgrounds for most sections
- Let product colors be the accent
- Ensure high contrast for accessibility

---

## Customization

All sections use CSS variables from `broadcast-foundation.css`:

\`\`\`css
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
--color-turmeric: #E07B39;
--color-saffron: #F59E0B;
--color-background: #FFFBF5;
\`\`\`

To change the global aesthetic, update these variables in your CSS file.

---

## Next Steps

1. Upload all 5 section files to Shopify
2. Go to Theme Customizer
3. Add sections to your homepage
4. Upload high-quality images (use placeholder images initially if needed)
5. Write compelling copy for each section
6. Preview and adjust spacing/colors
7. Test on mobile devices
8. Publish your Broadcast-style store

Your store will now match the premium editorial aesthetic of top Broadcast theme implementations.
