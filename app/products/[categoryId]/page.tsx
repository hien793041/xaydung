import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, products } from '../../../data/mockData';

interface PageProps {
  params: {
    categoryId: string;
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = categories.find(c => c.id === params.categoryId);
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.categoryId === params.categoryId);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
      <p className="text-xl text-gray-600 mb-12">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">Hình ảnh sản phẩm</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <Link href={`/products/${params.categoryId}/${product.id}`} className="text-blue-600 hover:text-blue-800">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}