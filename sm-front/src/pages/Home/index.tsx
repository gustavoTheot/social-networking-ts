import { useState, useEffect } from "react"
import { UsersFeed } from "../../interfaces/User/usersFeed"
import { userApi } from "../../services/api/user"
import { Content, Feed, FeedContainer, NewPost } from "./styles"
import picture from '../../assets/profile-picture.png'
import { PostFeed } from "../../interfaces/Post/postsFeed"
import { postApi } from "../../services/api/post"

import { Post } from "../../components/Post"

export function Home() {
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState<UsersFeed[]>([])
    const [post, setPost] = useState<PostFeed[]>([])

    useEffect(() => {
        async function fetchData() {
            let listUser

            try {
                if (token) {
                    listUser = await userApi.list(token)
                    setUsers(listUser.data.users)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = await postApi.getPostFeed()
            setPost(data.data.post)
        }
        fetchData()
    }, [])


    const userWithPost = users.filter(user => post.some(item => item.id_user === user._id))

    return (
        <FeedContainer>
            <NewPost>
                <form>
                    <input type="text" placeholder="Titulo" />
                    <input type="text" placeholder="Descrição" />
                    <input type="file" alt="Add imagem" />
                </form>
            </NewPost>
            <Feed>
                {userWithPost.map(user => (
                    <Content key={user._id}>
                        <header>
                            {
                                user.reference_photo === '' ?
                                    <img src={picture} alt="" />
                                    :
                                    <img src={user.reference_photo} alt="Imagem do perfil" />
                            }
                            <span>{user.nick_name}</span>
                        </header>

                        <main>
                            {
                                post.filter(item => item.id_user === user._id).map(item => (
                                    <Post _id={item._id} createdAt={item.createdAt} title={item.title} description={item.description} />
                                ))
                            }
                        </main>

                    </Content>
                ))}
            </Feed>
        </FeedContainer >
    )
}