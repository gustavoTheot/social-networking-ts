import { FastifyReply, FastifyRequest } from "fastify";
import { PostRepository } from "../../repository/PostRepostory";
import { z } from "zod";
import { uploadFile } from "@/modules/File/controller/util/s3";


const postBodySchema = z.object({
    title: z.string().optional(),
    description: z.string(),

})

export async function CreatePost(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const postRepository = new PostRepository()
    const { id } = request.params
    const { title, description } = postBodySchema.parse(request.body)

    try {
        //s3
        const img = await request.file()
        if (!img) {
            throw new Error("Image is required")
        }

        const buffer = await img.toBuffer()
        const key = `profile-pictures/${Date.now()}-${img.filename}`;
        const type = img.mimetype;
        await uploadFile({ key, buffer, type });

        const newPost = await postRepository.createPost({
            // reference_photo: key,
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