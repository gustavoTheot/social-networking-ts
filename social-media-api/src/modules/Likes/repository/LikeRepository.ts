import { Like } from "./ILikeRepository"

export class LikeRepository {

    async existUserAndLike(id_user: string, id_post: string) {
        return await Like.findOne({ id_user, id_post })
    }

    async createLike(id_user: string, id_post: string) {
        const like = new Like({ id_user, id_post })
        return await like.save()
    }

    async unliked(id_user: string, id_post: string) {
        return await Like.findOneAndDelete({ id_user, id_post })
    }
}