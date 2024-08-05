import { useState, useEffect } from "react"
import { UsersFeed } from "../../interfaces/User/usersFeed"
import { userApi } from "../../services/api/user"
import { Content, Feed, FeedContainer } from "./styles"
import picture from '../../assets/profile-picture.png'
import { PostFeed } from "../../interfaces/Post/postsFeed"
import { postApi } from "../../services/api/post"

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

    console.log('Post:', post)

    return (
        <FeedContainer>
            <Feed>
                {
                    users.map(user => (
                        <Content key={user.id}>
                            <header>
                                {
                                    user.reference_photo === '' ?
                                        <img src={picture} alt="" />
                                        :
                                        <img src={user.reference_photo} alt="Imagem do perfil" />
                                }
                                {user.nick_name}
                            </header>

                            <main>
                                {
                                    post.map(item => (
                                        <div>
                                            <span>{item.title}</span>
                                            <span>{item.description}</span>
                                        </div>
                                    ))
                                }
                            </main>

                            <footer>

                            </footer>

                        </Content>
                    ))
                }
            </Feed>

        </FeedContainer>
    )
}