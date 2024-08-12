import { FastifyReply, FastifyRequest } from "fastify";
import { LikeRepository } from "../../repository/LikeRepository";
import mongoose from "mongoose";
import { z } from "zod";
import { PostRepository } from "@/modules/Post/repository/PostRepostory";

const CreateLikeBodySchema = z.object({
    id_user: z.string(),
    id_post: z.string(),
})

export async function CreateLike(request: FastifyRequest, reply: FastifyReply) {
    const likeRepository = new LikeRepository();
    const postRepository = new PostRepository()

    const { id_user, id_post } = CreateLikeBodySchema.parse(request.body)

    if (!mongoose.Types.ObjectId.isValid(id_user) || !mongoose.Types.ObjectId.isValid(id_post)) {
        return reply.status(400).send({ error: 'Invalid userId or postId' });
    }

    try {
        const userAndLike = await likeRepository.existUserAndLike(id_user, id_post)

        if (userAndLike) {
            await likeRepository.unliked(id_user, id_post)
            const update = await postRepository.updateUnlikePost(id_post)
            reply.status(200).send({ message: 'Post unliked' })
            return update
        }

        const session = await mongoose.startSession()
        session.startTransaction()

        try {
            await likeRepository.createLike(id_user, id_post)

            await postRepository.updateLikePost(id_post)

            await session.commitTransaction()
            reply.status(200).send({ message: 'Post liked' })
        } catch (err) {
            await session.abortTransaction()
            reply.status(500).send({ error: 'Failed to like the post' })
        }

    } catch (error) {
        const err = error as Error
        reply.status(401).send({ error: err.message })
    }
}