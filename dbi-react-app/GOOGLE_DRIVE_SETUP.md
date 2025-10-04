# 📁 Hướng dẫn Upload File lên Google Drive

## ✅ Ưu điểm Google Drive

- 🆓 **Miễn phí 15GB** (vs 5GB Firebase)
- 🚀 **Không giới hạn băng thông download**
- 🔒 **Bảo mật tốt** với Google
- 📊 **Dễ quản lý** qua Google Drive UI
- 💰 **Không tốn chi phí** Firebase

---

## 🎯 Cách Upload và Lấy Link

### Bước 1: Upload file lên Google Drive

1. Vào https://drive.google.com
2. Tạo folder tên `DBI Software` (hoặc tên bất kỳ)
3. Upload các file phần mềm vào folder:
   - `DBI.ModbusSlave-v1.0.0.exe`
   - `DBI.ModbusSlave-v1.1.0.zip`
   - `DBI.Gateway-v1.0.0.exe`
   - etc.

### Bước 2: Lấy File ID

**Cách 1: Từ Link Share**

1. Right-click file → **Get link** hoặc **Chia sẻ**
2. Đổi quyền thành **"Anyone with the link"** → **Viewer**
3. Copy link, có dạng:
   ```
   https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J-kLmNoPqRsTuV/view?usp=sharing
   ```
4. **File ID** là phần giữa `/d/` và `/view`:
   ```
   1a2B3c4D5e6F7g8H9i0J-kLmNoPqRsTuV
   ```

**Cách 2: Từ URL Browser**

1. Mở file trong Google Drive
2. Xem URL trên thanh address bar
3. File ID nằm sau `/d/` và trước `/view`

### Bước 3: Cập nhật vào Code

Mở file: `src/config/googleDriveConfig.js`

```javascript
export const googleDriveFiles = {
  modbusSlaveVersions: [
    {
      name: "DBI.ModbusSlave-v1.0.0.exe",
      fileId: "1a2B3c4D5e6F7g8H9i0J-kLmNoPqRsTuV", // ← Paste File ID vào đây
      version: "1.0.0",
      description: "Phiên bản ổn định đầu tiên",
      size: "5.2 MB",
      date: "2024-10-01"
    },
    {
      name: "DBI.ModbusSlave-v1.1.0.zip",
      fileId: "YOUR_FILE_ID_HERE", // ← Paste File ID vào đây
      version: "1.1.0",
      description: "Thêm tính năng Modbus RTU",
      size: "5.8 MB",
      date: "2024-10-15"
    }
  ]
};
```

### Bước 4: Build và Deploy

```bash
npm run build
firebase deploy --only hosting
```

---

## 📋 Ví dụ Hoàn Chỉnh

### File trên Google Drive:
- Tên file: `DBI.ModbusSlave-v1.0.0.exe`
- Link: `https://drive.google.com/file/d/1ABC-xyz123_DEFghi456/view?usp=sharing`
- **File ID**: `1ABC-xyz123_DEFghi456`

### Cập nhật trong Code:

```javascript
{
  name: "DBI.ModbusSlave-v1.0.0.exe",
  fileId: "1ABC-xyz123_DEFghi456", // ✅ Correct!
  version: "1.0.0",
  description: "Công cụ mô phỏng Modbus Slave",
  size: "5.2 MB",
  date: "2024-10-01"
}
```

---

## 🔧 Quản Lý Versions

### Thêm Version Mới

1. Upload file mới lên Google Drive
2. Lấy File ID
3. Thêm vào array trong `googleDriveConfig.js`:

```javascript
export const googleDriveFiles = {
  modbusSlaveVersions: [
    // ... versions cũ ...
    {
      name: "DBI.ModbusSlave-v2.0.0.exe",
      fileId: "NEW_FILE_ID_HERE",
      version: "2.0.0",
      description: "Version mới với nhiều tính năng",
      size: "6.5 MB",
      date: "2024-11-01"
    }
  ]
};
```

### Xóa Version Cũ

1. Xóa file khỏi Google Drive (hoặc giữ lại để backup)
2. Xóa object tương ứng trong `googleDriveConfig.js`
3. Build và deploy lại

---

## ⚙️ Cấu Hình Nâng Cao

### Tổ chức Folder Structure

```
Google Drive/
└── DBI Software/
    ├── ModbusSlave/
    │   ├── DBI.ModbusSlave-v1.0.0.exe
    │   ├── DBI.ModbusSlave-v1.1.0.zip
    │   └── DBI.ModbusSlave-v2.0.0.exe
    ├── Gateway/
    │   └── DBI.Gateway-v1.0.0.exe
    └── Documents/
        └── Installation-Guide.pdf
```

### Đặt Tên File Chuẩn

**Khuyến nghị:**
- `ProductName-vX.Y.Z.extension`
- Ví dụ: `DBI.ModbusSlave-v1.2.3.exe`

**Tránh:**
- Khoảng trắng: ❌ `DBI Modbus Slave v1.0.exe`
- Ký tự đặc biệt: ❌ `DBI@ModbusSlave#v1.0.exe`
- Tiếng Việt có dấu: ❌ `DBI-Phần_mềm-v1.0.exe`

---

## 🔒 Bảo Mật

### Quyền Truy Cập

**✅ Khuyến nghị:**
```
Anyone with the link → Viewer
```

**❌ Tránh:**
- Public on the web (ai cũng search được)
- Restricted (chỉ bạn xem được)

### Theo Dõi Downloads

1. Vào Google Drive
2. Right-click file → **View details**
3. Xem **Activity** để biết ai đã download

---

## 💡 Tips & Tricks

### 1. Shortcut Upload

Kéo thả file vào Google Drive browser để upload nhanh

### 2. Bulk Upload

Chọn nhiều files → Upload cùng lúc → Lấy File ID từng file

### 3. Versioning

Giữ tất cả versions trong Google Drive để users có thể download version cũ nếu cần

### 4. Tên File Rõ Ràng

```javascript
size: "5.2 MB",        // ✅ Tốt
size: "5234567 bytes"  // ❌ Khó đọc
```

---

## 🚨 Troubleshooting

### File không download được

**Nguyên nhân:** File ID sai hoặc quyền truy cập không đúng

**Giải pháp:**
1. Kiểm tra File ID có đúng không
2. Kiểm tra quyền share: "Anyone with the link"
3. Thử mở link trực tiếp trong browser

### Link bị chặn

**Nguyên nhân:** Google phát hiện file lạ (malware scan)

**Giải pháp:**
- Đợi vài phút
- Hoặc nén file thành .zip
- Hoặc upload lại

### Tốc độ download chậm

**Nguyên nhân:** File lớn + nhiều người download cùng lúc

**Giải pháp:**
- Google Drive tự động scale
- Hoặc sử dụng nhiều Google accounts để upload copies

---

## 📊 So Sánh: Firebase vs Google Drive

| Tính năng | Firebase Storage | Google Drive |
|-----------|-----------------|--------------|
| Dung lượng miễn phí | 5GB | 15GB |
| Băng thông/ngày | 1GB | Không giới hạn |
| Download link | Tự động expire | Không expire |
| Quản lý | Firebase Console | Google Drive |
| Chi phí | Tính theo GB | Miễn phí |

---

## ✅ Checklist

- [ ] Upload file lên Google Drive
- [ ] Set quyền "Anyone with the link → Viewer"
- [ ] Copy File ID
- [ ] Cập nhật `googleDriveConfig.js`
- [ ] Test download link
- [ ] Build: `npm run build`
- [ ] Deploy: `firebase deploy`
- [ ] Kiểm tra website

---

**Done! Files của bạn đã sẵn sàng cho users download! 🎉**

Contact: buiminhduc23011@gmail.com | 0963322515
