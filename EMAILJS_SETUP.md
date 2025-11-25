# 📧 Hướng Dẫn Cấu Hình EmailJS

## Bước 1: Đăng Ký EmailJS

1. Truy cập: https://www.emailjs.com/
2. Click **Sign Up** và đăng ký tài khoản miễn phí
3. Xác nhận email

## Bước 2: Tạo Email Service

1. Sau khi đăng nhập, vào **Email Services**
2. Click **Add New Service**
3. Chọn **Gmail** (hoặc email provider của bạn)
4. Nhập email `1dap2xoe@gmail.com`
5. Click **Connect Account** và làm theo hướng dẫn
6. **Lưu lại SERVICE_ID** (VD: `service_abc1234`)

## Bước 3: Tạo Email Template

1. Vào **Email Templates**
2. Click **Create New Template**
3. Điền nội dung template:

```
Subject: Tin nhắn mới từ Portfolio - {{name}}

Body:
Bạn có tin nhắn mới từ portfolio:

Từ: {{name}}
Email: {{email}}

Nội dung:
{{message}}

---
Gửi từ Portfolio Website
```

4. Đặt tên template: `portfolio_contact`
5. Click **Save**
6. **Lưu lại TEMPLATE_ID** (VD: `template_xyz7890`)

## Bước 4: Lấy Public Key

1. Vào **Account** > **General**
2. Tìm **Public Key**
3. **Lưu lại PUBLIC_KEY** (VD: `Ab12CdEfGhIjKlMnO`)

## Bước 5: Cập Nhật Code

Mở file `src/components/Contact.jsx` và thay đổi:

```javascript
const result = await emailjs.sendForm(
  "YOUR_SERVICE_ID", // Thay = service_abc1234
  "YOUR_TEMPLATE_ID", // Thay = template_xyz7890
  formRef.current,
  "YOUR_PUBLIC_KEY" // Thay = Ab12CdEfGhIjKlMnO
);
```

Thành:

```javascript
const result = await emailjs.sendForm(
  "service_abc1234", // SERVICE_ID của bạn
  "template_xyz7890", // TEMPLATE_ID của bạn
  formRef.current,
  "Ab12CdEfGhIjKlMnO" // PUBLIC_KEY của bạn
);
```

## ✅ Kiểm Tra

1. Chạy website: `npm run dev`
2. Vào phần **Liên Hệ**
3. Điền form và click **Gửi Tin Nhắn**
4. Kiểm tra email `1dap2xoe@gmail.com`

## 📝 Lưu Ý

- **Free plan**: 200 email/tháng
- Email sẽ đến trong vài giây
- Kiểm tra cả **Spam folder** nếu không thấy
- Nếu lỗi, check Console (F12) để xem chi tiết

## 🔥 Template Variables

Trong EmailJS template, bạn có thể dùng:

- `{{name}}` - Tên người gửi
- `{{email}}` - Email người gửi
- `{{message}}` - Nội dung tin nhắn

## 🎯 Mẫu Email Nhận Được

```
Subject: Tin nhắn mới từ Portfolio - Nguyễn Văn A

Bạn có tin nhắn mới từ portfolio:

Từ: Nguyễn Văn A
Email: example@gmail.com

Nội dung:
Chào bạn, tôi quan tâm đến dự án Food Delivery App của bạn...

---
Gửi từ Portfolio Website
```

## 🚀 Hoàn Tất!

Giờ portfolio của bạn đã có chức năng liên hệ thực sự. Mọi tin nhắn sẽ được gửi trực tiếp đến email của bạn!
