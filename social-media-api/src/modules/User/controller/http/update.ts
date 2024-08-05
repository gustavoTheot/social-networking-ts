import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod";
import { Params } from "../../dto/Params";
import { UserRepository } from "../../repository/UserRepository";

const UserBodySchema = z.object({
    user: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        password: z.string().optional(),
        nick_name: z.string().optional(),
    }),
})

export async function UpdateUser(request: FastifyRequest, reply: FastifyReply) {
    const userRespository = new UserRepository();
    const { id } = request.params as Params

    const { user } = UserBodySchema.parse(request.body)

    try {
        await userRespository.updateUser(id, user);
        return reply.status(200).send({ message: "Success" })
    }
    catch (error) {
        reply.code(500).send({ message: "Internal Server Error" })
    }
}