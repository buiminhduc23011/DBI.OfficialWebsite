import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import { storage } from '../firebase';

function Downloads() {
  const [modbusSlaveVersions, setModbusSlaveVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const storageRef = ref(storage, 'dbi-modbus-slave');
        const result = await listAll(storageRef);
        
        const versions = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            const metadata = await getMetadata(itemRef);
            return {
              name: itemRef.name,
              url: url,
              size: formatBytes(metadata.size),
              updated: new Date(metadata.updated).toLocaleDateString('vi-VN')
            };
          })
        );

        setModbusSlaveVersions(versions);
      } catch (error) {
        console.error('Error fetching versions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, []);

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const downloads = [
    {
      name: 'DBI Gateway (v1.0.0)',
      description: 'Phiên bản ổn định đầu tiên. Hỗ trợ Modbus TCP và OPC UA Server.',
      url: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Hướng dẫn cài đặt DBI Gateway',
      description: 'Tài liệu hướng dẫn chi tiết từng bước cài đặt và cấu hình.',
      url: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

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
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Công cụ mô phỏng Modbus Slave giúp bạn kiểm tra và phát triển các ứng dụng Modbus Master một cách dễ dàng.
          </p>

          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Đang tải danh sách phiên bản...</p>
            </div>
          ) : modbusSlaveVersions.length > 0 ? (
            <div className="space-y-4">
              {modbusSlaveVersions.map((version, index) => (
                <div 
                  key={index}
                  className="download-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-between"
                >
                  <div className="flex items-center flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-lg">{version.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Kích thước: {version.size} • Cập nhật: {version.updated}
                      </p>
                    </div>
                  </div>
                  <a 
                    href={version.url}
                    download
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ml-4 flex-shrink-0"
                  >
                    Tải xuống
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                Hiện chưa có phiên bản nào được tải lên. Vui lòng kiểm tra lại sau.
              </p>
            </div>
          )}
        </div>

        {/* Other Downloads */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Các tài nguyên khác</h3>
          {downloads.map((download, index) => (
            <div 
              key={index}
              className="download-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                {download.icon}
                <div>
                  <h3 className="font-semibold">{download.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{download.description}</p>
                </div>
              </div>
              <a 
                href={download.url} 
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                {download.name.includes('Hướng dẫn') ? 'Xem tài liệu' : 'Tải xuống'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Downloads;
