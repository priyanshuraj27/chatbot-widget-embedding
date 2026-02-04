# Support Widget - Embeddable Iframe Solution

A beautiful, embeddable support widget that can be integrated into any website via iframe or JavaScript.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## 📦 What's Included

### Main Application
- React + Vite setup
- Tailwind CSS styling
- Support screen component

### Embeddable Widget
- **Standalone HTML**: `public/support-widget.html`
- **Embed Script**: `public/support-widget-embed.js`
- **Examples**: `public/embedding-examples.html`
- **Interactive Demos**: `public/embed-script-examples.html`

## 🌐 Deployment

### Deploy to Vercel from GitHub

1. **Push to GitHub**:
```bash
git add .
git commit -m "Add support widget"
git push origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Get Your URLs**:
   - Widget: `https://your-app.vercel.app/support-widget.html`
   - Embed Script: `https://your-app.vercel.app/support-widget-embed.js`

📖 **Full deployment guide**: See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

## 💡 Usage

### Simple Iframe
```html
<iframe 
  src="https://your-app.vercel.app/support-widget.html"
  width="400"
  height="600"
  frameborder="0"
></iframe>
```

### Embed Script
```html
<div id="support-widget-container"></div>
<script src="https://your-app.vercel.app/support-widget-embed.js"></script>
<script>
  SupportWidget.init({
    containerId: 'support-widget-container',
    width: '400px',
    height: '600px',
    widgetUrl: 'https://your-app.vercel.app/support-widget.html'
  });
</script>
```

📖 **Full integration guide**: See [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)

## 📚 Documentation

- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Complete deployment guide
- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** - Quick integration reference
- **[SUPPORT_WIDGET_README.md](./SUPPORT_WIDGET_README.md)** - Detailed widget documentation

## 🎯 Features

✅ **Iframe-embeddable** - Works on any website  
✅ **Dynamic dimensions** - Accepts width/height via URL params or postMessage  
✅ **Cross-domain compatible** - CORS enabled  
✅ **Responsive** - Adapts to container size  
✅ **Easy integration** - Multiple embedding methods  
✅ **Standalone** - No external dependencies needed  

## 📐 Recommended Dimensions

- **Desktop**: 400px × 600px
- **Mobile**: 100% × 700px
- **Minimum**: 320px × 400px

## 🔧 Tech Stack

- **Frontend**: React 19, Vite 6
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Widget**: Standalone HTML with CDN dependencies

## 📁 Project Structure

```
├── public/
│   ├── support-widget.html          # Standalone embeddable widget
│   ├── support-widget-embed.js      # Easy embed script
│   ├── embedding-examples.html      # Integration examples
│   └── embed-script-examples.html   # Interactive demos
├── src/
│   ├── components/
│   │   ├── SupportScreen.jsx        # Original modal version
│   │   └── SupportScreenIframe.jsx  # Iframe-compatible version
│   └── App.jsx
├── vercel.json                      # Vercel configuration
└── README.md
```

## 🧪 Testing

After deployment, visit:
- `https://your-app.vercel.app/embedding-examples.html`
- `https://your-app.vercel.app/embed-script-examples.html`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to deploy?** Follow the [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
