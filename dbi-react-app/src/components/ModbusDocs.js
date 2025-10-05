import React from 'react';
import { Link } from 'react-router-dom';

function ModbusDocs() {
  return (
    <section className="fade-in">
      <div className="mb-8">
        <Link
          to="/libraries"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại Thư viện
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          <svg className="w-10 h-10 inline-block mr-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Tài liệu DBI.Modbus v1.2.0
        </h1>

        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tổng quan</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              DBI.Drivers.Modbus là một thư viện .NET mạnh mẽ và linh hoạt được thiết kế để triển khai giao thức Modbus Master.
              Thư viện hỗ trợ nhiều phương thức kết nối khác nhau bao gồm TCP/IP, Serial Port và ASCII, cung cấp một giải pháp toàn diện cho việc giao tiếp với các thiết bị Modbus trong môi trường công nghiệp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Modbus TCP/IP</h3>
                <p className="text-green-700 dark:text-green-300">Giao tiếp qua mạng Ethernet với protocol TCP/IP chuẩn.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Modbus ASCII</h3>
                <p className="text-blue-700 dark:text-blue-300">Serial Port với định dạng ASCII, dễ debug và monitor.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Modbus RTU</h3>
                <p className="text-purple-700 dark:text-purple-300">Serial Port với RTU protocol, hiệu quả và phổ biến.</p>
              </div>
            </div>
          </div>

          {/* Installation */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Cài đặt</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Package Manager Console:</h3>
                <code className="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded text-sm font-mono">
                  Install-Package DBI.Drivers.Modbus
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">.NET CLI:</h3>
                <code className="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded text-sm font-mono">
                  dotnet add package DBI.Drivers.Modbus
                </code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">PackageReference:</h3>
                <code className="block bg-gray-800 dark:bg-gray-900 text-green-400 p-4 rounded text-sm font-mono">
                  {`<PackageReference Include="DBI.Drivers.Modbus" Version="1.0.0" />`}
                </code>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ví dụ sử dụng</h2>

            {/* TCP Example */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">1. Modbus TCP Master</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`using DBI.Drivers.Modbus.TCP;

// Khởi tạo TCP Master
var tcpMaster = new ModbusTCPMaster("192.168.1.100", 502);

// Kết nối
tcpMaster.Connection();

// Đọc Holding Registers
byte[] data = tcpMaster.ReadHoldingRegisters(1, 0, 10);

// Ghi Single Register
byte[] writeData = { 0x12, 0x34 };
tcpMaster.WriteSingleRegister(1, 0, writeData);

// Ngắt kết nối
tcpMaster.Disconnection();`}
                </pre>
              </div>
            </div>

            {/* ASCII Example */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">2. Modbus ASCII Master</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`using DBI.Drivers.Modbus.ASCII;
using System.IO.Ports;

// Khởi tạo ASCII Master
var asciiMaster = new ModbusASCIIMaster("COM1", 9600, Parity.None, 8, StopBits.One);

// Kết nối
asciiMaster.Connection();

// Đọc Coil Status
byte[] coilStatus = asciiMaster.ReadCoilStatus(1, 0, 16);

// Ghi Multiple Coils
byte[] coilValues = { 0xFF, 0x00 };
asciiMaster.WriteMultipleCoils(1, 0, coilValues);

// Ngắt kết nối
asciiMaster.Disconnection();`}
                </pre>
              </div>
            </div>

            {/* Event Handling */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-700 dark:text-gray-300">3. Xử lý sự kiện kết nối</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`// Đăng ký event handler
tcpMaster.ConnectionStateChanged += (status) => {
    Console.WriteLine($"Connection status: {status}");
};

// Hoặc sử dụng lambda expression
tcpMaster.ConnectionStateChanged += (status) =>
{
    if (status == ConnectionStatus.Connected)
    {
        Console.WriteLine("Successfully connected to Modbus device");
    }
    else
    {
        Console.WriteLine("Connection lost");
    }
};`}
                </pre>
              </div>
            </div>
          </div>

          {/* Function Codes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Function Codes hỗ trợ</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">Đọc dữ liệu:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">01</span>
                    <div>
                      <strong>Read Coil Status</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Đọc trạng thái các coil (output relays)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">02</span>
                    <div>
                      <strong>Read Input Status</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Đọc trạng thái các input (input relays)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">03</span>
                    <div>
                      <strong>Read Holding Registers</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Đọc các holding registers (đọc/ghi)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">04</span>
                    <div>
                      <strong>Read Input Registers</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Đọc các input registers (chỉ đọc)</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">Ghi dữ liệu:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">05</span>
                    <div>
                      <strong>Write Single Coil</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ghi trạng thái một coil</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">15</span>
                    <div>
                      <strong>Write Multiple Coils</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ghi trạng thái nhiều coils</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">06</span>
                    <div>
                      <strong>Write Single Register</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ghi giá trị một register</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono mr-3 mt-0.5">16</span>
                    <div>
                      <strong>Write Multiple Registers</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ghi giá trị nhiều registers</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exception Handling */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Xử lý ngoại lệ</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Thư viện cung cấp các exception tùy chỉnh để xử lý các lỗi thường gặp trong giao tiếp Modbus:
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <pre className="text-sm text-red-800 dark:text-red-200 overflow-x-auto">
{`try
{
    byte[] data = master.ReadHoldingRegisters(1, 0, 10);
}
catch (IllegalDataAddressException ex)
{
    Console.WriteLine($"Invalid address: {ex.Message}");
    // Xử lý lỗi địa chỉ không hợp lệ
}
catch (IllegalFunctionException ex)
{
    Console.WriteLine($"Invalid function: {ex.Message}");
    // Xử lý lỗi function code không được hỗ trợ
}
catch (GatewayTargetDeviceFailedToRespondException ex)
{
    Console.WriteLine($"Device not responding: {ex.Message}");
    // Xử lý lỗi thiết bị không phản hồi
}
catch (ModbusException ex)
{
    Console.WriteLine($"Modbus error: {ex.Message}");
    // Xử lý các lỗi Modbus chung
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
    // Xử lý các lỗi không mong muốn
}`}
              </pre>
            </div>
          </div>

          {/* API Reference */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">API Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-4 text-left font-semibold">Phương thức</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-4 text-left font-semibold">Tham số</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-4 text-left font-semibold">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">Connection()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">-</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Thiết lập kết nối với thiết bị Modbus</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">Disconnection()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">-</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Ngắt kết nối với thiết bị</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">ReadCoilStatus()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, count</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Đọc trạng thái các coil (Function Code 01)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">ReadInputStatus()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, count</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Đọc trạng thái các input (Function Code 02)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">ReadHoldingRegisters()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, count</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Đọc holding registers (Function Code 03)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">ReadInputRegisters()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, count</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Đọc input registers (Function Code 04)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">WriteSingleCoil()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, address, value</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Ghi single coil (Function Code 05)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">WriteMultipleCoils()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, values</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Ghi multiple coils (Function Code 15)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">WriteSingleRegister()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, address, value</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Ghi single register (Function Code 06)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-4 font-mono text-sm">WriteMultipleRegisters()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">slaveId, startAddress, values</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4">Ghi multiple registers (Function Code 16)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Yêu cầu hệ thống</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>.NET:</strong> .NET 8.0 hoặc cao hơn
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Package:</strong> System.IO.Ports v9.0.8 (cho Serial communication)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>License:</strong> MIT License
                </li>
              </ul>
            </div>
          </div>

          {/* Download */}
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary-800 dark:text-primary-200">Tải xuống</h2>
            <p className="text-primary-700 dark:text-primary-300 mb-4">
              Tải phiên bản mới nhất của DBI.Modbus để bắt đầu phát triển ứng dụng của bạn.
            </p>
            <a
              href="https://drive.google.com/file/d/1jhdo81yVG_L2RthxU0uTqbVMv_l27-yd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Tải DBI.Modbus v1.2.0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModbusDocs;