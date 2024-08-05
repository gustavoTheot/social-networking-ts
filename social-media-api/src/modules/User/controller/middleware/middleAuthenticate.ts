import { FastifyReply, FastifyRequest } from "fastify";
import { verifyToken } from "../../utils/auth";

export async function MiddleAuthenticate(request: FastifyRequest, reply: FastifyReply) {
    const token = request.headers.authorization?.split(' ')[1]

    if (!token) {
        return reply.status(401).send('Token does not exist')
    }
    try {
        await verifyToken(token)
    } catch (error) {
        return reply.status(401).send(error)
    }
}