import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg border-b-4 border-orange-500">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent hover:from-orange-300 hover:to-orange-400 transition-all">
          Hien Strong Tie
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Trang chủ</Link>
          <Link href="/products" className="hover:text-orange-400 transition-colors font-medium">Sản phẩm</Link>
          <Link href="/quotation" className="hover:text-orange-400 transition-colors font-medium">Yêu cầu báo giá</Link>
          <Link href="/projects" className="hover:text-orange-400 transition-colors font-medium">Dự án</Link>
          <Link href="/about" className="hover:text-orange-400 transition-colors font-medium">Về chúng tôi</Link>
          <Link href="/contact" className="hover:text-orange-400 transition-colors font-medium">Liên hệ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:0123456789" className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all">
            Hotline: 0123 456 789
          </a>
          <button className="md:hidden text-orange-400">☰</button>
        </div>
      </div>
    </header>
  );
}
