// Google Drive Download Links Configuration
// Hướng dẫn lấy link Google Drive:
// 1. Upload file lên Google Drive
// 2. Right click → Share → Get link
// 3. Đổi thành "Anyone with the link can view"
// 4. Copy link có dạng: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
// 5. Lấy FILE_ID và paste vào đây
//https://drive.google.com/file/d/1maGpWe_lPuktUXruuGx4DKu5fnnZSZ8F/view?usp=sharing

export const googleDriveFiles = {
  modbusSlaveVersions: [
    {
      name: "DBI.ModbusSlave-v1.0.0.exe",
      fileId: "1maGpWe_lPuktUXruuGx4DKu5fnnZSZ8F", // Thay bằng file ID thật
      version: "1.0.0",
      description: "Phiên bản ổn định đầu tiên",
      size: "5.2 MB",
      date: "2024-10-01"
    }
    // Thêm phiên bản mới tại đây
  ],
  
  otherDownloads: [
    {
      name: "DBI Gateway (v1.0.0)",
      fileId: "YOUR_FILE_ID_3",
      description: "Phiên bản ổn định đầu tiên. Hỗ trợ Modbus TCP và OPC UA Server.",
      size: "12.5 MB",
      type: "software"
    },
    {
      name: "Hướng dẫn cài đặt DBI Gateway",
      fileId: "YOUR_FILE_ID_4",
      description: "Tài liệu hướng dẫn chi tiết từng bước cài đặt và cấu hình.",
      size: "2.3 MB",
      type: "document"
    }
  ]
};

// Helper function to generate Google Drive download link
export const getGoogleDriveDownloadUrl = (fileId) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

// Helper function to generate Google Drive view link
export const getGoogleDriveViewUrl = (fileId) => {
  return `https://drive.google.com/file/d/${fileId}/view`;
};
