export type SortValue = 'latest' | 'low' | 'high'

// 接口统一格式
export interface APIResponse<T> {
  status: number;
  data: T;
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