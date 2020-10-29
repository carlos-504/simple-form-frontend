import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import api from "../../api"

function Form() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");

  async function handlerSubmit(event){

    event.preventDefeault()

    const dados = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      celular: celular,
      cidade: cidade
    }

    const response = await api.post('/usuarios', dados)

    //console.log(response)

    if(response.status === 200){
      window.location.href = '/listar'
    } else {
      alert('Erro ao cadastrar')
    }

  }

  return (
    <>
      <h1 className="tipografia_form">Formulário de Cadastro</h1>
      <form onSubmit={handlerSubmit} >
        <TextField
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
          label="Nome"
          id="nome"
          name="nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={sobrenome}
          onChange={(event) => setSobrenome(event.target.value)}
          type="text"
          label="Sobrenome"
          id="sobrenome"
          name="sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          label="Email"
          id="email"
          name="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
          type="number"
          label="Telefone"
          id="telefone"
          name="telefone"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={celular}
          onChange={(event) => setCelular(event.target.value)}
          type="number"
          label="Celular"
          id="celular"
          name="celular"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
          type="text"
          label="Cidade"
          id="cidade"
          name="cidade"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default Form;
