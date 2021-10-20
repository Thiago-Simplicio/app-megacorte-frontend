import styled from "styled-components";

export const ContainerRegister = styled('div')`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    position: absolute;
    top: 0;
    z-index: 50;
    display: none;

    .fechar{
        position: absolute;
        left: 15%;
        top: 15%;
        background-color: #D33030;
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        animation: fechar 1s forwards;
        color: white;
        font-size: 21px;
    }

    .boxRegister{
        width: 420px;
        height: 80%;
        background-color: white;
        border-radius: 6px;
        padding: 7px;
        z-index: 580;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: box 1s forwards;

        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 35px;

            .field{
                position: relative;
            }

            .show{
                position: absolute;
                right: 0;
                top: 50%;
                cursor: pointer;
                color: rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            }
            .show:hover{
                color: rgba(0,0,0,5);
            }

            button{
                padding: 8px;
                width: 50%;
                background-color: #76A5D5;
                border: none;
                outline: 0;
                color: white;
                font-family: sans-serif;
                font-weight: bold;
                cursor: pointer;
            }
        }

        @keyframes box{
            0%{
                transform: translateY(-350px);
            }
            100%{
                transform: translateY(1);
            }
        }
        @keyframes fechar{
            0%{
                transform: translateX(-350px);
            }
            100%{
                transform: translateX(1);
            }
        }
    }
`