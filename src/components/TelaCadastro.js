import styled from 'styled-components';
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function TelaCadastro() {
    const URL = "http://localhost:5000/sign-up";
    
    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPasswordConfirmation, setInputPasswordConfirmation] = useState("");

    const navigate = useNavigate()

    function setData(event) {
        event.preventDefault()

        const body = {
            name: inputName,
            email: inputEmail,
            password: inputPassword,
            passwordConfirmation: inputPasswordConfirmation
        }
    
        const promise = axios.post(URL, body);
    
        promise.then((response) => {
            navigate("/")
        });
    }

    return(
        <Container>
            <Link to={`/`} >
                <h1>MyWallet</h1>
            </Link>
            <form onSubmit={setData}>
                <FormStyle>
                    <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" placeholder="Nome"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="Email"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha"/>
                </FormStyle>
                <FormStyle>
                    <input onChange={e => setInputPasswordConfirmation(e.target.value)} value={inputPasswordConfirmation} type="password" placeholder="Confirme a senha"/>
                </FormStyle>
                <Button>
                    <button type="submit">Cadastrar</button>
                </Button>
            </form>
            <Link to={`/`} >
            <p>Já tem uma conta? Entre agora!</p>
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
    line-height: 17px;
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

const FormStyle = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 4px;
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