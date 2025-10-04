# Hướng dẫn Deploy DBI Website lên Firebase

## Bước 1: Chuẩn bị Firebase Project

### 1.1. Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** hoặc **"Thêm dự án"**
3. Đặt tên project (ví dụ: `dbi-official-website`)
4. Bỏ chọn Google Analytics nếu không cần
5. Click **"Create project"**

### 1.2. Kích hoạt Firebase Hosting

1. Trong Firebase Console, chọn project vừa tạo
2. Vào menu bên trái, chọn **"Build"** → **"Hosting"**
3. Click **"Get started"**
4. Làm theo hướng dẫn (chúng ta sẽ setup bằng CLI ở bước sau)

### 1.3. Kích hoạt Firebase Storage

1. Trong Firebase Console, chọn **"Build"** → **"Storage"**
2. Click **"Get started"**
3. Chọn **"Start in production mode"**
4. Chọn vị trí server (khuyến nghị: **asia-southeast1** cho Việt Nam)
5. Click **"Done"**

### 1.4. Lấy Firebase Config

1. Trong Firebase Console, click vào icon ⚙️ (Settings) → **"Project settings"**
2. Scroll xuống phần **"Your apps"**
3. Click vào icon Web **</>** để thêm web app
4. Đặt nickname (ví dụ: `DBI Website`)
5. KHÔNG chọn "Also set up Firebase Hosting"
6. Click **"Register app"**
7. Copy đoạn code `firebaseConfig`, ví dụ:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "dbi-official-website.firebaseapp.com",
  projectId: "dbi-official-website",
  storageBucket: "dbi-official-website.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};
```

## Bước 2: Cấu hình Project Local

### 2.1. Cập nhật Firebase Config

Mở file `src/firebase.js` và thay thế nội dung bằng config vừa copy:

```javascript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "dbi-official-website.firebaseapp.com",
  projectId: "dbi-official-website",
  storageBucket: "dbi-official-website.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
```

### 2.2. Test Local

```bash
npm start
```

Mở http://localhost:3000 để xem website

## Bước 3: Deploy lên Firebase

### 3.1. Đăng nhập Firebase

```bash
firebase login
```

Browser sẽ mở ra, đăng nhập bằng Google account của bạn.

### 3.2. Khởi tạo Firebase trong project

```bash
firebase init
```

**Chọn các tùy chọn:**

1. **Which Firebase features?**
   - [x] Hosting
   - [x] Storage
   - Nhấn Space để chọn, Enter để tiếp tục

2. **Select a default Firebase project:**
   - Chọn project vừa tạo (ví dụ: `dbi-official-website`)

3. **What do you want to use as your public directory?**
   - Nhập: `build`

4. **Configure as a single-page app?**
   - Chọn: `Yes`

5. **Set up automatic builds and deploys with GitHub?**
   - Chọn: `No` (hoặc Yes nếu muốn auto-deploy)

6. **What file should be used for Storage rules?**
   - Nhấn Enter (dùng mặc định `storage.rules`)

7. **File storage.rules already exists. Overwrite?**
   - Chọn: `No`

### 3.3. Build Production

```bash
npm run build
```

Lệnh này sẽ tạo folder `build` với các file tối ưu hóa.

### 3.4. Deploy lên Firebase

```bash
firebase deploy
```

Hoặc nếu chỉ deploy hosting:

```bash
firebase deploy --only hosting
```

**Kết quả:**

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/dbi-official-website/overview
Hosting URL: https://dbi-official-website.web.app
```

## Bước 4: Upload phần mềm DBI.ModbusSlave

### Cách 1: Sử dụng Firebase Console (Khuyến nghị)

1. Truy cập [Firebase Console](https://console.firebase.google.com)
2. Chọn project của bạn
3. Vào **"Build"** → **"Storage"**
4. Click **"Create folder"** → Đặt tên: `dbi-modbus-slave`
5. Vào folder vừa tạo
6. Click **"Upload file"**
7. Chọn các file phần mềm (ví dụ: `DBI.ModbusSlave-v1.0.0.exe`, `DBI.ModbusSlave-v1.1.0.zip`)
8. Đợi upload hoàn tất

**Lưu ý về tên file:**
- Đặt tên file rõ ràng, có version (ví dụ: `DBI.ModbusSlave-v1.0.0.exe`)
- Website sẽ tự động hiển thị danh sách file

### Cách 2: Sử dụng gsutil (Advanced)

```bash
# Cài đặt Google Cloud SDK
# https://cloud.google.com/sdk/docs/install

# Upload file
gsutil cp DBI.ModbusSlave-v1.0.0.exe gs://dbi-official-website.appspot.com/dbi-modbus-slave/
```

### 4.1. Cập nhật Storage Rules (nếu cần)

File `storage.rules` đã được cấu hình sẵn:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;  // Ai cũng có thể đọc/tải file
      allow write: if request.auth != null;  // Chỉ user đã đăng nhập mới upload được
    }
  }
}
```

Deploy storage rules:

```bash
firebase deploy --only storage
```

## Bước 5: Kiểm tra Website

1. Mở URL của bạn: `https://dbi-official-website.web.app`
2. Vào trang **"Tải về"**
3. Kiểm tra xem danh sách phần mềm DBI.ModbusSlave có hiển thị không

## Cập nhật Website

Mỗi khi có thay đổi:

```bash
# 1. Chỉnh sửa code
# 2. Test local
npm start

# 3. Build
npm run build

# 4. Deploy
firebase deploy
```

## Custom Domain (Tùy chọn)

### Thêm tên miền riêng

1. Vào Firebase Console → **Hosting**
2. Click **"Add custom domain"**
3. Nhập tên miền (ví dụ: `dbi-project.com`)
4. Làm theo hướng dẫn để verify và cấu hình DNS

## Troubleshooting

### Lỗi: "Firebase command not found"

```bash
npm install -g firebase-tools
```

### Lỗi: "Permission denied"

Trên Windows, mở PowerShell as Administrator và chạy:

```bash
Set-ExecutionPolicy RemoteSigned
```

### Website không cập nhật sau khi deploy

1. Xóa cache browser (Ctrl + Shift + Delete)
2. Hoặc mở Incognito mode (Ctrl + Shift + N)

### File không hiển thị trong Downloads

1. Kiểm tra tên folder phải là `dbi-modbus-slave`
2. Kiểm tra Storage Rules đã deploy chưa
3. Mở Console browser (F12) xem có lỗi không

## Lệnh Firebase hữu ích

```bash
# Xem project hiện tại
firebase projects:list

# Chuyển project
firebase use <project-id>

# Xem hosting URL
firebase hosting:channel:list

# Xóa deploy (rollback)
firebase hosting:clone <source>:<channel-id> <destination>:<channel-id>

# Preview trước khi deploy
firebase hosting:channel:deploy preview

# Xem logs
firebase functions:log
```

## Chi phí

- **Hosting**: Miễn phí cho ~10GB bandwidth/tháng
- **Storage**: Miễn phí cho 5GB lưu trữ và 1GB download/ngày
- Hoàn toàn đủ cho website nhỏ!

---

**Chúc bạn deploy thành công! 🚀**

Nếu có vấn đề, liên hệ: buiminhduc23011@gmail.com
