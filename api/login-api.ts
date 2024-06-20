
import { IUserDetails, LoginRequest } from '@/models/api/login-api'
import axiosClient from './axios-client'

const loginApi = {
  login(data: LoginRequest): Promise<IUserDetails> {
    const url = '/auth/login'
    return axiosClient.post(url, data)
  },

  refreshToken(refreshToken: string): Promise<IUserDetails> {
    const config = {
      headers: { 'refresh-token': refreshToken },
    }
    const url = '/auth/refresh-token/'
    return axiosClient.post(url, {}, config)
  },
}

export default loginApi
