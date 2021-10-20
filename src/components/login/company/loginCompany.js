import React, { useState } from 'react'
import { ContainerLoginCompany } from '../../../styled/Login/Company/companyStyled'
import {
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core'
import InputMask from 'react-input-mask'
import bg from '../../../assets/imagens/bg2.jpg'


const Company = () => {

    const [tipoOptions, setTipoOptions] = useState(['Fisica', 'Empresa'])
    const [tipo, setTipo] = useState('')

    return(
        <ContainerLoginCompany>
            <div className="background">
                <img src={bg}/>
            </div>
            <div className="login">
                <form>
                    <FormControl className="field-tipo">
                        <InputLabel>Tipo</InputLabel>
                        <Select
                            value = {tipo}
                            onChange = {(e) => setTipo(e.target.value)}
                        >
                            {
                                tipoOptions.map(t => {
                                    return <MenuItem value = {t}>{t}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    {
                        tipo === 'Fisica'
                        ?
                        ( <>
                            <FormControl className = "field">
                                <InputMask
                                    mask = "999.999.999-99"
                                    maskChar = " "
                                >
                                {() => <TextField 
                                    label = "cpf"
                                />}
                                </InputMask>
                            </FormControl>
                          </>
                        )
                        : <FormControl className = "field">
                            <InputMask
                                mask = "999.999.999/9999-99"
                                maskChar = " "
                            >
                                {() => <TextField 
                                    label = "cnpj"
                                />}
                            </InputMask>
                        </FormControl>
                    }

                        <FormControl className = "field">
                            <TextField 
                                label = "Email"
                            />
                        </FormControl>
                        <FormControl className = "field">
                            <TextField 
                                label = "senha"
                            />
                        </FormControl>
                        <div className="buttons">
                            <button>Entrat</button>
                            <button>Cadastrar</button>
                        </div>
                </form>
            </div>
        </ContainerLoginCompany>
    )
}

export default Company