// EmailJS Configuration
// Đăng ký miễn phí tại: https://www.emailjs.com/
// 
// Hướng dẫn setup:
// 1. Tạo account tại https://www.emailjs.com/
// 2. Tạo Email Service (Gmail recommended)
// 3. Tạo Email Template
// 4. Copy các IDs vào file .env.local

export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

// Template variables (sử dụng trong EmailJS template):
// {{from_name}} - Tên người gửi
// {{from_email}} - Email người gửi
// {{subject}} - Chủ đề
// {{message}} - Nội dung tin nhắn
// {{reply_to}} - Email để reply

// Example EmailJS Template:
/*
Subject: [DBI Website] {{subject}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
Sent from DBI Official Website
*/
