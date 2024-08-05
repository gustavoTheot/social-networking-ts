import { FastifyRequest, FastifyReply } from "fastify"
import { PostRepository } from "../../repository/PostRepostory";

export async function GetPost(request: FastifyRequest, reply: FastifyReply) {
    const postRespository = new PostRepository();

    try {
        const post = await postRespository.getPost();
        return reply.status(200).send({ post })
    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}