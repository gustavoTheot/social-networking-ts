import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { env } from "../../../../env"
import { Upload } from "@aws-sdk/lib-storage"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

interface uploadProps {
    bucket?: string
    key: string
    buffer: any,
    type: string
}

const s3Client = new S3Client({
    endpoint: env.ENDPOINT,
    region: env.BUCKET_REGION,
    credentials: {
        accessKeyId: env.ACCESS_KEY,
        secretAccessKey: env.SECRET_ACCESS_KEY
    },
    forcePathStyle: true
})

export async function uploadFile({ key, buffer, type }: uploadProps) {
    const uploader = new Upload({
        client: s3Client,
        params: {
            Bucket: env.BUCKET_NAME,
            Key: key,
            Body: buffer,
            ContentType: type
        }
    })

    try {
        await uploader.done();
        console.log('Arquivo enviado com sucesso para o S3.');
    } catch (err) {
        console.error('Erro ao enviar arquivo para o S3:', err);
        throw err;
    }
}

export async function getObjectSignedUrl(key: string, client: any) {
    const params = {
        Bucket: env.BUCKET_NAME,
        Key: key
    }

    // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
    const command = new GetObjectCommand(params);
    const seconds = 60
    const url = await getSignedUrl(client, command, { expiresIn: seconds });

    return url
}

export function deleteFile(fileName: string, client: any) {
    const deleteParams = {
        Bucket: env.BUCKET_NAME,
        Key: fileName,
    }

    return client.send(new DeleteObjectCommand(deleteParams));
}