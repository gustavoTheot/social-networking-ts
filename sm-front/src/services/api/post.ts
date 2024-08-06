import { api } from "../axios";

async function getPostFeed() {
    return await api.get('/post/get')
}

async function likePost(id: string) {
    return await api.patch(`/post/likeThePost/${id}`)
}

export const postApi = {
    getPostFeed,
    likePost,
}