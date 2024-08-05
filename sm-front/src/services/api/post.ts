import { api } from "../axios";

async function getPostFeed() {
    return await api.get('/post/get')
}

export const postApi = {
    getPostFeed
}