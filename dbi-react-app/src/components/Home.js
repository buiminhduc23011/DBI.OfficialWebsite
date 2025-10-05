import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="fade-in text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Bridge Industrial (DBI)</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-6">
        Cầu nối dữ liệu cho Công nghiệp 4.0
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
        DBI là một dự án với sứ mệnh cung cấp các công cụ kết nối và thu thập dữ liệu công nghiệp một cách mạnh mẽ, linh hoạt với{' '}
        <span className="font-semibold">giá cả tối thiểu & lợi ích tối đa</span>. Mục tiêu của chúng tôi là phá vỡ rào cản chi phí, giúp mọi kỹ sư, nhà máy đều có thể tiếp cận công nghệ IIoT.
      </p>
      <Link 
        to="/ecosystem" 
        className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
      >
        Khám phá hệ sinh thái
      </Link>
    </section>
  );
}

export default Home;
