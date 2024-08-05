import cors from '@fastify/cors';
import { fastify } from "fastify";
import formbody from '@fastify/formbody'
import { env } from './env';
import mongoose from 'mongoose'
import { routerPost } from './modules/Post/controller/router';
import { routerUser } from './modules/User/controller/router';
import { routerFile } from './modules/File/controller/router';
import fastifyMultipart from '@fastify/multipart';
import fastifyCookie from '@fastify/cookie';

export const app = fastify()

app.register(fastifyCookie)
app.register(formbody)
app.register(cors)
app.register(fastifyMultipart, {
    attachFieldsToBody: true
})

mongoose.connect(env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => {
        console.log('Error connecting to', err)
    })

app.register(routerUser)
app.register(routerPost)
app.register(routerFile)


/*
const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minioAdmin',
    secretKey: 'minioAdmin'
})
*/



// const s3ClientMinio = new S3Client({
//     endpoint: "http://localhost:9000",
//     region: env.BUCKET_REGION,
//     credentials: {
//         accessKeyId: "minioSocialPost",
//         secretAccessKey: "minioSocialPost"
//     },
//     forcePathStyle: true
// })

// app.post('/aws/post', async (req: FastifyRequest, reply: FastifyReply) => {
//     const data = await req.file()

//     if (!data || !data.file) {
//         return reply.status(400).send({ error: 'No file send' })
//     }

//     await uploadFile({
//         bucket: env.BUCKET_NAME,
//         key: data.filename,
//         buffer: data.file,
//         type: data.mimetype,
//     })

//     const makePost = new PostRepositorie()
//     const dataPost = { reference: data.filename, like: 1 }
//     await makePost.create(dataPost)

//     reply.send()
// });

// app.post('/minio/post', async (req: FastifyRequest, reply: FastifyReply) => {
//     const data = await req.file();
//     const fileContent = await data?.file;

//     // s3
//     const upload = new Upload({
//         client: s3ClientMinio,
//         params: {
//             Bucket: "social-media-post",
//             Key: data?.filename,
//             Body: fileContent
//         },
//     });

//     // prisma
//     const post = await prisma.post.create({
//         data: {
//             reference: await data?.filename,
//             like: 1
//         }
//     })

//     try {
//         await upload.done();
//         reply.send(post);
//     } catch (err) {
//         reply.status(500).send(err);
//     }
// })


// app.get('/minio/getImage', async (req: FastifyRequest, reply: FastifyReply) => {
//     const posts = await prisma.post.findMany({
//         orderBy: [{ id: 'asc' }]
//     })

//     for (let post of posts) {
//         post.reference = await getObjectSignedUrl(post.reference, s3ClientMinio)
//     }
//     reply.send(posts)
// })

// app.delete('/minio/delete/:id', async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
//     const { id } = req.params
//     const postId = parseInt(id, 10)

//     const post = await prisma.post.findUnique({
//         where: {
//             id: postId
//         }
//     })

//     await deleteFile(post?.reference, s3ClientMinio)

//     await prisma.post.delete({
//         where: {
//             id: postId
//         }
//     })
//     reply.send(post)
// })









