import React, { useState } from 'react'
import { ContainerBar } from '../../styled/navBar/navBarStyled'
import { setNome } from '../../services/auth'
import {BiLogOut} from 'react-icons/bi'
import {getToken, logout} from '../../services/auth'
import api from '../../services/api'

const Header = () => {

    const sair = async () => {
        try{
            if(window.confirm("Deseja sair ?")){
                const response = await api.get('/destroy-token', {headers: {token: getToken()}})
                if(response.status === 200){
                    window.location.href = "/type-login/cliente-login"
                }
            }
            
        }
        catch(err){
            alert("Erro ao fazer logout "+err)
        }
    }

    return(
        <ContainerBar>
            <div>
                <BiLogOut onClick={sair}/>
                <span>Olá, {(nome) => setNome(nome)}</span>
            </div>
        </ContainerBar>
    )
}

export default Header