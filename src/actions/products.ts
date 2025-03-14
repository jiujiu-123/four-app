'use server'

import db from "@/lib/db"
import { APIResponse, Product } from "@/Types/global"

// 获取商品信息
export const productsAction = async (): Promise<APIResponse<Product[]>> => {
  const res = await db('select * from products')
  return {
    status: 200,
    body: '获取商品信息成功',
    data: res
  } as APIResponse<Product[]>
}

// 根据id获取商品详细信息
export const productAction = async (id: number): Promise<APIResponse<Product>> => {
  const res = await db(`select * from products where id = ${id}`)
  return {
    status: 200,
    body: '获取商品信息成功',
    data: res[0]
  } as APIResponse<Product>
}