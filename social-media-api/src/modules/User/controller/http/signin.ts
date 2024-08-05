import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { compare } from "bcrypt";
import { generateRefreshToken, generateToken } from "../../utils/auth";
import { UserRepository } from "../../repository/UserRepository";

const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export async function Signin(request: FastifyRequest, reply: FastifyReply) {
    const userRepository = new UserRepository()

    try {
        const { email, password } = SigninSchema.parse(request.body)

        const userExist = await userRepository.findUserByEmail(email)

        if (!userExist) {
            throw new Error("Email or password incorrect")
        }

        const passwordMatch = await compare(password, userExist.password || '')

        if (!passwordMatch) {
            throw new Error("Email or password incorrect")
        }

        const token = generateToken({ id: userExist.id, name: userExist.name ?? '', email: userExist.email ?? '' })
        const refreshToken = generateRefreshToken({ id: userExist.id, name: userExist.name ?? '', email: userExist.email ?? '' })
        reply.setCookie('refreshToken', refreshToken, {
            path: '/', // quais rotas vão ter acesso
            secure: true, // está utilizando https?
            sameSite: true, // só é acessivel dentro do mesmo dominio
            httpOnly: true // acessado pelo back e n pelo front
        })

        reply.status(200).send({ token })

    } catch (error) {
        reply.code(500).send({ message: "Error logged in" })
    }
}