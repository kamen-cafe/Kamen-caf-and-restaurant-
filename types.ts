
export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  description?: string;
  image: string;
  category: string;
  options?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedOption?: string;
}

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
}
