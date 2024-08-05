import { FastifyReply, FastifyRequest } from "fastify";
import { PostRepository } from "../../repository/PostRepostory";
import { z } from "zod";

const postBodySchema = z.object({
    title: z.string().optional(),
    description: z.string(),

})

export async function CreatePost(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const postRepository = new PostRepository()
    const { id } = request.params
    const { title, description } = postBodySchema.parse(request.body)

    try {
        const newPost = await postRepository.createPost({
            title,
            description,
            id_user: id,
        })

        return reply.status(200).send(newPost)
    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}