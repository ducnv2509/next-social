
import { BASE_URL } from '@/config'
import { IUserDetails, LoginRequest } from '@/models/api/login-api'
import axios from 'axios'

const loginApi = {
  login(data: LoginRequest): Promise<IUserDetails> {
    return axios.post(`${BASE_URL}/auth/login`, data)
  },

  refreshToken(refreshToken: string): Promise<IUserDetails> {
    const config = {
      headers: { 'refresh-token': refreshToken },
    }
    return axios.post(`${BASE_URL}/auth/refresh-token/`, {}, config)
  },
}

export default loginApi
