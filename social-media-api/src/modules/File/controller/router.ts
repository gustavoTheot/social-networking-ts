import { app } from "@/app";
import { CreateFile } from "./http/create";

export async function routerFile() {
    app.post('/file/create/:id', CreateFile);

}