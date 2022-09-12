import styled from 'styled-components';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/usercontexts.js"

export default function TelaEntradas() {

    const navigate = useNavigate()

    const { userData, setUserData } = useContext(UserContext);
    const [ value, setValue ] = useState(0)
    const [ description, setDescription ] = useState("")

    const URL = "http://localhost:5000/transactions"

    function sendTransaction(event){
        event.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const body = {
            value,
            description,
            type: "expense"
        }

        const promise = axios.post(URL, body, config,)

        promise.then( res => {
            navigate("/registros")
            //setUserTransactions(res.data)
        })
    }

    return(
        <>
            <Header>
                <h1>Nova saída</h1>     
            </Header>
            <Container>
                <form onSubmit={sendTransaction}>
                    <FormStyle>
                        <input onChange={e => setValue(e.target.value)} value={value} type="number" placeholder="Valor"/>
                    </FormStyle>
                    <FormStyle>
                        <input onChange={e => setDescription(e.target.value)} value={description} type="text" placeholder="Descrição"/>
                    </FormStyle>
                    <Button>
                        <button type="submit">Salvar saída</button>
                    </Button>
                </form>
            </Container>
        </>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #8C11BE ;
    justify-content: space-between;

    h1{
        margin: 18px; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
flex-direction: column;
background-color: #8C11BE;
padding-top: 20px;

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

p{
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-decoration-line: none;
    color: white;
    margin-top: 25px;
    cursor: pointer;
}

h1 {
    margin-bottom: 24px;
    font-family: 'Saira Stencil One';
    font-size: 40px;
    color: white;
}
`

const Button = styled.div`
button {
    width: 308px;
    height: 45px;
    background: #A328D6;
    border-radius: 4.6px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-family: 'Raleway';
    font-weight: 700;
    margin-top: 6px;
}
`

const FormStyle = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 4px;
    width: 308px;
    height: 45px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top: 6px;
    padding-left: 14px;
}

input:focus {
    outline: none;
}
`