import { app } from "@/app";
import { CreateLike } from "./http/like";

export async function routerLike() {
    app.post('/like/create', CreateLike)
}