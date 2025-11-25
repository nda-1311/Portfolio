# 🚀 Hướng Dẫn Deploy Portfolio lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. **Truy cập GitHub:**

   - Mở trình duyệt: https://github.com/new
   - Đăng nhập vào tài khoản GitHub của bạn

2. **Tạo Repository mới:**
   - Repository name: `portfolio` (hoặc tên bạn thích)
   - Description: "My Portfolio Website"
   - Chọn: **Public** (để có thể dùng GitHub Pages miễn phí)
   - ❌ KHÔNG check "Add a README file"
   - ❌ KHÔNG add .gitignore
   - ❌ KHÔNG add license
   - Nhấn: **Create repository**

---

## Bước 2: Khởi tạo Git và Push Code

Mở PowerShell tại folder `react-portfolio` và chạy các lệnh sau:

### 2.1. Khởi tạo Git

```bash
git init
```

### 2.2. Thêm tất cả files

```bash
git add .
```

### 2.3. Commit

```bash
git commit -m "Initial commit - Portfolio website"
```

### 2.4. Đổi branch sang main

```bash
git branch -M main
```

### 2.5. Kết nối với GitHub

**QUAN TRỌNG:** Thay `YOUR_USERNAME` và `YOUR_REPO_NAME` bằng thông tin của bạn!

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Ví dụ: Nếu username là `nda-1311` và repo là `portfolio`:

```bash
git remote add origin https://github.com/nda-1311/portfolio.git
```

### 2.6. Push code lên GitHub

```bash
git push -u origin main
```

---

## Bước 3: Cấu hình vite.config.js

Sau khi tạo repository, cập nhật file `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/YOUR_REPO_NAME/", // Thay YOUR_REPO_NAME bằng tên repo của bạn
  plugins: [react()],
});
```

Ví dụ: Nếu repo là `portfolio`:

```javascript
base: '/portfolio/',
```

**Lưu ý:** Nếu repository tên là `YOUR_USERNAME.github.io` thì để:

```javascript
base: '/',
```

---

## Bước 4: Deploy lên GitHub Pages

### 4.1. Commit thay đổi vite.config.js

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push
```

### 4.2. Deploy

```bash
npm run deploy
```

Lệnh này sẽ:

- Tự động build project (`npm run build`)
- Tạo branch `gh-pages`
- Push folder `dist` lên branch đó

---

## Bước 5: Kích hoạt GitHub Pages

1. Truy cập repository trên GitHub
2. Click **Settings** (góc trên bên phải)
3. Chọn **Pages** (menu bên trái)
4. Tại **Source**:
   - Branch: chọn `gh-pages`
   - Folder: chọn `/ (root)`
5. Click **Save**

**Đợi 1-2 phút**, GitHub sẽ deploy website!

---

## Bước 6: Truy cập Website

Link của bạn sẽ là:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Ví dụ:

```
https://nda-1311.github.io/portfolio/
```

---

## 🎯 TÓM TẮT CÁC LỆNH CẦN CHẠY

```bash
# 1. Khởi tạo Git
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main

# 2. Kết nối GitHub (Thay YOUR_USERNAME và YOUR_REPO_NAME!)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main

# 3. Sau khi cập nhật vite.config.js
git add .
git commit -m "Configure for GitHub Pages"
git push

# 4. Deploy
npm run deploy
```

---

## ⚙️ ĐÃ CÀI ĐẶT SẴN

✅ `gh-pages` package đã được cài đặt
✅ Script `deploy` đã được thêm vào package.json:

- `predeploy`: Tự động build trước khi deploy
- `deploy`: Deploy folder dist lên GitHub Pages

---

## 🔄 CẬP NHẬT SAU NÀY

Mỗi khi bạn thay đổi code:

```bash
# 1. Commit thay đổi
git add .
git commit -m "Update portfolio"
git push

# 2. Deploy lại
npm run deploy
```

---

## ❗ LƯU Ý QUAN TRỌNG

1. **Repository phải là Public** để dùng GitHub Pages miễn phí
2. **Đợi 1-2 phút** sau khi deploy để website cập nhật
3. **Base URL** trong vite.config.js phải khớp với tên repository
4. **EmailJS** sẽ hoạt động bình thường trên GitHub Pages

---

## 🆘 TROUBLESHOOTING

### Lỗi: "Permission denied"

```bash
# Tạo Personal Access Token trên GitHub và dùng thay password
# Settings → Developer settings → Personal access tokens → Generate new token
```

### Lỗi: "CSS/JS không load"

- Kiểm tra `base` trong vite.config.js phải đúng với tên repo
- Ví dụ: Repo tên `portfolio` → `base: '/portfolio/'`

### Trang 404

- Kiểm tra Settings → Pages đã chọn đúng branch `gh-pages`
- Đợi 1-2 phút để GitHub xử lý

---

## 🎉 CHÚC MỪNG!

Sau khi hoàn thành, portfolio của bạn sẽ online và có thể share link cho bất kỳ ai!

Link của bạn: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
