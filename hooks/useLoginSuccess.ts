import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { authKeys } from './query/auth'
import { IUserDetails } from '@/models/api/login-api'

export const useLoginSuccess = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const onLoginSuccess = useCallback((data: IUserDetails) => {
    queryClient.clear()

    if (typeof window !== 'undefined') {
      localStorage.setItem('next-oa-userInfo', JSON.stringify(data))
      localStorage.setItem('next-oa-token', data.accessToken)
      localStorage.setItem(
        'next-oa-nextTimeRefresh',
        (new Date().getTime() + 50 * 60 * 1000).toString()
      )
    }
    queryClient.setQueryData(authKeys.getAccessToken(), data)
    router.push('/dashboard')
  }, [])

  return onLoginSuccess
}
