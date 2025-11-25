# 🚀 Hướng Dẫn Deploy Portfolio

## Lựa Chọn 1: Vercel (Khuyến Nghị ⭐)

### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Login vào Vercel

```bash
vercel login
```

- Chọn phương thức đăng nhập (GitHub, GitLab, hoặc Email)

### Bước 3: Deploy

```bash
cd react-portfolio
vercel
```

- Nhấn Enter để xác nhận các câu hỏi
- Vercel sẽ tự động build và deploy
- Bạn sẽ nhận được link ngay lập tức!

### Bước 4: Deploy Production (Link chính thức)

```bash
vercel --prod
```

---

## Lựa Chọn 2: Netlify

### Cách 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### Cách 2: Netlify Web (Đơn giản hơn)

1. Truy cập: https://app.netlify.com/drop
2. Kéo thả folder `dist` vào trang web
3. Nhận link ngay lập tức!

---

## Lựa Chọn 3: GitHub Pages

### Bước 1: Cài đặt gh-pages

```bash
npm install --save-dev gh-pages
```

### Bước 2: Thêm vào package.json

Thêm dòng này vào `scripts`:

```json
"deploy": "npm run build && gh-pages -d dist"
```

### Bước 3: Cấu hình vite.config.js

Thêm base URL (thay YOUR_REPO_NAME):

```js
export default defineConfig({
  base: "/YOUR_REPO_NAME/",
  // ... rest of config
});
```

### Bước 4: Deploy

```bash
npm run deploy
```

Link sẽ là: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## ⚡ Quick Start - Vercel (Nhanh Nhất)

```bash
# Cài Vercel
npm install -g vercel

# Deploy
cd react-portfolio
vercel --prod
```

Chỉ mất **1-2 phút** là có link!

---

## 📝 Lưu Ý Quan Trọng

### EmailJS Configuration

Đảm bảo EmailJS đã được cấu hình đúng trong code:

- ✅ Service ID: `service_aiahg2e`
- ✅ Template ID: `template_u82pwc9`
- ✅ Public Key: `m8NryUWomPLvi53yC`

### Domain Settings

Sau khi deploy, bạn có thể:

- Dùng domain miễn phí của Vercel/Netlify
- Hoặc kết nối custom domain của riêng bạn

---

## 🎯 Khuyến Nghị

**Vercel** là lựa chọn tốt nhất vì:

- ⚡ Deploy nhanh (< 2 phút)
- 🔄 Auto-deploy khi update code
- 🌐 Global CDN
- 🆓 Hoàn toàn miễn phí
- 📊 Analytics built-in

Bạn muốn deploy bằng cách nào?
