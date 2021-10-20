import styled from 'styled-components'

export const ContainerHome = styled('div') `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .left{
            width: 20%;
            height: 100%;
            background-color: yellow;
        }
        .right{
            flex: 1;
            height: 100%;
            padding: 20px;

            .buscas{
                width: 100%;
                display: flex;
                gap: 25px;
                justify-content: center;
                align-items: center;

                .field{
                    width: 40%;
                }
            }

            .resulCompany{
                margin-top: 95px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                padding: 20px 15px;
                height: 75%;
                overflow: auto;
                border: 1px solid rgba(0,0,0,0.1);

                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .company{
                        background-color: rgba(0,0,0,0.1);
                        padding: 7px 10px;
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        border-radius: 2px;
                        box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
                        transition: all 0.3s ease;
                        cursor: pointer;

                        .primeira-info{
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            gap: 25px;

                            .user{
                                width: 65px;
                                height: 65px;
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: white;
                                font-size: 34px;
                                color: rgba(0,0,0,0.3);

                            }
                            span:nth-child(2){
                                font-size: 25px;
                                font-family: sans-serif;
                            }
                            span:nth-child(3){
                                font-size: 17px;
                                font-family: sans-serif;
                                color: rgba(0,0,0,0.3);
                                transition: color 0.3s ease;
                            }
                            span:nth-child(3):hover{
                                color: rgba(0,0,0,1);
                            }
                            span:nth-child(4){
                                font-size: 17px;
                                font-family: sans-serif;
                                color: rgba(0,0,0,0.3);
                                transition: color 0.3s ease;
                            }
                            span:nth-child(4):hover{
                                color: rgba(0,0,0,1);
                            }
                        }

                        .info{
                            display: flex;
                            gap: 15px;

                            span{
                                font-family: sans-serif;
                                color: rgba(0,0,0,0.5);
                            }
                        }

                        .descricao{
                            background-color: white;
                            padding: 20px;
                            border-radius: 15px;
                            
                            span{
                                font-family: sans-serif;
                                color: rgba(0,0,0,0.7);

                            }
                        }
                    }
                    .company:hover{
                        box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
                    }
                }
            }
        }
    }
`