import React from 'react';

function Libraries() {
  const libraries = [
    {
      name: 'DBI.Core',
      version: 'v1.0.0',
      description: 'Thư viện cốt lõi cung cấp các chức năng cơ bản cho việc kết nối và xử lý dữ liệu công nghiệp. Bao gồm các interface và base classes cho các protocol handlers.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      features: ['Protocol Abstraction', 'Data Models', 'Error Handling', 'Logging'],
      downloadUrl: '#',
      documentationUrl: ''
    },
    {
      name: 'DBI.Modbus',
      version: 'v1.2.0',
      description: 'Thư viện hỗ trợ đầy đủ giao thức Modbus TCP và Modbus RTU. Cho phép đọc/ghi dữ liệu từ PLC, thiết bị công nghiệp một cách dễ dàng với API đơn giản.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      features: ['Modbus TCP Client', 'Modbus RTU Serial', 'Master/Slave Mode', 'Function Codes 1-6, 15-16'],
      downloadUrl: 'https://drive.google.com/file/d/1jhdo81yVG_L2RthxU0uTqbVMv_l27-yd/view?usp=sharing',
      documentationUrl: '/#/libraries/modbus'
    },
    {
      name: 'DBI.Delta.PLC',
      version: 'v1.0.0',
      description: 'Thư viện driver giao tiếp với PLC Delta DVP series thông qua giao thức Modbus. Cung cấp API thân thiện để đọc/ghi dữ liệu PLC theo vùng nhớ (D, M, X, Y, S, C, T...).',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      features: ['Delta DVP Series', 'Modbus TCP/ASCII', 'D/M/X/Y/S/C/T Registers', 'Auto Reconnect'],
      downloadUrl: 'https://drive.google.com/file/d/11g_edNkRGllYfYubWq9_FPHjR3fqpND-/view?usp=sharing',
      documentationUrl: '/#/libraries/delta'
    },
    {
      name: 'DBI.S7',
      version: 'v1.0.5',
      description: 'Kết nối với PLC Siemens S7 (S7-200, S7-300, S7-400, S7-1200, S7-1500). Đọc/ghi dữ liệu từ DB, Merker, Input, Output một cách hiệu quả.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      ),
      features: ['S7 Protocol', 'DB Access', 'Bit/Byte/Word/DWord Operations', 'Connection Pooling'],
      downloadUrl: '#',
      documentationUrl: '#'
    },
    {
      name: 'DBI.MCProtocol',
      version: 'v1.0.2',
      description: 'Thư viện hỗ trợ giao thức MC (MELSEC Communication Protocol) của Mitsubishi. Tương thích với PLC FX, Q, L series qua Ethernet.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>
      ),
      features: ['MC Protocol 3E/4E', 'Binary/ASCII Frame', 'Batch Read/Write', 'Device Support (D, M, X, Y, etc.)'],
      downloadUrl: '#',
      documentationUrl: '#'
    },
    {
      name: 'DBI.OpcUa',
      version: 'v1.1.0',
      description: 'OPC UA Client library cho phép kết nối với các OPC UA Server. Hỗ trợ subscribe, browse nodes, đọc/ghi giá trị với security policies đầy đủ.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      features: ['OPC UA Client', 'Node Browsing', 'Subscription', 'Security Policies'],
      downloadUrl: '#',
      documentationUrl: '#'
    },
    {
      name: 'DBI.MQTT',
      version: 'v1.0.8',
      description: 'MQTT Client library hỗ trợ kết nối với MQTT Broker (Mosquitto, HiveMQ, AWS IoT, Azure IoT Hub). Publish/Subscribe messages với QoS levels và retained messages.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
      features: ['MQTT 3.1.1/5.0', 'QoS 0/1/2', 'SSL/TLS Support', 'Auto Reconnect'],
      downloadUrl: '#',
      documentationUrl: '#'
    }
  ];

  return (
    <section className="fade-in">
      <h2 className="text-3xl font-bold text-center mb-2">Thư viện DBI</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
        Các thư viện DLL giúp lập trình kết nối công nghiệp dễ dàng hơn. Tích hợp nhanh chóng vào ứng dụng .NET của bạn.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {libraries.map((library, index) => {
          const isAvailable = library.downloadUrl !== '#';
          
          return (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative ${!isAvailable ? 'opacity-50' : ''}`}
            >
              {!isAvailable && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full font-semibold">
                    Sắp ra mắt
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  {library.icon}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{library.name}</h3>
                      {isAvailable && (
                        <span className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                          {library.version}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {library.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Tính năng chính:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {library.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {isAvailable ? (
                    <>
                      <a 
                        href={library.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Tải về
                      </a>
                      {typeof library.documentationUrl === 'function' ? (
                        <button 
                          onClick={library.documentationUrl}
                          className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Tài liệu
                        </button>
                      ) : (
                        <a 
                          href={library.documentationUrl}
                          className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                          <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Tài liệu
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <button 
                        disabled
                        className="flex-1 text-center bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Chưa có sẵn
                      </button>
                      <button 
                        disabled
                        className="flex-1 text-center bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                      >
                        <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Tài liệu
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
          <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hướng dẫn sử dụng
        </h3>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <p>• <strong>Yêu cầu:</strong> .NET 8+</p>
          <p>• <strong>Cài đặt:</strong> Tải file DLL và thêm reference vào project của bạn</p>
          <p>• <strong>NuGet:</strong> Các package cũng có sẵn trên NuGet (đang cập nhật)</p>
          <p>• <strong>Hỗ trợ:</strong> Xem tài liệu chi tiết hoặc liên hệ qua mục Liên hệ</p>
        </div>
      </div>
    </section>
  );
}

export default Libraries;
