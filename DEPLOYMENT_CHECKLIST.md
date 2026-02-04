# ✅ Pre-Deployment Checklist

Use this checklist before pushing to GitHub and deploying to Vercel.

## 📋 Code & Files

- [x] `vercel.json` created with CORS headers
- [x] `public/support-widget.html` - Standalone widget
- [x] `public/support-widget-embed.js` - Embed script
- [x] `public/embedding-examples.html` - Examples page
- [x] `public/embed-script-examples.html` - Interactive demos
- [x] `src/components/SupportScreenIframe.jsx` - React component
- [x] `.gitignore` includes `.vercel`
- [x] Documentation files created

## 🔧 Configuration

- [x] `package.json` has correct build script
- [x] `vercel.json` configured for Vite
- [x] CORS headers set for iframe embedding
- [x] X-Frame-Options set to ALLOWALL
- [x] Static file rewrites configured

## 🧪 Local Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and test locally
- [ ] Run `npm run build` successfully
- [ ] Check `dist` folder is created
- [ ] Test `support-widget.html` locally
- [ ] Test embedding examples locally

## 📝 Git & GitHub

- [ ] Git initialized (`git init`)
- [ ] All files staged (`git add .`)
- [ ] Changes committed (`git commit -m "message"`)
- [ ] GitHub repository created
- [ ] Remote added (`git remote add origin ...`)
- [ ] Pushed to GitHub (`git push -u origin main`)

## 🚀 Vercel Deployment

- [ ] Signed in to Vercel with GitHub
- [ ] Imported project from GitHub
- [ ] Verified build settings:
  - Framework: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Clicked "Deploy"
- [ ] Deployment successful

## 🌐 Post-Deployment

- [ ] Got Vercel URL (e.g., `your-app.vercel.app`)
- [ ] Tested main app: `https://your-app.vercel.app`
- [ ] Tested widget: `https://your-app.vercel.app/support-widget.html`
- [ ] Tested examples: `https://your-app.vercel.app/embedding-examples.html`
- [ ] Verified iframe embedding works
- [ ] Tested on different browsers
- [ ] Tested responsive behavior

## 📤 Sharing

- [ ] Updated documentation with actual Vercel URL
- [ ] Shared widget URL with team
- [ ] Shared embed script URL
- [ ] Shared integration examples
- [ ] Created integration guide for other websites

## 🔍 Verification

- [ ] Widget loads in iframe
- [ ] No CORS errors in console
- [ ] Widget is responsive
- [ ] All views work (Home, Messages, Chat)
- [ ] Bottom navigation works
- [ ] PostMessage API works
- [ ] URL parameters work

## 📊 Optional

- [ ] Set up custom domain on Vercel
- [ ] Configure environment variables (if needed)
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring/alerts
- [ ] Add to documentation site

## 🎯 Quick Commands

```bash
# Test build locally
npm run build

# Check build output
ls dist

# Test dev server
npm run dev

# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

## 📞 Troubleshooting

If deployment fails:

1. **Check Vercel logs** in the Deployments tab
2. **Test build locally**: `npm run build`
3. **Verify files exist** in `public/` folder
4. **Check `vercel.json`** syntax
5. **Review error messages** in Vercel dashboard

## ✨ Success Criteria

Your deployment is successful when:

✅ Main app loads at `https://your-app.vercel.app`  
✅ Widget loads at `https://your-app.vercel.app/support-widget.html`  
✅ Widget can be embedded in an iframe on another domain  
✅ No console errors  
✅ All features work as expected  

---

**Ready?** Start with local testing, then push to GitHub and deploy! 🚀
