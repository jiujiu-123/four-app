

export type SortValue = 'latest' | 'low' | 'high'

// 接口统一格式
export interface APIResponse<T = any> {
  status: number;
  data?: T;
  body: string;
}

export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  variant: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selecVariant: string
}

export interface User {
  id: number
  name: string
  email: string
  token?: string;
}

export interface JwtData {
  name: string
  email: string
  userId: number
}
export type Address = {
  id: number
  name: string
  city: string
  address: string
  phone: string
  userid: number
}
export type NotAccountType = 'login' | 'register'