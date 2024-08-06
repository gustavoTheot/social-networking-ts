import { postApi } from "../services/api/post"

export async function handleLike(id: string) {
    await postApi.likePost(id)
}

export async function handleShare(id: string) {
    // await postApi.likePost(id)
    console.log(id)
}