import { api } from "../axios";


async function likePost(id_user: string, id_post: string) {
    return await api.post(`/like/create`, { id_user, id_post })
}

export const likeApi = {
    likePost,
}