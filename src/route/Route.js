import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cliente from '../components/login/cliente/cliente'
import Type from '../components/login/type'
import Home from '../components/Home/home'
import Company from '../components/login/company/loginCompany'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/type-login" exact component={Type}/>
                <Route path="/type-login/cliente-login" exact component={Cliente}/>
                <Route path="/cliente-login/home/" exact component={Home}/>
                <Route path="/type-login/company-login" exact component={Company}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas