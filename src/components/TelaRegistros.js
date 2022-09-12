import styled from 'styled-components';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/usercontexts.js"

export default function TelaRegistros() {

    const URL = "http://localhost:5000/registros";

    const [total, setTotal] = useState(0)

    const navigate = useNavigate()
    const { userData, setUserData } = useContext(UserContext);

    const [userTransactions, setUserTransactions] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const promise = axios.get(URL, config)

        promise.then( res => {
            setUserTransactions(res.data)
            let sum = 0;
            for(const transaction of res.data){
                if (transaction.type === "earning"){
                    sum += Number(transaction.value)
                }else{
                    sum -= Number(transaction.value)
                }
            }
            setTotal(sum)
        })

    },[])

    return (
        <>
            <Header>
                <h1>Olá, {userData.name}!</h1>
            </Header>
            <Body>
                <Container>
                    {
                        userTransactions.length === 0 
                        ? 
                        <NotRegistered>
                            <p>Não há registros de entradas ou saídas</p>
                        </NotRegistered>
                        :
                        <Registered>
                            {
                                userTransactions.map( transaction => {
                                    return (
                                        <Infos>
                                            <p> { transaction.description } </p> 
                                            <p> { `R$ ${ (Number(transaction.value) /100).toFixed(2) }` } </p>
                                        </Infos>
                                    )
                                })
                            }
                            <Saldo>
                                <p>SALDO {`R$ ${(total /100).toFixed(2)}`}</p>
                            </Saldo>
                        </Registered>
                    }
                </Container>
            </Body>
            <Bottom>
                <Link to={`/entradas`}>
                    <Earnings>
                        <p>Nova entrada</p>
                    </Earnings>
                </Link>
                <Link to={`/saidas`}>
                    <Expenses>
                        <p>Nova saída</p>
                    </Expenses>
                </Link>
            </Bottom>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #8C11BE ;
    justify-content: space-between;

h1{
    font-style: normal;
    font-weight: 700;
    font-family: 'Raleway';
    margin: 18px; 
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}
`

const Body = styled.div`
    width: 100vw;
    background-color: #8C11BE;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 14px;
`

const Container = styled.div`
    width: 326px;
    height: 446px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    padding: 14px;
`
const NotRegistered = styled.div`
    font-size: 20px;
    color: #868686;
    padding: 50px;
    text-align: center;
`

const Registered = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const Infos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Saldo = styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    padding: 10px 0;
`

const Bottom = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #8C11BE;
`

const Earnings = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    margin-right: 5px;
`

const Expenses = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    margin-left: 5px;
`

const Description = styled.div`

`

const Value = styled.div`
    
`