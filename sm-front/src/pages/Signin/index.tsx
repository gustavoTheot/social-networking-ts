import { useState } from "react"
import { userApi } from "../../services/api/user"
import { Link, useNavigate } from "react-router-dom"
import { LoginContainer } from "./styles"
import { PopUp } from "../../components/PopUp"

export function Signin() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showAlter, setShowAlter] = useState<boolean>(false)
    const [alert, setAlert] = useState<string>('')
    const history = useNavigate()


    async function handleSignin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const response = await userApi.signin(email, password)
            localStorage.setItem('token', response.data.token)
            history('/home')
        } catch (error) {
            setAlert('Erro ao realizar login')
            handleClose()
        }
    }

    function handleClose() {
        setShowAlter(true)
        setTimeout(() => {
            setShowAlter(false)
        }, 2000)
    }

    return (
        <LoginContainer>
            <form onSubmit={handleSignin}>
                <input type="text" placeholder="User" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" title="Entrar">Entrar</button>

                <div className="new-acount">
                    <Link to="/register">Criar conta</Link>
                </div>
            </form>

            {
                alert !== '' && (
                    <PopUp alert={alert} showAlter={showAlter} handleClose={handleClose} />
                )
            }
        </LoginContainer>
    )
}