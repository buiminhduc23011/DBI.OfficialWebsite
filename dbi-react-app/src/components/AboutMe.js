import React from 'react';

function AboutMe() {
  const skills = [
    'PLC: Siemens, Mitsubishi, Delta, Samkon',
    'C, C++, C#, Python',
    'Node.js / React'
  ];

  return (
    <section className="fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img 
            src="https://placehold.co/400x400/3b82f6/ffffff?text=BVD" 
            alt="Ảnh đại diện Bùi Văn Đức" 
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white dark:border-gray-700"
          />
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-2">Về tác giả</h2>
          <h3 className="text-2xl font-semibold mb-2">Bùi Văn Đức</h3>
          <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-4">
            Kỹ Sư Tự Động Hóa & Người sáng lập DBI Project
          </h4>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Với gần 4 năm kinh nghiệm và hơn 40 dự án lớn nhỏ trong lĩnh vực tự động hóa và phát triển phần mềm, 
            tôi nhận thấy nhu cầu kết nối dữ liệu trong công nghiệp là rất lớn nhưng các giải pháp hiện tại thường 
            có chi phí cao, cài đặt khó. Dự án DBI ra đời từ chính đam mê và mong muốn đóng góp một công cụ hữu ích, 
            giúp các kỹ sư, nhà máy có thể dễ dàng tiếp cận công nghệ IIoT mà không phải lo lắng về chi phí, cài đặt phức tạp.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
