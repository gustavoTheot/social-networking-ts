import { FastifyRequest, FastifyReply } from "fastify"
import { UserRepository } from "../../repository/UserRepository";

export async function GetUsers(request: FastifyRequest, reply: FastifyReply) {
    const userRespository = new UserRepository();

    try {
        const users = await userRespository.getUsers();
        return reply.status(200).send({ users })
    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}