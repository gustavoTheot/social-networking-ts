import { useState } from "react"
import { userApi } from "../../services/api/user"
import { useNavigate } from "react-router-dom"

export function Signin() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useNavigate()


    async function handleSignin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const response = await userApi.signin(email, password)
            localStorage.setItem('token', response.data.token)
            history('/home')
        } catch (error) {
            console.log('Erro ao fazer login', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSignin}>
                <input type="text" placeholder="User" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" title="Entrar">Entrar</button>
            </form>
        </>
    )
}