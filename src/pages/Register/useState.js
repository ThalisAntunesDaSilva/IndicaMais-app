import React, { useState } from "react";
import api from "https://schema.getpostman.com/json/collection/v2.1.0/collection.json";


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [birth, setBirth] = useState("");
const [type, setType] = useState("");

const postUser = async () => {
    try {
        const response = await api.post("/usuarios", {
            nome: name,
            email: email,
            nascimento: birth,
            tipo: type,
        });

        // teste de log
        console.log(response.data);

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);

    }
};



<form onSubmit={postUser}>
    <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="text"
        placeholder="Data de Nascimento"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
    />
    <input
        type="text"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
    />
    <button type="submit">Cadastrar Usuário</button>
</form>

