import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🏗️</span>
              <h3 className="text-2xl font-bold text-white">Hien Strong Tie</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nhà cung cấp vật liệu xây dựng uy tín hàng đầu Việt Nam.
              Chúng tôi cam kết mang đến chất lượng tốt nhất với giá cả cạnh tranh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-accent transition-colors">Sản phẩm</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-accent transition-colors">Dự án</Link></li>
              <li><Link href="/quotation" className="text-gray-300 hover:text-accent transition-colors">Báo giá</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">Về chúng tôi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liên hệ</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="mr-3 text-accent">📍</span>
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-accent">📞</span>
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-accent">✉️</span>
                <span>info@hienstrongtie.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-accent">🕒</span>
                <span>8:00 - 17:00 (Thứ 2 - Thứ 7)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hien Strong Tie. Tất cả quyền được bảo lưu.
            <span className="block mt-2 text-sm">
              Thiết kế bởi đội ngũ chuyên nghiệp với ❤️
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
