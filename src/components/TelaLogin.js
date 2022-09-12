import styled from 'styled-components';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from "../contexts/usercontexts.js"



export default function TelaLogin() {
    const URL = "http://localhost:5000/login";

    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate()

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    function setData(event) {
        event.preventDefault();

        const body = {
            email: inputEmail,
            password: inputPassword
        }
    
        const promise = axios.post(URL, body);
    
        promise.then((response) => {
            console.log(response);

            setUserData(response.data)
            navigate("/registros")

        });
    }


    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={setData}>
                <Email>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="Email"/>
                </Email>
                <Senha>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha"/>
                </Senha>
                <Button>
                    <button type="submit">Entrar</button>
                </Button>
            </form>
            <Link to={`/cadastro`} >
                <p>Primeira vez aqui? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #A300BD;

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
    width: 309px;
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

const Email = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 14px;
}

input:focus {
outline: none;
}
`

const Senha = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
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