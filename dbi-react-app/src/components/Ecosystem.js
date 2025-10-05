import React from 'react';
import { Link } from 'react-router-dom';

function Ecosystem() {
  const projects = [
    {
      name: 'DBI Gateway',
      description: 'Trái tim của hệ thống, đóng vai trò như Kepware nhưng miễn phí. Thu thập dữ liệu từ PLC, Cảm biến, thiết bị IoT qua nhiều giao thức và cung cấp qua OPC UA, MQTT.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      ),
      tags: ['Modbus TCP/RTU', 'Siemens S7', 'MCProtocol', 'OPC UA', 'MQTT'],
      link: null
    },
    {
      name: 'DBI Libraries',
      description: 'Các thư viện DLL giúp lập trình kết nối công nghiệp dễ dàng hơn. Hỗ trợ Modbus, S7, MCProtocol, OPC UA, MQTT. Tích hợp nhanh chóng vào ứng dụng .NET của bạn.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      tags: ['.NET Framework', '.NET Core', 'DLL', 'Industrial Protocols'],
      link: '/libraries'
    },
    {
      name: 'DBI Hardware',
      description: 'Các thiết bị phần cứng IoT (DIY) được thiết kế để dễ dàng tích hợp, thu thập tín hiệu từ các cảm biến analog/digital và truyền dữ liệu không dây về Gateway.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v7.5A2.25 2.25 0 0 0 6.75 18Z" />
        </svg>
      ),
      tags: ['ESP32', 'Raspberry Pi', 'WiFi/LoRa', 'Open-Source'],
      link: null
    },
    {
      name: 'DBI Tools',
      description: 'Bộ sưu tập các công cụ phần mềm nhỏ gọn, hữu ích cho kỹ sư tự động hóa: tool test Modbus, OPC UA client, logger dữ liệu, và nhiều hơn nữa.',
      icon: (
        <svg className="w-12 h-12 text-primary-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.43.992a6.759 6.759 0 0 1 0 1.25c.008.379.137.752.43.992l1.003.827c.424.35.534.955.26 1.431l-1.298 2.247a1.125 1.125 0 0 1-1.369.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.333.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 0 1-1.37-.49l-1.296-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.759 6.759 0 0 1 0-1.25c-.007-.379-.137-.752-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.431l1.297-2.247a1.125 1.125 0 0 1 1.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.213-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      tags: ['C#/.NET', 'Python', 'Desktop App', 'Utilities'],
      link: '/downloads'
    }
  ];

  return (
    <section className="fade-in">
      <h2 className="text-3xl font-bold text-center mb-2">Hệ sinh thái DBI</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
        Các thành phần chính được phát triển để tạo nên một giải pháp toàn diện.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => {
          const CardContent = (
            <div className="p-6">
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          return project.link ? (
            <Link
              key={index}
              to={project.link}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              {CardContent}
            </Link>
          ) : (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Ecosystem;
