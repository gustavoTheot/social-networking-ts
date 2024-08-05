import { PostInterface } from "../dto/postDto";
import { Post } from "./IPostRepository";

export class PostRepository {

    async createPost(dataPost: PostInterface) {
        const post = new Post(dataPost)
        return await post.save()
    }

    async updateLikePost(id: string) {
        return await Post.findByIdAndUpdate(
            { _id: id }, // Filtro para encontrar o post pelo ID
            { $inc: { count_like: 1 } }, // Incrementar o campo count_like em 1
            { new: true } // Retornar o documento atualizado
        )
    }

    async updateSharePost(id: string) {
        return await Post.findByIdAndUpdate(
            { _id: id },
            { $inc: { count_shared: 1 } },
            { new: true }
        )
    }

    async deletePost(id: string) {
        await Post.findByIdAndDelete(id)
    }

    async getPost() {
        return await Post.find()
    }
}