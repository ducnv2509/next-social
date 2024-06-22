// Trong file `_app.tsx`

import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/zustand/authStore';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const user = useAuthStore(state => state.user);

    useEffect(() => {
        // Kiểm tra nếu không có người dùng đã xác thực và đang truy cập vào trang yêu cầu xác thực
        if (!user && router.pathname.startsWith('/dashboard')) {
            router.push('/login'); // Điều hướng đến trang login
        }
    }, [user, router]);

    return <Component {...pageProps} />;
}

export default MyApp;
