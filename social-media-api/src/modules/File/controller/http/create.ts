import { FastifyReply, FastifyRequest } from "fastify";
import { FileRepository } from "../../repository/Repository";
import { parse } from "path";
import { uploadFile } from "../util/s3";

export async function CreateFile(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const fileRepository = new FileRepository();

    try {
        const { id } = request.params
        const files = await request.saveRequestFiles();

        for await (const file of files) {
            if (!file || !file.file) {
                continue;
            }

            const buffer = await file.toBuffer();
            const { name, ext } = parse(file.filename);
            const timestamp = Date.now();
            const fileName = `${name}-${timestamp}${ext}`;

            await uploadFile({
                key: fileName,
                buffer: buffer,
                type: file.mimetype
            });


            await fileRepository.createFile({
                id_post: id,
                reference: fileName,
                name: name,
                size: buffer.length,
                count: 1
            });
        }


        return reply.status(201).send({ message: 'File created successfully' });
    } catch (err) {
        reply.status(500).send({ message: 'Internal Server Error', err });
    }
}