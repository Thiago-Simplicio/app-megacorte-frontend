import React,{useState} from 'react'
import { FormControl, TextField } from '@material-ui/core'
import { ContainerRegister } from '../../../styled/Login/Cliente/resgisterStyled'
import {AiOutlineClose} from 'react-icons/ai'
import {IoEyeSharp} from 'react-icons/io5'
import InputMask from 'react-input-mask'
import api from '../../../services/api'

const Register = () => {

    const [nome_cliente, setNomeCliente] = useState('')
    const [sobrenome_cliente, setSobrenomeCliente] = useState('')
    const [email_cliente, setEmailCliente] = useState('')
    const [senha_cliente, setSenhaCliente] = useState('')
    const [contato_cliente, setContatoCliente] = useState('')
    const [showpassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(showpassword ? false : true)
    }

    const handleRegister = async (e) => {
        try{
            e.preventDefault()
            const response = await api.post('/cliente-create',{
                nome_cliente,
                sobrenome_cliente,
                email_cliente,
                senha_cliente,
                contato_cliente
            }) 
            setNomeCliente('')
            setSobrenomeCliente('')
            setEmailCliente('')
            setSenhaCliente('')
            setContatoCliente('')
            if(response.status === 200){
                alert("Cliente criado com sucesso, faça o login!")
            }
        }
        catch(err){
            alert("Erro no servidor "+err)
        }
    }

    const fecharcadastro = () => {
        let container = document.querySelector('.container')
        container.style.display = "none"
    }

    return(
        <ContainerRegister className="container">
            <div className="fechar" onClick={() => fecharcadastro()}>
                <AiOutlineClose />
            </div>
            <div className="boxRegister">
                <form onSubmit = {(e) => handleRegister(e)}>
                    <FormControl className="field">
                        <TextField 
                            value = {nome_cliente}
                            onChange = {(e) => setNomeCliente(e.target.value)}
                            label = "Nome"
                        />
                    </FormControl>
                    <FormControl className="field">
                        <TextField 
                            value = {sobrenome_cliente}
                            onChange = {(e) => setSobrenomeCliente(e.target.value)}
                            label = "Sobrenome"
                        />
                    </FormControl>
                    <FormControl className="field">
                        <TextField 
                            value = {email_cliente}
                            onChange = {(e) => setEmailCliente(e.target.value)}
                            label = "Email"
                        />
                    </FormControl>
                    <FormControl className="field">
                        <TextField 
                            value = {senha_cliente}
                            onChange = {(e) => setSenhaCliente(e.target.value)}
                            label = "Senha"
                            type = {showpassword ? 'text' : 'password'}
                        />
                        <IoEyeSharp onClick={toggleShowPassword} className="show"/>
                    </FormControl>
                    <FormControl className="field">
                        <InputMask
                            mask = "(99) 99999-9999"
                            maskChar = " "
                            value = {contato_cliente}
                            onChange = {(e) => setContatoCliente(e.target.value)}
                        >
                            {() => <TextField 
                                label = "Contato"
                            />}
                        </InputMask>
                    </FormControl>
                    <button type = "submit">Cadastrar</button>
                </form>
            </div>
        </ContainerRegister>
    )
}

export default Register