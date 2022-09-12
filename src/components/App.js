import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react"

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaEntradas from "./TelaEntradas";
import TelaSaidas from "./TelaSaidas";

import UserContext from "../contexts/usercontexts.js"


export default function App(){

    const [userData, setUserData] = useState({})

    return(
        <BrowserRouter>
            <UserContext.Provider value = {{ userData, setUserData }}>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/registros" element={<TelaRegistros />} />
                    <Route path="/entradas" element={<TelaEntradas />} />
                    <Route path="/saidas" element={<TelaSaidas />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}