import React from 'react';
import { Link } from 'react-router-dom';

function DeltaDocs() {
  return (
    <section className="fade-in max-w-6xl mx-auto">
      <div className="mb-6">
        <Link
          to="/#/libraries"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại Thư viện
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          <svg className="w-12 h-12 inline-block mr-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          Tài liệu DBI.Drivers.Delta.PLC v1.0.0
        </h1>

        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Tổng quan</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              DBI.Drivers.Delta.PLC là thư viện .NET mạnh mẽ cung cấp driver giao tiếp với PLC Delta DVP series thông qua giao thức Modbus.
              Thư viện được xây dựng dựa trên DBI.Drivers.Modbus, cung cấp API thân thiện để đọc/ghi dữ liệu PLC theo vùng nhớ (D, M, X, Y, S, C, T…).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Modbus TCP/IP</h3>
                <p className="text-sm text-green-700 dark:text-green-300">Giao tiếp qua mạng Ethernet</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Modbus ASCII</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">Serial Port với định dạng ASCII</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Delta DVP Series</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">Tương thích với PLC Delta DVP</p>
              </div>
            </div>
          </div>

          {/* Installation */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Cài đặt</h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium mb-2">Thêm project tham chiếu:</h3>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 mb-4">
                <li>• DBI.Drivers.Modbus</li>
                <li>• DBI.Drivers.Delta.PLC</li>
              </ul>
              <h3 className="font-medium mb-2">Import namespace:</h3>
              <pre className="text-sm bg-gray-800 dark:bg-gray-900 text-green-400 p-3 rounded">
{`using DBI.Drivers.Delta.PLC;
using DBI.Drivers.Delta.PLC.Interfaces;`}
              </pre>
            </div>
          </div>

          {/* Connection Types */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Khởi tạo kết nối</h2>

            <div className="space-y-6">
              {/* TCP */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">1. Modbus TCP</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`var plc = new DeltaClient("192.168.1.10", 502, DeltaConnectionType.Tcp);
plc.Connect();`}
                  </pre>
                </div>
              </div>

              {/* ASCII */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">2. Modbus ASCII (Serial)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`var plc = new DeltaClient("COM3", 9600, DeltaConnectionType.Ascii);
plc.Connect();`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <em>Lưu ý: Modbus RTU sẽ được hỗ trợ trong phiên bản tiếp theo</em>
                </p>
              </div>

              {/* Auto Reconnect */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">3. Tính năng AutoReconnect</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`plc.AutoReconnect = true;
plc.ReconnectInterval = 5000; // thử lại mỗi 5s
plc.MaxRetry = -1;            // -1 = retry vô hạn`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Khi bật AutoReconnect, thư viện sẽ tự động thử kết nối lại nếu PLC bị ngắt.
                </p>
              </div>
            </div>
          </div>

          {/* API Examples */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ví dụ sử dụng</h2>

            <div className="space-y-6">
              {/* Word Register */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">1. Word (D Register)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`short[] d100 = plc.ReadD(100, 5);        // đọc D100 ~ D104
plc.WriteD(200, new short[] { 123, 456 });`}
                  </pre>
                </div>
              </div>

              {/* DINT */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">2. DINT (Double Word)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`int v = plc.ReadDInt(300);               // đọc D300-D301
plc.WriteDInt(400, 123456);`}
                  </pre>
                </div>
              </div>

              {/* Float */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">3. Float (REAL)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`float f = plc.ReadFloat(700);            // đọc D700-D701
plc.WriteFloat(710, 3.14159f);`}
                  </pre>
                </div>
              </div>

              {/* Coil */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">4. Coil (M, Y, S)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`bool[] m0 = plc.ReadM(0, 8);             // đọc M0 ~ M7
plc.WriteM(10, new bool[] { true, false, true });

bool[] y0 = plc.ReadY(0, 4);             // đọc Y0 ~ Y3
plc.WriteY(5, new bool[] { true, true });`}
                  </pre>
                </div>
              </div>

              {/* Input */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">5. Input (X)</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`bool[] x0 = plc.ReadX(0, 8);             // đọc X0 ~ X7`}
                  </pre>
                </div>
              </div>

              {/* Counter & Timer */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">6. Counter & Timer</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`short[] c0 = plc.ReadC(0, 5);            // giá trị Counter
bool[] cStatus = plc.ReadCStatus(0, 8);  // trạng thái Counter

short[] t0 = plc.ReadT(0, 3);            // giá trị Timer
bool[] tStatus = plc.ReadTStatus(0, 4);  // trạng thái Timer`}
                  </pre>
                </div>
              </div>

              {/* BCD */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">7. BCD</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`int bcd = plc.ReadBCD(1000);             // đọc D1000 dạng BCD
plc.WriteBCD(1010, 1234);                // ghi số 1234`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Generic API */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Generic API</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Có thể đọc/ghi trực tiếp bằng địa chỉ chuỗi:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`var d100 = plc.Read("D100");             // 1 word
var d200 = (short[])plc.Read("D200", 10);

var dint = (int)plc.Read("DI300");       // DINT
plc.Write("DI400", 123456);

var real = (float)plc.Read("R500");      // REAL
plc.Write("R600", 3.14f);

var m10 = (bool[])plc.Read("M10", 8);   // M10~M17
plc.Write("M20", new bool[] { true, false, true });`}
              </pre>
            </div>
          </div>

          {/* Console App Example */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ví dụ Console Application</h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`using System;
using DBI.Drivers.Delta.PLC;

class Program
{
    static void Main()
    {
        try
        {
            // Kết nối PLC Delta qua TCP
            var plc = new DeltaClient("192.168.1.10", 502, DeltaConnectionType.Tcp);
            plc.AutoReconnect = true;
            plc.Connect();

            // Đọc D register
            var d100 = plc.ReadD(100, 1);
            Console.WriteLine($"D100 = {d100[0]}");

            // Ghi D register
            plc.WriteD(101, new short[] { 123 });
            Console.WriteLine("Đã ghi D101 = 123");

            // Đọc DINT
            int dint = plc.ReadDInt(200);
            Console.WriteLine($"D200-D201 (DINT) = {dint}");

            // Đọc REAL
            float real = plc.ReadFloat(300);
            Console.WriteLine($"D300-D301 (REAL) = {real}");

            // Đọc X input
            var x0 = plc.ReadX(0, 8);
            Console.WriteLine("X0..X7 = " + string.Join(",", x0));

            // Ghi coil M
            plc.WriteM(10, new bool[] { true, false, true });
            Console.WriteLine("Đã ghi M10..M12");

            // Dùng Generic API
            var val = plc.Read("D400");
            Console.WriteLine($"Generic Read D400 = {val}");

            plc.Write("D401", (short)999);
            Console.WriteLine("Generic Write D401 = 999");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Lỗi: " + ex.Message);
        }
    }
}`}
              </pre>
            </div>
          </div>

          {/* API Reference */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">API Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Phương thức</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">Connect()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Thiết lập kết nối với PLC</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">Disconnect()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ngắt kết nối</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadD()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc D register (Word)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteD()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi D register (Word)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadDInt()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc DINT (Double Word)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteDInt()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi DINT (Double Word)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadFloat()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc Float (REAL)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteFloat()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi Float (REAL)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadM()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc coil M</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteM()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi coil M</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadX()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc input X</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadY()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc output Y</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteY()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi output Y</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadC()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc Counter</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadT()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc Timer</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">ReadBCD()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Đọc BCD</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono text-sm">WriteBCD()</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Ghi BCD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Yêu cầu hệ thống</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>.NET:</strong> .NET 8.0 hoặc cao hơn</li>
                <li>• <strong>Dependencies:</strong> DBI.Drivers.Modbus, System.IO.Ports</li>
                <li>• <strong>PLC Support:</strong> Delta DVP Series</li>
                <li>• <strong>Protocol:</strong> Modbus TCP/IP, Modbus ASCII</li>
                <li>• <strong>License:</strong> MIT License</li>
              </ul>
            </div>
          </div>

          {/* Notes */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ghi chú</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <ul className="text-sm space-y-2 text-yellow-800 dark:text-yellow-200">
                <li>• Địa chỉ bắt đầu từ <strong>0</strong> (ví dụ D0, M0, X0)</li>
                <li>• <code>DeltaAddressMap</code> ánh xạ vùng nhớ PLC sang địa chỉ Modbus</li>
                <li>• Khi đọc mảng DINT/REAL phải nhân hệ số 2 vì mỗi biến chiếm 2 word</li>
                <li>• Nếu bật <code>AutoReconnect</code>, thư viện chạy ngầm task retry</li>
                <li>• Modbus RTU sẽ được hỗ trợ trong phiên bản tiếp theo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeltaDocs;