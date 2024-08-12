import { likeApi } from "../services/api/like"
import { postApi } from "../services/api/post"

export async function handleLike(id_user: string, id_post: string) {
    await likeApi.likePost(id_user, id_post)
}

export async function handleShare(id: string) {
    await postApi.sharePost(id)
    console.log(id)
}