import { FastifyRequest, FastifyReply } from "fastify"
import { UserRepository } from "../../repository/UserRepository";
import { Params } from "../../dto/Params";


export async function DeleteUser(request: FastifyRequest, reply: FastifyReply) {
    const userRespository = new UserRepository();
    const { id } = request.params as Params

    try {
        const deletedUser = await userRespository.deleteUser(id);
        if (!deletedUser) {
            return reply.status(404).send({ message: 'User does not exist.' });
        }
        return reply.status(200).send()
    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}