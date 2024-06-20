import loginApi from '@/api/login-api'
import { useLogoutNavigate } from '@/hooks/useLogout'
import { IUserDetails } from '@/models/api/login-api'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export const authKeys = {
  getAccessToken: () => ['getAccessToken'] as const,
  getUserDetail: () => ['getUserDetail'] as const,
}

export function useGetAccessToken() {
  const logoutNavigate = useLogoutNavigate()
  return useQuery(authKeys.getAccessToken(), () => loginApi.refreshToken((JSON.parse(localStorage.getItem('next-oa-userInfo')!) as IUserDetails).refreshToken), {
    // bc of active refetch, make this query fresh so it does not auto refetch
    staleTime: Infinity,
    // Whenever refreshToken API returns an error, log out immediately
    onError: (err) => {
      toast.error('Failed when calling Refresh Token API')
      logoutNavigate()
    },
    // onSuccess: (data) => console.log(data),
    // enable to make sure that local storage have data when refetch
    enabled: typeof window !== 'undefined' && localStorage.getItem('next-oa-userInfo') !== null,
    // refetch every 57 minutes / 2
    refetchInterval: 3420000 / 2,
    // (data) => {
    //   if (data !== undefined && data.accessToken !== '') {
    //     const decoded = jwt_decode<AccessTokenDecoded>(data.accessToken)
    //     const remainingTime = decoded.exp * 1000 - Date.now() - 3000
    //     return remainingTime
    //   }
    //   return false
    // }
    refetchIntervalInBackground: true,
    retry: false,
    // Always take UserDetail data from Local Storage
  })
}

export function useGetUserDetail() {
  return useQuery(
    authKeys.getUserDetail(),
    () =>
      // Just place holder code. This Promise will never be called
      Promise.resolve({
        accessToken: '',
        refreshToken: '',
        email: '',
        name: '',
        roles: ''
      } as unknown as IUserDetails),
    {
      // Does not refetch ever!
      enabled: false,
      // Always take UserDetail data from Local Storage
      initialData:
        typeof window !== 'undefined' && localStorage.getItem('next-oa-userInfo')
          ? (JSON.parse(localStorage.getItem('next-oa-userInfo')!) as IUserDetails) // eslint-disable-line
          : ({
            accessToken: '',
            refreshToken: '',
            email: '',
            name: '',
          } as unknown as IUserDetails),
    }
  )
}
