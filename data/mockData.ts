export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  features: string[];
  image: string; // placeholder URL
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  materials: string[];
}

export const categories: Category[] = [
  {
    id: 'go',
    name: 'Vật liệu gỗ',
    description: 'Gỗ chất lượng cao cho công trình xây dựng.'
  },
  {
    id: 'thep',
    name: 'Vật liệu thép',
    description: 'Thép bền vững cho các ứng dụng nặng.'
  },
  {
    id: 'betong',
    name: 'Vật liệu bê tông',
    description: 'Giải pháp bê tông đáng tin cậy.'
  },
  {
    id: 'bulong',
    name: 'Bu lông & Phụ kiện',
    description: 'Bu lông và phụ kiện cần thiết để lắp ráp.'
  }
];

export const products: Product[] = [
  {
    id: 'dam-go',
    name: 'Đà gỗ',
    categoryId: 'go',
    description: 'Đà gỗ mạnh mẽ và linh hoạt để hỗ trợ cấu trúc.',
    features: ['Độ bền cao', 'Bền vững', 'Dễ lắp đặt'],
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop'
  },
  {
    id: 'tam-thep',
    name: 'Tấm thép',
    categoryId: 'thep',
    description: 'Tấm thép dày cho ứng dụng nặng.',
    features: ['Chống gỉ sét', 'Độ bền kéo cao', 'Linh hoạt'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'
  },
  {
    id: 'gach-betong',
    name: 'Gạch bê tông',
    categoryId: 'betong',
    description: 'Gạch bê tông tiêu chuẩn cho tường và móng.',
    features: ['Chống thời tiết', 'Hiệu quả về chi phí', 'Cách nhiệt'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop'
  },
  {
    id: 'bo-vit',
    name: 'Bộ vít',
    categoryId: 'bulong',
    description: 'Bộ vít đa dạng cho các nhu cầu gắn kết.',
    features: ['Chống gỉ', 'Kích thước đa dạng', 'Chất lượng cao'],
    image: 'https://images.unsplash.com/photo-1582017159150-e129d07cdfdf?w=600&h=400&fit=crop'
  }
];

export const projects: Project[] = [
  {
    id: 'duan1',
    name: 'Tòa nhà dân dụng A',
    description: 'Cung cấp gỗ và thép cho khu phức hợp dân dụng hiện đại.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
    materials: ['Đà gỗ', 'Tấm thép', 'Gạch bê tông']
  },
  {
    id: 'duan2',
    name: 'Tòa tháp thương mại B',
    description: 'Cung cấp bu lông và bê tông cho tòa nhà cao tầng.',
    image: 'https://images.unsplash.com/photo-1486738550801-6c0fa4ae96d1?w=600&h=400&fit=crop',
    materials: ['Gạch bê tông', 'Bộ vít', 'Tấm thép']
  }
];