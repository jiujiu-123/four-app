'use server'
import db from "@/lib/db"
import { APIResponse, JwtData, User } from "@/Types/global"
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"
const TOKEN_KEYS = 'JCHing'
export const loginAction = async (email: string, password: string): Promise<APIResponse<User>> => {
  const res = await db(`select * from users where email = '${email}' and password = '${password}'`)
  const cookis = await cookies()
  if (res.length > 0) {
    const token = jwt.sign({
      email, name: res[0].name, userId: res[0].id
    }, TOKEN_KEYS, {
      expiresIn: '1h'
    })
    cookis.set({
      name: 'token',
      value: token,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })
    return {
      status: 200,
      body: 'login success',
      data: res[0]
    } as APIResponse<User>
  } else {
    return {
      status: 401,
      body: 'login fail',
      data: {}
    } as APIResponse<User>
  }
}

export const registerAction = async (email: string, name: string, password: string): Promise<APIResponse<User>> => {
  const res = await db(`select * from users where email = '${email}'`)
  if (res.length > 0) {
    return {
      status: 401,
      body: 'email already exists',
      data: {}
    } as APIResponse<User>
  }
  await db(`insert into users (email, name, password) values ($1, $2, $3)`, [email, name, password])
  return {
    status: 200,
    body: 'register success',
    data: {
      email,
      name,
    }
  } as APIResponse<User>
}

export const authAction = async (): Promise<APIResponse<JwtData>> => {
  const cookis = await cookies()
  const token = cookis.get('token')?.value
  if (!token) {
    return {
      status: 401,
      body: 'token not found',
      data: {}
    } as APIResponse<JwtData>
  }
  const user = jwt.verify(token, TOKEN_KEYS) as JwtData
  return {
    status: 200,
    body: 'auth success',
    data: user
  } as APIResponse<JwtData>

}

export const loginOutAction = async (): Promise<APIResponse> => {
  const cookis = await cookies()
  cookis.delete('token')
  return {
    status: 200,
    body: 'login out success',
  }
}
