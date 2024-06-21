
import { IUserDetails, LoginRequest } from '@/models/api/login-api'
import axios from 'axios'

const loginApi = {
  login(data: LoginRequest): Promise<IUserDetails> {
    const url = '/auth/login'
    return axios.post(url, data)
  },

  refreshToken(refreshToken: string): Promise<IUserDetails> {
    const config = {
      headers: { 'refresh-token': refreshToken },
    }
    const url = '/auth/refresh-token/'
    return axios.post(url, {}, config)
  },
}

export default loginApi
