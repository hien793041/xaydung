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
    image: '/images/dam-go.jpg'
  },
  {
    id: 'tam-thep',
    name: 'Tấm thép',
    categoryId: 'thep',
    description: 'Tấm thép dày cho ứng dụng nặng.',
    features: ['Chống gỉ sét', 'Độ bền kéo cao', 'Linh hoạt'],
    image: '/images/tam-thep.jpg'
  },
  {
    id: 'gach-betong',
    name: 'Gạch bê tông',
    categoryId: 'betong',
    description: 'Gạch bê tông tiêu chuẩn cho tường và móng.',
    features: ['Chống thời tiết', 'Hiệu quả về chi phí', 'Cách nhiệt'],
    image: '/images/gach-betong.jpg'
  },
  {
    id: 'bo-vit',
    name: 'Bộ vít',
    categoryId: 'bulong',
    description: 'Bộ vít đa dạng cho các nhu cầu gắn kết.',
    features: ['Chống gỉ', 'Kích thước đa dạng', 'Chất lượng cao'],
    image: '/images/bo-vit.jpg'
  }
];

export const projects: Project[] = [
  {
    id: 'duan1',
    name: 'Tòa nhà dân dụng A',
    description: 'Cung cấp gỗ và thép cho khu phức hợp dân dụng hiện đại.',
    image: '/images/duan1.jpg',
    materials: ['Đà gỗ', 'Tấm thép', 'Gạch bê tông']
  },
  {
    id: 'duan2',
    name: 'Tòa tháp thương mại B',
    description: 'Cung cấp bu lông và bê tông cho tòa nhà cao tầng.',
    image: '/images/duan2.jpg',
    materials: ['Gạch bê tông', 'Bộ vít', 'Tấm thép']
  }
];