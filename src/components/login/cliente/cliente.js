import React, { useEffect, useState} from "react";
import { ContainerCliente } from "../../../styled/Login/Cliente/clienteStyled";
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {
    FormControl,
    TextField
} from '@material-ui/core'
import m from '../../../assets/imagens/slide-client2.png'
import Register from "./register";
import api from '../../../services/api'
import {IoEyeSharp} from 'react-icons/io5'
import {login, getNome, getID} from '../../../services/auth'

const Cliente = () => {

    const [email_cliente, setEmail] = useState('')
    const [senha_cliente, setSenha] = useState('')
    const [showpassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(showpassword ? false : true)
    }

    const back = () => {
        window.location.href = "/type-login"
    }

    const cadastro = () => {
        let container = document.querySelector('.container')
        container.style.display = "flex"
    }

    const handleLogin = async (e) => {
        try{
            e.preventDefault()
            const response = await api.post('/cliente-login',{
                email_cliente,
                senha_cliente
            })
            if(response.status === 200){
                if(response.data.status === 1){
                    alert("Cliente não encontrado cadastra-se")
                }else if(response.data.status === 2){
                    alert("Senha não confere tente novamente")
                }else if(response.data.status === 3){
                    login(response.data.token)
                    getNome(response.data.nome)
                    getID(response.data._id)
                    window.location.href = "/cliente-login/home"
                }
            }
        }
        catch(error){
            window.alert("Erro ao fazer login "+error)
        }
    }

    return(
        <>
        <ContainerCliente>
            <div className="left">
                <div className="back" onClick={() => back()}>
                    <AiOutlineDoubleLeft className="icons-back"/>
                </div>
                <div className="form">
                    <form onSubmit={(e) => handleLogin(e)}>
                        <FormControl className="field">
                            <TextField 
                                value = {email_cliente}
                                onChange = {(e) => setEmail(e.target.value)}
                                label = "Email"
                            />
                        </FormControl>
                        <FormControl className="field password">
                            <TextField 
                                value = {senha_cliente}
                                onChange = {(e) => setSenha(e.target.value)}
                                label = "Senha"
                                type = {showpassword ? 'text' : 'password'}
                            />
                            <IoEyeSharp onClick={toggleShowPassword} className="show"/>
                        </FormControl>
                        <button type="submit">Entrar</button>
                        <a onClick={() => cadastro()}>Cadastrar</a>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="circle"></div>
                <div className="container-image">
                    <div className="slide">
                        <div className="boxSlide">
                            <img src={m}/>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerCliente>
            <Register />
        </>
    )
}

export default Cliente