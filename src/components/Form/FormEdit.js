import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { TextField, Button } from "@material-ui/core";
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import api from "../../api";
import "./style.css";

function FormEdit() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    api.get(`/usuarios/${id}`)
        .then(response => {
            setNome(response.data.nome)
            setSobrenome(response.data.sobrenome)
            setEmail(response.data.email)
            setTelefone(response.data.telefone)
            setCelular(response.data.celular)
            setCidade(response.data.cidade)
        })
        .catch(erro => console.log(erro))
  },[id])


  async function handlerSubmit(event) {
    event.preventDefault();

    const dados = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      celular: celular,
      cidade: cidade,
    };

    try{
      const response = await api.put(`/usuarios/${id}`, dados);
      toast.success(`Usuário ${response.data.nome} editado com sucesso`, {
        position: toast.POSITION.TOP_CENTER
      })
      history.push("/listar")
    }catch(erro){
      console.log(erro)
      toast.error(`Erro ao editar usuário`, {
        position: toast.POSITION.TOP_CENTER
      })
    }


    /*
    if (response.status === 200) {
      window.location.href = "/listar";
      console.log("Usuário editado!!");
    } else {
      alert("erro ao cadastrar");
    }

    /*
    api.post('/usuarios', dados)
        .then(() => {
          alert('Dados cadastrados com sucesso')
          //response.redirect(confirmCad)
          //return <Link to="/confirmCad"/>
        })
        .catch(erro => console.log(erro))
    */
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
        />
        <div className="button_salvar">
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormEdit;
