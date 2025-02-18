import { useState } from 'react'
import { Background, Container, Form } from "./styles"
import {Input} from '../../components/Input'

import { api } from "../../services/api"

import {Button} from '../../components/Button'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link, useNavigate } from "react-router-dom"

export function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    function handleSignUp(){
        if(!name || !email ||!password){
            return alert('preencha todos os campos')
        }

        api.post('/users',{name, email, password})
        .then(() => {
            alert('Usuário cadatrado com sucesso')
            navigate('/')
        })
        .catch(error => {
            if(error.res){
                alert(error.res.data.message)
            } else{
                alert('Não foi possível cadastrar')
            }
        })
    }

    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}

                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}

                />
                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to='/'>Voltar para o login</Link>
            </Form>
        </Container>
    )
}