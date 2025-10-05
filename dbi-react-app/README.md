# DBI Official Website - React App

Website chính thức của DBI Platform được xây dựng bằng React và deploy lên Firebase Hosting.

## Tính năng

- ✅ Single Page Application (SPA) với React Router
- ✅ Dark mode / Light mode
- ✅ Responsive design với Tailwind CSS
- ✅ Tích hợp Firebase Storage để tải phần mềm
- ✅ Tự động tải danh sách phiên bản DBI.ModbusSlave từ Firebase Storage
- ✅ Deploy lên Firebase Hosting

## Cài đặt

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Yêu cầu
- Node.js (v14 trở lên)
- npm hoặc yarn
- Firebase CLI

### Các bước cài đặt

1. **Cài đặt dependencies**
```bash
npm install
```

2. **Cấu hình Firebase**

   a. Tạo project trên Firebase Console (https://console.firebase.google.com)
   
   b. Bật Firebase Storage và Hosting trong project
   
   c. Cập nhật file `src/firebase.js` với thông tin Firebase config của bạn:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

3. **Chạy development server**
```bash
npm start
```

Website sẽ chạy tại http://localhost:3000

## Deploy lên Firebase

### 1. Cài đặt Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Đăng nhập vào Firebase

```bash
firebase login
```

### 3. Khởi tạo Firebase project

```bash
firebase init
```

Chọn:
- ✅ Hosting: Configure files for Firebase Hosting
- ✅ Storage: Configure security rules file for Cloud Storage
- Chọn project Firebase của bạn
- Build directory: `build`
- Single-page app: `Yes`
- GitHub auto-deploys: `No` (hoặc Yes nếu muốn)

### 4. Build project

```bash
npm run build
```

### 5. Deploy lên Firebase

```bash
firebase deploy
```

Website của bạn sẽ được deploy tại: `https://YOUR_PROJECT_ID.web.app`

## Tải phần mềm lên Firebase Storage

### Cách 1: Sử dụng Firebase Console (Dễ dàng)

1. Truy cập Firebase Console
2. Vào mục **Storage**
3. Tạo folder tên `dbi-modbus-slave`
4. Upload các file phần mềm (.exe, .zip) vào folder này
5. Website sẽ tự động hiển thị danh sách file

### Cách 2: Sử dụng Firebase CLI hoặc SDK

```javascript
// Ví dụ code upload file
import { ref, uploadBytes } from "firebase/storage";
import { storage } from './firebase';

const uploadFile = async (file) => {
  const storageRef = ref(storage, `dbi-modbus-slave/${file.name}`);
  await uploadBytes(storageRef, file);
};
```

## Cấu trúc thư mục

```
dbi-react-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Ecosystem.js
│   │   ├── Downloads.js
│   │   ├── AboutMe.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── firebase.js
├── firebase.json
├── storage.rules
├── tailwind.config.js
└── package.json
```


```

## Công nghệ sử dụng

- **React** - UI Framework
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Firebase Hosting** - Web hosting
- **Firebase Storage** - File storage
- **Firebase SDK** - Firebase integration

## Tùy chỉnh

### Thay đổi màu sắc chủ đạo

Chỉnh sửa file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Thay đổi các màu ở đây
      }
    }
  }
}
```

### Thêm trang mới

1. Tạo component mới trong `src/components/`
2. Import và thêm route trong `src/App.js`:

```javascript
import NewPage from './components/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `firebase deploy`

Deploy the app to Firebase Hosting after running `npm run build`.

## Bảo mật

- File `.env.local` đã được thêm vào `.gitignore`
- Storage rules cho phép đọc công khai, chỉ cho phép ghi với authenticated users
- Cập nhật `storage.rules` nếu cần thay đổi quyền truy cập

## Support

Nếu có vấn đề, vui lòng:
- Tạo issue trên GitHub
- Liên hệ: buiminhduc23011@gmail.com
- Phone: 0963322515

## License

© 2024 DBI - Data Bridge Industrial Project. All Rights Reserved.

---

Made with ❤️ by Bùi Văn Đức

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
