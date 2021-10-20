import styled from "styled-components";

export const ContainerLoginCompany = styled('div')`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .background{
        width: 100%;
        height: 100%;
        background-color: black;
        position: relative;

        img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .login{
        position: absolute;
        background-color: white;
        width: 30%;
        height: 60%;
        border-radius: 6px;
        box-shadow: 0px 2px 3px 2px rgba(0,0,0,2);
        padding: 30px 20px;
        animation: login 1s forwards;

        form{
            display: flex;
            gap: 25px;
            height: 100%;
            flex-direction: column;

            .field{
                width: 100%;
                border-radius: 3px;
                padding: 10px;
                transition: all 0.3s ease;
                font-family: sans-serif;
            }
            .field:hover{
                background-color: rgba(0,0,0,0.2);
            }

            .buttons{
                width: 100%;
                height: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 25px;

                button:nth-child(1){
                    width: 40%;
                    padding: 10px;
                    border: none;
                    outline: 0;
                    border-radius: 3px;
                    cursor: pointer;
                    background-color: #1EB2B2;
                    color: white;
                    font-family: sans-serif;
                    font-weight: bold;
                    border: 1px solid #1EB2B2;
                    transition: all 0.3s ease;
                }
                button:nth-child(1):hover{
                    background-color: white;
                    border: 1px solid #1EB2B2;
                    color: #1EB2B2;
                }
                button:nth-child(2){
                    width: 35%;
                    padding: 10px;
                    border: 1px solid #1EB2B2;
                    color: #1EB2B2;
                    font-family: sans-serif;
                    font-weight: bold;
                    outline: 0;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                button:nth-child(2):hover{
                    background-color: #1EB2B2;
                    color: white;
                }
            }
        }
    }

    @keyframes login{
        0%{
            transform: translateY(-450px);
        }
        100%{
            transform: translateY(1);
        }
    }
`