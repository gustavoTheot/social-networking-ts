import { UserCreate } from "../../interfaces/User/userCreate"
import { api } from "../axios"

export async function signin(email: string, password: string) {
    return await api.post('/user/login', {
        email, password
    })
}

export async function list(token: string) {
    return await api.get('/user/list', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export async function create(user: UserCreate) {
    return await api.post('/user/create', {
        name: user.name,
        password: user.password,
        email: user.email,
        nick_name: user.nick_name
    })
}

export const userApi = {
    create,
    signin,
    list,
} 