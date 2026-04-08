import Link from 'next/link';
import { categories, products } from '../data/mockData';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vật liệu xây dựng<br /><span className="text-orange-400">chất lượng cao</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
            Hien Strong Tie cung cấp gỗ, thép, bê tông và bu lông cho mọi công trình của bạn.
          </p>
          <Link href="/quotation" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            Yêu cầu báo giá ngay →
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sản phẩm nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Hình ảnh sản phẩm</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={`/products/${product.categoryId}/${product.id}`} className="text-blue-600 hover:text-blue-800">
                  Xem chi tiết
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Cần tư vấn vật liệu xây dựng?</h2>
          <p className="text-xl mb-8">
            Liên hệ với chúng tôi để nhận báo giá tốt nhất cho dự án của bạn.
          </p>
          <Link href="/contact" className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg text-xl font-semibold">
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
