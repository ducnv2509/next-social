export const logoutUser = () => {
    localStorage.removeItem('auth-storage');
    window.location.href = '/login'; // Redirect về trang đăng nhập
};