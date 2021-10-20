import React from 'react'
import { ContainerLogin } from '../../styled/Login/typeStyled'
import background from '../../assets/imagens/bg'

const Type = () => {


    const cliente = () => {
        window.location.href = "/type-login/cliente-login"
    }

    const company = () => {
        window.location.href = "/type-login/company-login"
    }


    return(
        <ContainerLogin>
            <div className="wrapper">
                <img src={background}/>
            </div>
            <div className="boxtype">
                <button onClick={() => cliente()}>entrar como cliente</button>
                <button onClick={() => company()}>entrar como cabelereiro</button>
            </div>
        </ContainerLogin>
    )
}

export default Type