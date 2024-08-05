import { FastifyReply, FastifyRequest } from "fastify";
import { PostRepository } from "../../repository/PostRepostory";

export async function LikeThePost(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {

    const postRepository = new PostRepository()

    try {
        const { id } = request.params
        await postRepository.updateLikePost(id)
        reply.status(200).send({ message: 'Like added' })
    } catch (err) {
        reply.status(401).send({ message: 'Internal server error' })
    }
}