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
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export const app = fastify()

app.register(fastifyCookie)
app.register(formbody)
app.register(cors)
app.register(fastifyMultipart, {
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

const swaggerOption = {
    mode: 'static' as const,
    specification: {
        path: './swagger.json',
        baseDir: process.cwd(),
        postProcessor: function (swaggerObject: any) {
            return swaggerObject
        }
    },
    exposeRoute: true,
}

app.register(fastifySwagger, swaggerOption);

// Apresenta a interface
app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    staticCSP: true,
    transformSpecificationClone: true,
});

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



