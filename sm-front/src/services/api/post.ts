import { api } from "../axios";

async function getPostFeed() {
    return await api.get('/post/get')
}

async function sharePost(id: string) {
    return await api.patch(`/post/countTheShare/${id}`)
}

async function unliked(id_user: string, id_post: string) {
    return await api.patch(`/post/unliked`, { id_user, id_post })
}

export const postApi = {
    getPostFeed,
    sharePost,
    unliked
}