# Script tự động chuyển đổi Firebase Project

Write-Host "=== CHUYEN DOI FIREBASE PROJECT ===" -ForegroundColor Cyan
Write-Host ""

# Kiểm tra Firebase CLI
Write-Host "1. Kiem tra Firebase CLI..." -ForegroundColor Yellow
$firebaseVersion = firebase --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "   [ERROR] Firebase CLI chua duoc cai dat!" -ForegroundColor Red
    Write-Host "   Chay: npm install -g firebase-tools" -ForegroundColor Yellow
    exit 1
}
Write-Host "   [OK] Firebase CLI: $firebaseVersion" -ForegroundColor Green

# Đăng nhập Firebase
Write-Host ""
Write-Host "2. Dang nhap Firebase..." -ForegroundColor Yellow
firebase login

# Liệt kê projects
Write-Host ""
Write-Host "3. Danh sach Firebase Projects:" -ForegroundColor Yellow
firebase projects:list

# Chọn project mới
Write-Host ""
Write-Host "4. Chon Firebase Project moi..." -ForegroundColor Yellow
Write-Host "   Neu chua co project 'dbi-officialwebsite', tao moi tai:" -ForegroundColor Cyan
Write-Host "   https://console.firebase.google.com" -ForegroundColor Cyan
Write-Host ""

firebase use --add

# Build
Write-Host ""
Write-Host "5. Building React App..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "   [ERROR] Build that bai!" -ForegroundColor Red
    exit 1
}
Write-Host "   [OK] Build thanh cong!" -ForegroundColor Green

# Deploy
Write-Host ""
Write-Host "6. Deploying to Firebase..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== DEPLOY THANH CONG! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Website cua ban: https://YOUR_PROJECT_ID.web.app" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "=== DEPLOY THAT BAI! ===" -ForegroundColor Red
}
