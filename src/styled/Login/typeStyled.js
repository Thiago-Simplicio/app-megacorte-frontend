import styled from 'styled-components'

export const ContainerLogin = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    .wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: black;

        img{
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.5;
        }
    }

    .boxtype{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 150px;
        background-color: white;
        gap: 15px;
        border-radius: 6px;
        animation: box 1s forwards;
        box-shadow: 3px 5px 5px 3px rgba(0,0,0,0.2);

        button{
            width: 80%;
            padding: 7px;
            cursor: pointer;
        }
        button:nth-child(1){
            background-color: #6CDADA;
            border-radius: 6px;
            border: none;
            outline: 0;
            box-shadow: 2px 1px 2px 2px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            color: white;
            font-family: sans-serif;
            font-weight: bold;
            text-shadow: 0px 1px 2px black;
            font-size: 16px;
        }
        button:nth-child(1):hover{
            width: 90%;
            background-color: #2F8D8D;
        }
        button:nth-child(2){
            background-color: #71E9B7;
            color: white;
            font-family: sans-serif;
            text-shadow: 0px 1px 2px black;
            font-size: 16px;
            font-weight: bold;
            border-radius: 6px;
            box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.3);
            border: none;
            outline: 0;
            transition: all 0.3s ease;
        }
        button:nth-child(2):hover{
            width: 90%;
            background-color: #1B724E;
        }
    }
    @keyframes box{
        0%{
            transform: translateY(-350px)
        }
        100%{
            transform: translateY(1);
        }
    }
`