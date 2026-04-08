import Link from 'next/link';
import { categories, products } from '../data/mockData';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-construction-dark via-primary to-secondary text-white py-32 overflow-hidden">
        {/* Construction background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent rounded-lg transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-accent rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent rounded transform rotate-12"></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-accent transform -rotate-45"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Trust badges */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="trust-badge">10+ Năm Kinh Nghiệm</div>
              <div className="trust-badge">Chứng Nhận ISO 9001</div>
              <div className="trust-badge">1000+ Dự Án Hoàn Thành</div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Vật Liệu Xây Dựng<br />
              <span className="text-accent">Chuyên Nghiệp & Đáng Tin Cậy</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Hien Strong Tie - Đối tác tin cậy cung cấp gỗ, thép, bê tông và phụ kiện xây dựng
              chất lượng cao cho mọi công trình. Cam kết về chất lượng, giá cả cạnh tranh và dịch vụ chuyên nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/quotation" className="construction-btn text-lg px-8 py-4">
                📋 Yêu cầu báo giá ngay
              </Link>
              <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                🏗️ Xem sản phẩm
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-gray-300">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-gray-300">Dự án hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-300">Đối tác chiến lược</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-gray-300">Hỗ trợ kỹ thuật</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 industrial-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-construction-dark mb-4">Danh Mục Sản Phẩm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các loại vật liệu xây dựng chất lượng cao của chúng tôi,
              được thiết kế để đáp ứng mọi nhu cầu của dự án xây dựng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/products/${category.id}`} className="construction-card group">
                <div className="p-8 text-center">
                  {/* Category icons */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">
                      {index === 0 && '🪵'}
                      {index === 1 && '🔧'}
                      {index === 2 && '🧱'}
                      {index === 3 && '⚙️'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-construction-dark mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-primary font-semibold group-hover:text-accent transition-colors">
                    Khám phá →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-construction-dark mb-4">Sản Phẩm Nổi Bật</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những sản phẩm chất lượng cao được tin dùng nhất trong các dự án xây dựng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="construction-card group overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-dark mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href={`/products/${product.categoryId}/${product.id}`} className="text-primary font-semibold hover:text-accent transition-colors">
                      Chi tiết sản phẩm →
                    </Link>
                    <div className="text-sm text-gray-500">Liên hệ báo giá</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="construction-btn">
              🏗️ Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Bắt Đầu Dự Án Của Bạn?</h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và cung cấp giải pháp vật liệu xây dựng
              tối ưu cho mọi quy mô dự án. Liên hệ ngay để nhận báo giá chi tiết và hỗ trợ chuyên nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/quotation" className="construction-btn-secondary text-lg px-8 py-4">
                📋 Yêu cầu báo giá miễn phí
              </Link>
              <a href="tel:0123456789" className="border-2 border-white text-white hover:bg-white hover:text-construction-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                📞 Gọi ngay: 0123 456 789
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Tư vấn nhanh chóng</h3>
                <p className="text-sm text-gray-300">Phản hồi trong 24h</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="font-semibold mb-2">Giao hàng tận nơi</h3>
                <p className="text-sm text-gray-300">Toàn quốc</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">Bảo hành chất lượng</h3>
                <p className="text-sm text-gray-300">Đầy đủ & dài hạn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
