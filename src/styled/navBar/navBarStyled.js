import styled from 'styled-components'

export const ContainerBar = styled('header')`
    background-color: white;
    box-shadow: 0px 0px 25px rgba(0,0,0,0.3);
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        span{
            font-family: sans-serif;
            font-weight: bold;
        }
    }

`