import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-construction-dark text-white shadow-construction-lg border-b-4 border-accent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-construction-dark">🏗️</span>
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                Hien Strong Tie
              </Link>
              <p className="text-sm text-gray-300">Vật liệu xây dựng chuyên nghiệp</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors font-medium relative group">
              Trang chủ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products" className="text-white hover:text-accent transition-colors font-medium relative group">
              Sản phẩm
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/quotation" className="text-white hover:text-accent transition-colors font-medium relative group">
              Báo giá
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-white hover:text-accent transition-colors font-medium relative group">
              Dự án
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors font-medium relative group">
              Về chúng tôi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors font-medium relative group">
              Liên hệ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <div className="text-sm text-gray-300">Hotline tư vấn</div>
              <a href="tel:0123456789" className="text-accent font-semibold hover:text-amber-400 transition-colors">
                0123 456 789
              </a>
            </div>
            <a href="/quotation" className="construction-btn-secondary text-sm px-4 py-2">
              Yêu cầu báo giá
            </a>
            <button className="lg:hidden text-accent text-2xl">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
}
