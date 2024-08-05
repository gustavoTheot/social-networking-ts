import jwt from 'jsonwebtoken'
import { UserAuthenticate } from '../dto/usersDto'
import { env } from '@/env'

interface UserToken {
    userId: string,
    name?: string
    email?: string
    //role: Role[]
}

export function generateToken(user: UserAuthenticate) {
    const userJwtInfo: UserToken = { userId: user.id, name: user.name, email: user.email }
    return jwt.sign(userJwtInfo, env.SECRET ?? "test", { expiresIn: '2h' })
}

export function verifyToken(token: string) {
    return jwt.verify(token, env.SECRET ?? "test") as UserAuthenticate
}

export function generateRefreshToken(user: UserAuthenticate) {
    const userJwtInfo: UserToken = { userId: user.id, name: user.name, email: user.email }
    return jwt.sign(userJwtInfo, env.REFRESH_TOKEN, { expiresIn: '1d' })
}

export function verifyRefreshToken(token: string) {
    return jwt.verify(token, env.SECRET ?? "test") as UserAuthenticate
}