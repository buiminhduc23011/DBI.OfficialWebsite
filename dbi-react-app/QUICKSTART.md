# 🚀 Quick Start - DBI Official Website

## Bắt đầu nhanh chóng trong 5 phút!

### 1️⃣ Cài đặt dependencies

```bash
npm install
```

### 2️⃣ Cấu hình Firebase (CỰC KỲ QUAN TRỌNG!)

**Bước a:** Tạo Firebase Project tại https://console.firebase.google.com

**Bước b:** Kích hoạt **Firebase Hosting** và **Storage**

**Bước c:** Lấy Firebase Config và cập nhật vào `src/firebase.js`:

```javascript
// src/firebase.js - THAY ĐỔI ĐOẠN NÀY!
const firebaseConfig = {
  apiKey: "AIzaSy...",           // ← Thay bằng của bạn
  authDomain: "your-project...", // ← Thay bằng của bạn
  projectId: "your-project-id",  // ← Thay bằng của bạn
  storageBucket: "your-project...", // ← Thay bằng của bạn
  messagingSenderId: "123...",   // ← Thay bằng của bạn
  appId: "1:123...",             // ← Thay bằng của bạn
  measurementId: "G-..."         // ← Thay bằng của bạn
};
```

### 3️⃣ Chạy development server

```bash
npm start
```

Website sẽ tự động mở tại http://localhost:3000

### 4️⃣ Deploy lên Firebase

```bash
# Đăng nhập Firebase (chỉ cần làm 1 lần)
firebase login

# Khởi tạo Firebase (chỉ cần làm 1 lần)
firebase init
# Chọn: Hosting + Storage
# Build directory: build
# Single-page app: Yes

# Build và Deploy
npm run deploy
```

### 5️⃣ Upload phần mềm DBI.ModbusSlave

1. Vào Firebase Console → Storage
2. Tạo folder `dbi-modbus-slave`
3. Upload các file `.exe`, `.zip` vào folder này
4. Website sẽ TỰ ĐỘNG hiển thị danh sách file!

---

## ✅ Checklist hoàn thành

- [ ] Đã cài đặt Node.js và npm
- [ ] Đã chạy `npm install`
- [ ] Đã tạo Firebase Project
- [ ] Đã kích hoạt Hosting và Storage
- [ ] Đã cập nhật `src/firebase.js` với config của bạn
- [ ] Đã test local với `npm start`
- [ ] Đã cài Firebase CLI: `npm install -g firebase-tools`
- [ ] Đã đăng nhập Firebase: `firebase login`
- [ ] Đã khởi tạo project: `firebase init`
- [ ] Đã deploy: `npm run deploy`
- [ ] Đã upload file vào Storage folder `dbi-modbus-slave`

---

## 🆘 Cần giúp đỡ?

### Xem hướng dẫn chi tiết
📖 **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Hướng dẫn từng bước cực kỳ chi tiết

### Các lỗi thường gặp

**❌ Lỗi: "Firebase command not found"**
```bash
npm install -g firebase-tools
```

**❌ Lỗi: "No files to deploy"**
```bash
npm run build
firebase deploy
```

**❌ File không hiển thị trong Downloads**
- Kiểm tra tên folder phải là `dbi-modbus-slave`
- Kiểm tra Storage Rules
- Mở F12 Console xem lỗi

---

## 📁 Cấu trúc Project

```
dbi-react-app/
├── src/
│   ├── components/      ← Các trang của website
│   ├── App.js          ← Main component
│   └── firebase.js     ← ⚠️ PHẢI CẬP NHẬT FILE NÀY!
├── public/
├── firebase.json       ← Firebase config
├── storage.rules       ← Storage security rules
└── package.json
```

---

## 🎯 Lệnh quan trọng

```bash
npm start              # Chạy development server
npm run build          # Build production
npm run deploy         # Build + Deploy tất cả
npm run deploy:hosting # Deploy chỉ hosting
firebase login         # Đăng nhập Firebase
firebase init          # Khởi tạo Firebase
firebase deploy        # Deploy lên Firebase
```

---

## 💡 Tips

1. **Luôn test local trước khi deploy**: `npm start`
2. **Đặt tên file rõ ràng**: `DBI.ModbusSlave-v1.0.0.exe`
3. **Check Firebase Console** để xem file đã upload chưa
4. **Xóa cache browser** nếu thấy website không cập nhật

---

**Chúc bạn thành công! 🎉**

Contact: buiminhduc23011@gmail.com | Phone: 0963322515
