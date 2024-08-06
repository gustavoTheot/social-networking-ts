import { useEffect, useState } from "react"
import { userApi } from "../../services/api/user"

export function Register() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nick_name, setNick_name] = useState<string>('')
    const [date_birth, setDate_Birth] = useState<Date>(new Date())

    const [showAlter, setShowAlter] = useState<boolean>(false)
    const [alert, setAlert] = useState<string>('')

    useEffect(() => {

    }, [])


    async function handleCreateUser() {
        const data = { name, email, password, nick_name, date_birth }

        try {
            await userApi.create(data)
        } catch (error) {
            setAlert('Erro ao se registrar')
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
        <>
            <form onSubmit={handleCreateUser}>
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Apelido" onChange={(e) => setNick_name(e.target.value)} />
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Confirma Senha" onChange={(e) => setPassword(e.target.value)} />
                <input type="date" placeholder="Data de Nascimento" onChange={(e) => setDate_Birth(new Date(e.target.value))} />
            </form>
        </>
    )
}