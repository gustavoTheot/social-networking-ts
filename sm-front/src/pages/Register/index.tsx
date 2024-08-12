import { useState } from "react"
import { userApi } from "../../services/api/user"
import { PopUp } from "../../components/PopUp"
import { formatDate } from "../../util/formatDate"
import { ContainerRegister } from "./styles"
import { Link, useNavigate } from "react-router-dom"

export function Register() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nick_name, setNick_name] = useState<string>('')
    const [date_birth, setDate_Birth] = useState<string>('')

    const [showAlter, setShowAlter] = useState<boolean>(false)
    const [alert, setAlert] = useState<string>('')

    const history = useNavigate()

    async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const date = new Date(date_birth)
            const dateFormat = formatDate(date)
            await userApi.create({ name, email, password, nick_name, date_birth: dateFormat })
            history('/')
            resetValues()
        } catch (error) {
            setAlert('Erro ao se registrar')
            handleClose()
        }
    }

    function resetValues() {
        setName('')
        setEmail('')
        setPassword('')
        setNick_name('')
        setDate_Birth('')
    }

    function handleClose() {
        setShowAlter(true)
        setTimeout(() => {
            setShowAlter(false)
        }, 2000)
    }

    return (
        <ContainerRegister>
            <form onSubmit={handleCreateUser}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Apelido" value={nick_name} onChange={(e) => setNick_name(e.target.value)} />
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Confirma Senha" onChange={(e) => setPassword(e.target.value)} />
                <input type="date" placeholder="Data de Nascimento" value={date_birth} onChange={(e) => setDate_Birth((e.target.value))} />

                <button type="submit">Cadastar</button>

                <div className="new-acount">
                    <Link to="/">Realizar login</Link>
                </div>
            </form>

            <PopUp alert={alert} showAlter={showAlter} handleClose={handleClose} />
        </ContainerRegister>
    )
}