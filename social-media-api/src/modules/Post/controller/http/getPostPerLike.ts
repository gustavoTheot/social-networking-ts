import { FastifyRequest, FastifyReply } from "fastify"
import { PostRepository } from "../../repository/PostRepostory";
import { LikeRepository } from "@/modules/Likes/repository/LikeRepository";
import { z } from "zod";

const GetPostQuerySchema = z.object({
    id_user: z.string(),
    id_post: z.string(),
})

export async function GetPostPerLike(request: FastifyRequest, reply: FastifyReply) {
    const postRespository = new PostRepository();
    const likeRepository = new LikeRepository();

    const { id_user, id_post } = GetPostQuerySchema.parse(request.query)

    try {
        const post = await postRespository.getPost();

        const likeExist = await likeRepository.existUserAndLike(id_user, id_post)
        if (likeExist) {
            return reply.status(200).send({ post, })
        }

    }
    catch (error) {
        const err = error as Error
        reply.status(500).send({ error: err.message })
    }
}