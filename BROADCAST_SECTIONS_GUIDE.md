# Broadcast UX Sections Implementation Guide

## New Sections Created

You now have 5 premium Broadcast-style sections that match the aesthetic of high-end Shopify stores like Holuna Studio and Erewhon.

### 1. Broadcast Hero Banner
**File:** `sections/broadcast-hero-banner.liquid`

**Features:**
- Full-screen hero with background image
- Customizable overlay opacity
- Large display typography
- Eyebrow text (small caps)
- Dual CTA buttons
- Flexible alignment options
- Responsive height control

**Use Cases:**
- Homepage hero
- Campaign landing pages
- Product launch announcements
- Seasonal promotions

### 2. Broadcast Split Content
**File:** `sections/broadcast-split-content.liquid`

**Features:**
- 50/50 split layout (image + text)
- Reversible layout (image left or right)
- Editorial typography
- Background color customization
- Magazine-style aesthetic

**Use Cases:**
- About page content
- Brand story sections
- Product feature highlights
- Founder stories

### 3. Broadcast Feature Grid
**File:** `sections/broadcast-feature-grid.liquid`

**Features:**
- Flexible grid layout (auto-fits columns)
- Icon support (emojis or symbols)
- Centered content blocks
- Unlimited feature blocks
- Responsive grid

**Use Cases:**
- Product benefits
- Brand values
- Service highlights
- Quality promises

### 4. Broadcast Product Carousel
**File:** `sections/broadcast-product-carousel.liquid`

**Features:**
- Horizontal scrolling product display
- Uses enhanced product cards with hover effects
- Collection-based (automatically pulls products)
- "View All" button
- Smooth scroll behavior
- Custom background colors

**Use Cases:**
- Featured products
- New arrivals
- Best sellers
- Curated collections

### 5. Broadcast Rich Text
**File:** `sections/broadcast-rich-text.liquid`

**Features:**
- Large editorial typography
- Centered or aligned content
- Eyebrow text support
- Customizable width
- Rich text formatting
- Background color options

**Use Cases:**
- Mission statements
- Brand philosophy
- Editorial content
- Testimonials

---

## How to Add Sections to Your Store

### Option 1: Theme Customizer (Visual Editor)

1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** on your broadcast-theme
3. Click **Add section** button
4. Find your new sections:
   - Broadcast Hero Banner
   - Broadcast Split Content
   - Broadcast Feature Grid
   - Broadcast Product Carousel
   - Broadcast Rich Text
5. Click to add, then customize settings in left sidebar
6. **Save**

### Option 2: Template JSON Files (Code)

Update your `templates/index.json` file to include these sections:

\`\`\`json
{
  "sections": {
    "broadcast_hero": {
      "type": "broadcast-hero-banner",
      "settings": {
        "eyebrow": "New Collection",
        "heading": "Artisanal Hot Sauces",
        "text": "Small-batch crafted with premium ingredients",
        "button_label_1": "Shop Now",
        "button_link_1": "/collections/hot-sauces"
      }
    },
    "broadcast_split": {
      "type": "broadcast-split-content",
      "settings": {
        "layout": "image-left",
        "eyebrow": "Our Story",
        "heading": "Crafted with Care",
        "text": "Every bottle tells a story...",
        "button_label": "Learn More"
      }
    },
    "broadcast_carousel": {
      "type": "broadcast-product-carousel",
      "settings": {
        "heading": "Featured Products",
        "collection": "hot-sauces",
        "view_all_link": "/collections/hot-sauces"
      }
    }
  },
  "order": ["broadcast_hero", "broadcast_split", "broadcast_carousel"]
}
\`\`\`

---

## Recommended Homepage Layout

For a premium Broadcast aesthetic similar to Holuna and Erewhon:

1. **Broadcast Hero Banner** - Full-screen with product photography
2. **Broadcast Feature Grid** - 3 key brand values/benefits
3. **Broadcast Product Carousel** - Featured collection
4. **Broadcast Split Content** - Brand story with founder photo
5. **Broadcast Rich Text** - Mission statement or testimonial
6. **Broadcast Product Carousel** - Best sellers
7. **Broadcast Split Content** - Instagram feed or community

---

## Customization Tips

### Colors
All sections inherit from your CSS variables:
- `--color-turmeric` (primary brand color)
- `--color-background` (main background)
- `--font-display` (Playfair Display for headings)
- `--font-body` (Inter for body text)

### Images
- Hero images: 2000px wide minimum
- Split content images: 1200px wide
- Use high-quality photography
- Maintain consistent editing style

### Typography
- Headlines: Keep concise (3-6 words)
- Body copy: 1-2 sentences per paragraph
- Eyebrow text: Single word or short phrase

### Spacing
- Sections have built-in padding (5rem desktop, 3rem mobile)
- Use white space generously
- Don't stack too many sections (aim for 5-7 per page)

---

## Next Steps

1. **Upload the section files** to your Shopify theme
2. **Add placeholder images** that match your brand aesthetic
3. **Customize content** in Theme Customizer
4. **Test on mobile** to ensure responsive behavior
5. **Remove "Broadcast Styling Active" indicator** if desired
6. **Hide announcement bar** for cleaner header

Your store will now have the premium, editorial magazine aesthetic of the Broadcast theme!
