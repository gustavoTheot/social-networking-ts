import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { hash } from 'bcrypt'
import { UserRepository } from "../../repository/UserRepository";

const UserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    nick_name: z.string(),
    followers: z.number().optional(),
    following: z.number().optional(),
})


export async function CreateUser(request: FastifyRequest, reply: FastifyReply) {
    const userRespository = new UserRepository();

    const { name, email, password, nick_name, followers, following } = UserBodySchema.parse(request.body)

    try {
        // body
        const user = await userRespository.findUserByEmail(email)
        const userNick = await userRespository.findUserByNickName(nick_name)

        const passwordHash = await hash(password, 6)

        if (user) {
            throw new Error("Email already exists")
        }

        if (userNick.length !== 0) {
            throw new Error("Nick name already exists")
        }

        const newUser = await userRespository.createUser({
            name,
            email,
            password: passwordHash,
            nick_name,
            followers,
            following,
        });

        reply.status(201).send(newUser)
    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}