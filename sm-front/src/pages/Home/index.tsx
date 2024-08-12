import { useState, useEffect } from "react"
import { UsersFeed } from "../../interfaces/User/usersFeed"
import { userApi } from "../../services/api/user"
import { Content, Feed, FeedContainer, NewPost } from "./styles"
import picture from '../../assets/profile-picture.png'
import { PostFeed } from "../../interfaces/Post/postsFeed"
import { postApi } from "../../services/api/post"

import { Post } from "../../components/Post"
import { SignOut } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

interface User {
    userId: string,
    name: string,
    email: string
}

export function Home() {
    const token = localStorage.getItem('token')
    const [users, setUsers] = useState<UsersFeed[]>([])
    const [post, setPost] = useState<PostFeed[]>([])
    const [loggedUser, setLoggedUser] = useState<User>()
    const splitPerDot = token?.split('.')[1] ?? ''

    const payload = JSON.parse(atob(splitPerDot))

    const history = useNavigate()

    useEffect(() => {
        async function fetchData() {
            let listUser

            try {
                if (token) {
                    listUser = await userApi.list(token)
                    setUsers(listUser.data.users)
                    setLoggedUser(payload)
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

    function handleSignOut() {
        localStorage.removeItem('token')
        history('/')
    }


    const userWithPost = users.filter(user => post.some(item => item.id_user === user._id))

    return (
        <FeedContainer>
            <header>
                <button onClick={handleSignOut}>
                    <SignOut size={24} />
                </button>
            </header>

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
                                post.filter(item => item.id_user === user._id).map((item, index) => (
                                    <Post
                                        key={index}
                                        id_post={item._id}
                                        id_user={loggedUser === undefined ? '' : loggedUser.userId}
                                        createdAt={item.createdAt} title={item.title}
                                        description={item.description}
                                    />
                                ))
                            }
                        </main>

                    </Content>
                ))}
            </Feed>
        </FeedContainer >
    )
}