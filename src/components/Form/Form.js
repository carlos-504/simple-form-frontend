import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

function Form({ enviarForm }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");
  const history = useHistory();

  return (
    <>
      <h1 className="tipografia_form">Formulário de Cadastro</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          enviarForm({ nome, sobrenome, email, telefone, celular, cidade });
        }}
      >
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
        <Button onClick={() => history.push({
          pathname: '/listar',
          dados: { nome, sobrenome, email, telefone, celular, cidade }
        })}  variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </>
  );
}

export default Form;
