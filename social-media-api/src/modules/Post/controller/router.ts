import { app } from "@/app";
import { GetPost } from "./http/get";
import { CreatePost } from "./http/create";
import { CountTheShare } from "./http/countTheShare";
import { Unliked } from "./http/unliked";

export async function routerPost() {
    app.post('/post/create/:id', CreatePost);
    app.get('/post/get', GetPost);
    app.patch('/post/countTheShare/:id', CountTheShare);
    app.patch('/post/unliked', Unliked);

}