import { LikeRepository } from "@/modules/Likes/repository/LikeRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { PostRepository } from "../../repository/PostRepostory";
import { z } from "zod";

const UnlikedBodySchema = z.object({
    id_user: z.string(),
    id_post: z.string(),
})

export async function Unliked(request: FastifyRequest, reply: FastifyReply) {
    const likeRepository = new LikeRepository()
    const postRepository = new PostRepository()

    const { id_user, id_post } = UnlikedBodySchema.parse(request.body)

    try {
        await likeRepository.unliked(id_user, id_post)
        await postRepository.updateUnlikePost(id_post)

    } catch (err) {
        reply.status(500).send({ error: 'Failed to unlike the post' })
    }
}