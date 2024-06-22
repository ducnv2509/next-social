export const BASE_URL = process.env.NEXT_PUBLIC_BACK_END_DOMAIN

export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,

    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,

    INTERNAL_SERVER = 500,
}
