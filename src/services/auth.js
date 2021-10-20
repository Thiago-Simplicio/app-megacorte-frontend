export const TOKEN = '&app-token'
export const ID_CLIENTE = '&id-cliente'
export const NOME_CLIENTE = '&nome_cliente'

export const login = (token) => {
    localStorage.setItem(TOKEN, token)
}

export const logout = () => {
    localStorage.clear()
}

export const getID = (id) => {
    localStorage.setItem(ID_CLIENTE, id)
}
export const setID = () => {
    localStorage.getItem(ID_CLIENTE)
}

export const getNome = (nome) => {
    localStorage.setItem(NOME_CLIENTE, nome)
}
export const setNome = () => {
    localStorage.getItem(NOME_CLIENTE)
}

export const getToken = () => {localStorage.getItem(TOKEN)}