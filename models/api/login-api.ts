export interface IUserDetails {
    id: string,
    email: string,
    fullname: string,
    is_active: boolean,
    is_deleted: boolean,
    is_tenant: boolean,
    tenant: string,
    failed_login: number,
    roles: string[],
    icon: string,
    accessToken: string,
    refreshToken: string
}

export interface LoginRequest {
    email: string,
    password: string
}