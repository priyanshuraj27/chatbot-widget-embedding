# 📌 Support Widget - Quick Integration Guide

> **After Vercel Deployment**: Replace `YOUR-APP.vercel.app` with your actual Vercel URL

## 🎯 3 Ways to Embed

### 1️⃣ Simple Iframe (Easiest)

```html
<iframe 
  src="https://YOUR-APP.vercel.app/support-widget.html"
  width="400"
  height="600"
  frameborder="0"
  style="border: none; border-radius: 16px;"
></iframe>
```

**With URL Parameters:**
```html
<iframe 
  src="https://YOUR-APP.vercel.app/support-widget.html?width=400px&height=600px"
  width="400"
  height="600"
  frameborder="0"
></iframe>
```

---

### 2️⃣ Embed Script (Recommended)

```html
<!-- Step 1: Add container -->
<div id="support-widget-container"></div>

<!-- Step 2: Include script -->
<script src="https://YOUR-APP.vercel.app/support-widget-embed.js"></script>

<!-- Step 3: Initialize -->
<script>
  SupportWidget.init({
    containerId: 'support-widget-container',
    width: '400px',
    height: '600px',
    widgetUrl: 'https://YOUR-APP.vercel.app/support-widget.html'
  });
</script>
```

**With Floating Button:**
```html
<div id="support-widget"></div>
<script src="https://YOUR-APP.vercel.app/support-widget-embed.js"></script>
<script>
  SupportWidget.init({
    containerId: 'support-widget',
    width: '400px',
    height: '600px',
    widgetUrl: 'https://YOUR-APP.vercel.app/support-widget.html',
    showButton: true,
    buttonText: '💬 Need Help?'
  });
</script>
```

---

### 3️⃣ Dynamic Control (Advanced)

```html
<div id="widget"></div>
<script src="https://YOUR-APP.vercel.app/support-widget-embed.js"></script>
<script>
  // Initialize
  SupportWidget.init({
    containerId: 'widget',
    width: '400px',
    height: '600px',
    widgetUrl: 'https://YOUR-APP.vercel.app/support-widget.html'
  });

  // Resize dynamically
  function resizeWidget() {
    SupportWidget.resize('500px', '700px');
  }

  // Destroy widget
  function closeWidget() {
    SupportWidget.destroy();
  }
</script>
```

---

## 📐 Recommended Dimensions

| Use Case | Width | Height |
|----------|-------|--------|
| Desktop Sidebar | 400px | 600px |
| Mobile Full | 100% | 700px |
| Compact | 350px | 500px |
| Large | 450px | 750px |

**Minimum:** 320px × 400px

---

## ⚙️ Configuration Options

```javascript
SupportWidget.init({
  containerId: 'support-widget-container',  // Required
  width: '400px',                           // Default: '400px'
  height: '600px',                          // Default: '600px'
  widgetUrl: 'https://...',                 // Required
  responsive: false,                        // Default: false
  position: 'inline',                       // 'inline', 'fixed-bottom-right', 'fixed-bottom-left'
  showButton: false,                        // Default: false
  buttonText: '💬 Support'                  // Default: '💬 Support'
});
```

---

## 🌐 Cross-Domain Embedding

The widget works on **any domain**. Just copy the embed code and paste it on your website!

**Example domains where it works:**
- ✅ `example.com`
- ✅ `subdomain.example.com`
- ✅ `different-domain.com`
- ✅ `localhost` (for testing)

---

## 🧪 Test Your Integration

After deployment, test at:
- **Live Examples**: `https://YOUR-APP.vercel.app/embedding-examples.html`
- **Interactive Demos**: `https://YOUR-APP.vercel.app/embed-script-examples.html`

---

## 📱 Responsive Example

```html
<div style="max-width: 600px; margin: 0 auto;">
  <div id="responsive-widget"></div>
</div>

<script src="https://YOUR-APP.vercel.app/support-widget-embed.js"></script>
<script>
  SupportWidget.init({
    containerId: 'responsive-widget',
    height: '700px',
    widgetUrl: 'https://YOUR-APP.vercel.app/support-widget.html',
    responsive: true  // Takes 100% width of container
  });
</script>
```

---

## 🎨 Styling Tips

```html
<style>
  /* Custom container styling */
  #support-widget-container {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    overflow: hidden;
  }
</style>
```

---

## 🔗 Share These URLs

After deployment, share with your team:

1. **Widget URL**: `https://YOUR-APP.vercel.app/support-widget.html`
2. **Embed Script**: `https://YOUR-APP.vercel.app/support-widget-embed.js`
3. **Examples Page**: `https://YOUR-APP.vercel.app/embedding-examples.html`
4. **This Guide**: Link to your repository's README

---

## 💡 Quick Tips

- ✅ Test locally before sharing
- ✅ Use HTTPS for production
- ✅ Check browser console for errors
- ✅ Verify CORS headers are working
- ✅ Test on mobile devices

---

**Need help?** Check the full documentation in `SUPPORT_WIDGET_README.md`
