import loginApi from '@/api/login-api';
import { IUserDetails } from '@/models/api/login-api';
import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface AuthState {
    user: IUserDetails | null;
    setUser: (user: IUserDetails) => void;
    clearUser: () => void;
    refreshToken: () => Promise<void>;
}

type AuthStorePersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const useAuthStore = create<AuthState>(
    (persist as AuthStorePersist)(
        (set, get) => ({
            user: null,
            setUser: (user: IUserDetails) => set({ user }),
            clearUser: () => set({ user: null }),
            refreshToken: async () => {
                const user = get().user;
                if (user) {
                    try {
                        const response = await loginApi.refreshToken(user.refreshToken);
                        set({ user: { ...user, ...response } });
                    } catch (error) {
                        console.error('Failed to refresh token:', error);
                    }
                }
            },
        }),
        {
            name: 'auth-storage', // Key name in local storage
        }
    )
);

export default useAuthStore;