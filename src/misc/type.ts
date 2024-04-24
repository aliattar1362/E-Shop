export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty?: number;
  rating: {
    rate: number;
    count: number;
    initialCount?: number;
  };
}

export interface UserRegisterType {
  email: string;
  password: string;
  name: string;
  avatar: string;
}

// enum type
enum UserRole {
  Customer = "customer",
  Admin = "admin",
}

export interface UserType extends UserRegisterType {
  role: UserRole;
  id: number;
}

export interface TokenType {
  access_token: string;
  refresh_token: string;
}

export interface FormData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ValidationErrors {
  fname?: string;
  lname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface Pagination {
  products: ProductType[];
  hasMore: boolean;
}
