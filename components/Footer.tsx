import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hien Strong Tie</h3>
            <p>Chuyên cung cấp vật liệu xây dựng chất lượng cao cho mọi công trình.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Trang chủ</Link></li>
              <li><Link href="/products" className="hover:text-blue-400">Sản phẩm</Link></li>
              <li><Link href="/quotation" className="hover:text-blue-400">Yêu cầu báo giá</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400">Dự án</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">Về chúng tôi</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
            <p>Điện thoại: 0123 456 789</p>
            <p>Email: info@hienstrongtie.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 Hien Strong Tie. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
