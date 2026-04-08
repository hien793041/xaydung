import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, categories } from '../../../../data/mockData';

interface PageProps {
  params: {
    categoryId: string;
    productId: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(p => p.id === params.productId && p.categoryId === params.categoryId);
  if (!product) {
    notFound();
  }

  const category = categories.find(c => c.id === params.categoryId);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500">Hình ảnh sản phẩm lớn</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Ảnh {i}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Tính năng nổi bật</h2>
          <ul className="list-disc list-inside mb-8 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Liên hệ để nhận báo giá</h3>
            <p className="text-gray-600 mb-4">
              Giá cả phụ thuộc vào số lượng và yêu cầu cụ thể. Hãy liên hệ với chúng tôi để nhận báo giá chi tiết.
            </p>
            <Link href="/quotation" className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded text-white font-semibold">
              Yêu cầu báo giá
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            Danh mục: <Link href={`/products/${category?.id}`} className="text-blue-600 hover:text-blue-800">{category?.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}