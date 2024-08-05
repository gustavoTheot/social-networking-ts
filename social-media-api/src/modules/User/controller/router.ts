import { app } from "@/app";
import { CreateUser } from "./http/create";
import { UpdateUser } from "./http/update";
import { DeleteUser } from "./http/delete";
import { GetUsers } from "./http/getUsers";
import { Signin } from "./http/signin";
import { MiddleAuthenticate } from "./middleware/middleAuthenticate";
import { SearchPeople } from "./http/searchPeople";

export async function routerUser() {
    app.post('/user/create', CreateUser)
    app.post('/user/login', Signin)

    app.patch('/user/update/:id', { preHandler: MiddleAuthenticate }, UpdateUser)
    app.delete('/user/delete/:id', { preHandler: MiddleAuthenticate }, DeleteUser)

    app.get('/user/list', { preHandler: MiddleAuthenticate }, GetUsers)
    app.get('/user/searchPeople', SearchPeople)
}