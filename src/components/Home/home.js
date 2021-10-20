import React from 'react'
import { 
    FormControl,
    TextField
 } from '@material-ui/core'
import { ContainerHome } from '../../styled/home/homeStyled'
import Header from '../NavBar/navBar'
import {FaUser} from 'react-icons/fa'

const Home = () => {
    return(
        <ContainerHome>
            <Header />
            <div className="container">
                <div className="left">
                </div>
                <div className="right">
                    <div className = "buscas">
                        <FormControl className="field">
                            <TextField 
                                label = "Buscar por Nome"
                            />
                        </FormControl>
                        <FormControl className="field">
                            <TextField 
                                label = "Buscar por Bairro"
                            />
                        </FormControl>
                    </div>
                    <div className="resulCompany">
                        <ul>
                            <li className="company">
                                <div className="primeira-info">
                                    <div className="user">
                                        <FaUser />
                                    </div>
                                    <span>Nome</span>
                                    <span>Contato</span>
                                    <span>Email</span>
                                </div>
                                <div className="info">
                                    <span>Cidade</span>
                                    <span>Bairro</span>
                                </div>
                                <div className="descricao">
                                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                                </div>
                            </li>
                            <li className="company"></li>
                            <li className="company"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerHome>
    )
}

export default Home