# 📧 Hướng dẫn Setup EmailJS - Contact Form

## 🎯 Giới thiệu

EmailJS cho phép gửi email trực tiếp từ JavaScript mà không cần backend server.

**Ưu điểm:**
- ✅ Miễn phí 200 emails/tháng
- ✅ Không cần backend
- ✅ Dễ setup (5 phút)
- ✅ Hỗ trợ Gmail, Outlook, Yahoo, etc.

---

## 🚀 Bước 1: Đăng ký EmailJS

1. Vào https://www.emailjs.com/
2. Click **"Sign Up"** 
3. Chọn **"Continue with Google"** (khuyến nghị) hoặc email
4. Xác nhận email

---

## 📮 Bước 2: Tạo Email Service

### 2.1. Add Email Service

1. Vào Dashboard → **"Email Services"**
2. Click **"Add New Service"**
3. Chọn **"Gmail"** (hoặc email service bạn dùng)
4. Click **"Connect Account"**
5. Đăng nhập Gmail và cho phép quyền truy cập

### 2.2. Copy Service ID

Sau khi connect thành công:
- Service ID sẽ hiển thị (vd: `service_abc123`)
- **Copy Service ID** này

---

## 📝 Bước 3: Tạo Email Template

### 3.1. Create Template

1. Vào Dashboard → **"Email Templates"**
2. Click **"Create New Template"**
3. Đặt tên template: `DBI Contact Form`

### 3.2. Cấu hình Template

**Template Settings:**

**Subject:**
```
[DBI Website] {{subject}}
```

**Content:**
```
Bạn nhận được tin nhắn mới từ DBI Official Website

Từ: {{from_name}}
Email: {{from_email}}
Chủ đề: {{subject}}

Nội dung:
{{message}}

---
Tin nhắn này được gửi từ form liên hệ tại DBI Official Website
Email để reply: {{reply_to}}
```

**To Email:**
- Điền email của bạn: `buiminhduc23011@gmail.com`

**From Name:**
```
DBI Website Contact
```

**From Email:**
- Để mặc định (sẽ dùng email service)

**Reply To:**
```
{{reply_to}}
```

### 3.3. Test Template

1. Click **"Test it"**
2. Điền thử các thông tin
3. Click **"Send Test Email"**
4. Kiểm tra inbox

### 3.4. Copy Template ID

- Sau khi save, copy **Template ID** (vd: `template_xyz789`)

---

## 🔑 Bước 4: Lấy Public Key

1. Vào Dashboard → **Account** → **General**
2. Tìm **"Public Key"** (vd: `abcd1234EFGH5678`)
3. **Copy Public Key**

---

## ⚙️ Bước 5: Cập nhật Environment Variables

Mở file: `.env.local`

```bash
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_abc123      # ← Paste Service ID
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789    # ← Paste Template ID
REACT_APP_EMAILJS_PUBLIC_KEY=abcd1234EFGH5678    # ← Paste Public Key
```

**Lưu ý:**
- File `.env.local` đã được thêm vào `.gitignore` → Không bị commit lên Git
- Credentials của bạn được bảo mật
- Không cần sửa file `src/config/emailConfig.js` (đã tự động đọc từ env)

---

## 🧪 Bước 6: Test Local

```bash
# Chạy development server
npm start
```

1. Vào http://localhost:3000/#/contact
2. Điền form và submit
3. Kiểm tra email inbox
4. Nếu nhận được email → ✅ Thành công!

---

## 🚀 Bước 7: Deploy

```bash
npm run build
firebase deploy --only hosting
```

---

## 📊 Giám sát Emails

### Dashboard Stats

Vào EmailJS Dashboard để xem:
- Số emails đã gửi
- Tỷ lệ thành công/thất bại
- Logs chi tiết

### Free Tier Limits

- **200 emails/month** miễn phí
- Nếu vượt quá, nâng cấp lên paid plan ($7/tháng cho 1000 emails)

---

## 🛠️ Troubleshooting

### Lỗi: "Invalid Public Key"

**Nguyên nhân:** Sai Public Key

**Giải pháp:**
1. Kiểm tra lại Public Key trong Dashboard
2. Copy chính xác (không có khoảng trắng)
3. Cập nhật trong `.env.local`

### Lỗi: "Service not found"

**Nguyên nhân:** Sai Service ID

**Giải pháp:**
1. Vào Email Services
2. Copy đúng Service ID
3. Cập nhật trong `.env.local`

### Lỗi: "Template not found"

**Nguyên nhân:** Sai Template ID

**Giải pháp:**
1. Vào Email Templates
2. Copy đúng Template ID
3. Cập nhật trong `.env.local`

### Email không nhận được

**Nguyên nhân:** 
- Có thể vào Spam folder
- Gmail blocked

**Giải pháp:**
1. Kiểm tra Spam/Junk folder
2. Add sender vào whitelist
3. Kiểm tra EmailJS Dashboard logs

### Gmail blocked sending

**Nguyên nhân:** Gmail chặn "Less secure apps"

**Giải pháp:**
1. Sử dụng Gmail App Password:
   - Vào Google Account Settings
   - Security → 2-Step Verification
   - App passwords → Generate
   - Dùng password này trong EmailJS

---

## 🎨 Customization

### Thay đổi Email Template

1. Vào EmailJS Dashboard → Email Templates
2. Click vào template của bạn
3. Chỉnh sửa nội dung
4. Save → Không cần thay đổi code!

### Thêm Fields mới

**Trong Contact.js:**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',  // ← Field mới
});
```

**Trong Email Template:**
```
Phone: {{phone}}
```

### Gửi đến nhiều người

Trong Template Settings:
- **To Email**: `email1@gmail.com, email2@gmail.com`

---

## 💡 Tips

### 1. Auto-reply cho người gửi

Tạo template thứ 2 gửi cho người dùng:

```javascript
// Gửi 2 emails
await emailjs.send(serviceId, templateId1, params, publicKey); // Gửi cho bạn
await emailjs.send(serviceId, templateId2, params, publicKey); // Auto-reply
```

### 2. Rate Limiting

Thêm cooldown để tránh spam:

```javascript
const [canSubmit, setCanSubmit] = useState(true);

const handleSubmit = async (e) => {
  if (!canSubmit) return;
  
  setCanSubmit(false);
  // ... send email
  
  setTimeout(() => setCanSubmit(true), 60000); // 1 phút
};
```

### 3. Notification Sound

```javascript
// Sau khi gửi thành công
const audio = new Audio('/success.mp3');
audio.play();
```

---

## 📈 Alternatives (nếu EmailJS không phù hợp)

### 1. **Google Forms**

**Pros:** Miễn phí không giới hạn, lưu vào Sheets
**Cons:** Không tùy chỉnh nhiều

**Setup:**
- Tạo Google Form
- Embed vào website
- Responses lưu vào Google Sheets

### 2. **Formspree**

**Pros:** Đơn giản, miễn phí 50 submissions/tháng
**Cons:** Giới hạn ít hơn EmailJS

**URL:** https://formspree.io

### 3. **Firebase Firestore**

**Pros:** Lưu trực tiếp vào database, không giới hạn
**Cons:** Phải setup thêm

**Code:**
```javascript
import { addDoc, collection } from 'firebase/firestore';

await addDoc(collection(db, 'contacts'), formData);
```

---

## ✅ Checklist

- [ ] Đăng ký EmailJS account
- [ ] Tạo Email Service (Gmail)
- [ ] Tạo Email Template
- [ ] Copy Service ID, Template ID, Public Key
- [ ] Cập nhật `.env.local` với 3 IDs
- [ ] Restart dev server (nếu đang chạy)
- [ ] Test local
- [ ] Kiểm tra email nhận được
- [ ] Deploy lên Firebase
- [ ] Test trên production

---

## 🎉 Hoàn thành!

Form contact của bạn đã sẵn sàng nhận feedback từ users!

**Contact:** buiminhduc23011@gmail.com | 0963322515
