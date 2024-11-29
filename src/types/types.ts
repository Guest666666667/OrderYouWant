// types.ts
export interface MenuItem {
    title: string;
    id: number;
    description: string;
    price: string;
    originalPrice: string;
    tags: string[];
    quantity: number;
    image: string;
    orderNum: number;
  }
  
  export interface Category {
    name: string;
    id: number;
    items: MenuItem[];
  }

  export interface OrderInfo { 
    items: MenuItem[]; 
    totalAmount: number; 
  }
  