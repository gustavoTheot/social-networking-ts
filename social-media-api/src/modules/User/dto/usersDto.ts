export interface UserInterface {
    id?: string
    reference_photo?: String
    name: string,
    email: string,
    password: string
    nick_name: string
    date_birth: Date
    id_followers?: number
    followers?: number
    id_following?: number
    following?: number
    deleted?: boolean
}

export interface UserAuthenticate {
    id: string,
    name?: string,
    email?: string,
    password?: string
}

export interface UserUpdateInterface {
    id?: string
    name?: string,
    email?: string,
    password?: string
    nick_name?: string
    id_followers?: number
    followers?: number
    id_following?: number
    following?: number
    deleted?: boolean
}

export interface UserBody {
    name: string;
    email: string;
    password: string;
    nick_name: string;
    followers: number;
    following: number;
}
