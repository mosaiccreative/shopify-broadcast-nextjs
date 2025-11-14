# Deploying Remaining Shopify Files

The complete Broadcast UX theme files are now in your GitHub repository. However, **GitHub does not automatically sync to Shopify**. You need to manually copy the files from GitHub to Shopify Admin.

## Quick Deployment Steps

### Phase 3: Update Header

1. Open this file on GitHub: `shopify-liquid-theme/sections/header.liquid`
2. Copy the entire file content
3. Go to **Shopify Admin** → **Themes** → **broadcast-theme** → **Edit Code**
4. Navigate to **Sections** → **header.liquid**
5. **Replace entire content** with copied code
6. Click **Save**

### Phase 4: Add Snippets

For each snippet below:
1. Open the file on GitHub
2. Copy entire content
3. Go to **Shopify Admin** → **Themes** → **broadcast-theme** → **Edit Code** → **Snippets**
4. Click **Add a new snippet**
5. Name it exactly as shown
6. Paste content and **Save**

**Snippets to add:**
- `shopify-liquid-theme/snippets/cart-drawer.liquid` → Create snippet named `cart-drawer`
- `shopify-liquid-theme/snippets/search-overlay.liquid` → Create snippet named `search-overlay`
- `shopify-liquid-theme/snippets/quick-shop-modal.liquid` → Create snippet named `quick-shop-modal`
- `shopify-liquid-theme/snippets/product-card-broadcast.liquid` → Create snippet named `product-card-broadcast`

## Alternative: Use Shopify CLI (Automated)

If you have Shopify CLI installed:

\`\`\`bash
cd /path/to/your/repo
shopify theme push --store 7vk9dd-cv.myshopify.com --path shopify-liquid-theme
\`\`\`

This will automatically sync all files from GitHub to Shopify.

## Verification

After deployment, test:
- Click cart icon → drawer should slide in from right
- Click search icon → full-screen search should appear
- Hover product cards → second image should appear
- Header should stick when scrolling

All interactive features should now work!
