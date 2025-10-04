import React, { useState } from 'react';
import { googleDriveFiles, getGoogleDriveDownloadUrl } from '../config/googleDriveConfig';

function Downloads() {
  const [expandedVersion, setExpandedVersion] = useState(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  const handleDownload = (fileId, fileName) => {
    const downloadUrl = getGoogleDriveDownloadUrl(fileId);
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Tải về & Bắt đầu</h2>
      
      <div className="max-w-4xl mx-auto">
        {/* DBI ModbusSlave Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            DBI.ModbusSlave
            <span className="ml-3 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Google Drive
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Công cụ mô phỏng Modbus Slave giúp bạn kiểm tra và phát triển các ứng dụng Modbus Master một cách dễ dàng.
          </p>

          {googleDriveFiles.modbusSlaveVersions.length > 0 ? (
            <div className="space-y-4">
              {googleDriveFiles.modbusSlaveVersions.map((version, index) => (
                <div 
                  key={index}
                  className="download-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-lg">{version.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Kích thước: {version.size} • Cập nhật: {formatDate(version.date)}
                        </p>
                        {version.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {version.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(version.fileId, version.name)}
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ml-4 flex-shrink-0 flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Tải xuống
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                Hiện chưa có phiên bản nào. Vui lòng cập nhật file Google Drive IDs trong <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">src/config/googleDriveConfig.js</code>
              </p>
            </div>
          )}
        </div>

        {/* Other Downloads */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Các tài nguyên khác</h3>
          {googleDriveFiles.otherDownloads.map((download, index) => (
            <div 
              key={index}
              className="download-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                {download.type === 'document' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                <div>
                  <h3 className="font-semibold">{download.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{download.description}</p>
                  {download.size && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Kích thước: {download.size}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDownload(download.fileId, download.name)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                {download.type === 'document' ? 'Xem tài liệu' : 'Tải xuống'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Downloads;
