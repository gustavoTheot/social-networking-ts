import { app } from "@/app";
import { GetPost } from "./http/get";
import { CreatePost } from "./http/create";
import { CountTheShare } from "./http/countTheShare";

export async function routerPost() {
    app.post('/post/create/:id', CreatePost);
    app.get('/post/get', GetPost);
    app.patch('/post/countTheShare/:id', CountTheShare);
}