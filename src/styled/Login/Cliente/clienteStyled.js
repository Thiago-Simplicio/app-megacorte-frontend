import styled from "styled-components";

export const ContainerCliente = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left{
        width: 26%;

        .back{
            position: absolute;
            left: 2%;
            top: 5%;
            background-color: #17C2F6;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 20;
    
            .icons-back{
                color: white;
                font-size: 25px;
            }
        }
        .back:hover{
            width: 55px;
        }
        
        .form{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: 0;
            width: 26%;
            height: 100%;
            background-color: white;
            box-shadow: 2px 2px 3px rgba(0,0,0,0.5);
            z-index: 5;
    
            form{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 25px;
    
                .field{
                    width: 85%;
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
                    width: 70%;
                    padding: 7px;
                    background-color: #1DDBDB;
                    font-weight: bold;
                    color: white;
                    font-family: sans-serif;
                    font-size: 21px;
                    border-radius: 3px;
                    border: none;
                    outline: 0;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                button:hover{
                    opacity: 0.7;
                }
                a{
                    background-color: rgba(0,0,0,0.1);
                    padding: 7px;
                    border-radius: 3px;
                    color: #1DDBDB;
                    font-family: sans-serif;
                    font-weight: bold;
                    width: 70%;
                    text-align: center;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                a:hover{
                    background-color: #00F9F9;
                    color: white;
                }
            }
        }
    }


    .right{
        flex: 1;
        height: 100vh;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1DDBDB;

        .container-image{
            width: 70%;
            height: 100%;
            
            .slide{
                position: relative;
                width: 100%;
                height: 100%;
                
                .boxSlide{
                    
                    img{
                        background-color: #1DDBDB;
                        position: absolute;
                        width: 90%;
                        height: 90%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
`