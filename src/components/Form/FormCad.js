import React from "react";
import { TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api";
import "./style.css";

function FormCad() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/usuarios", data);
      toast.success(`Usuário ${response.data.nome} cadastrado!`, {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/listar");
    } catch (error) {
      toast.error("Erro ao cadastrar");
      return error.message.response.data;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="Nome"
          id="nome"
          name="nome"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register({ required: "Esse campo é obrigatório", minLength: {
            value: 5,
            message: "Mínimo 5 caracteres"
          } })}
        />
        {errors.nome && <p className="message_error">{errors.nome.message}</p>}
        <TextField
          type="text"
          label="Sobrenome"
          id="sobrenome"
          name="sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register({ required: "Esse campo é obrigatório" })}
        />
        {errors.sobrenome && <p className="message_error">{errors.sobrenome.message}</p>}
        <TextField
          type="email"
          label="Email"
          id="email"
          name="email"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register({ required: "Esse campo é obrigatório" })}
        />
        {errors.email && <p className="message_error">{errors.email.message}</p>}
        <TextField
          type="number"
          label="Telefone"
          id="telefone"
          name="telefone"
          variant="outlined"
          margin="normal"
          inputRef={register({ required: "Esse campo é obrigatório" })}
        />
        {errors.telefone && <p className="message_error">{errors.telefone.message}</p>}
        <TextField
          type="number"
          label="Celular"
          id="celular"
          name="celular"
          variant="outlined"
          margin="normal"
          inputRef={register({ required: "Esse campo é obrigatório" })}
        />
        {errors.celular && <p className="message_error">{errors.celular.message}</p>}
        <TextField
          type="text"
          label="Cidade"
          id="cidade"
          name="cidade"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register({ required: "Esse campo é obrigatório" })}
        />
        {errors.cidade?.type === "required" && <p className="message_error">{errors.cidade.message}</p>}
        <div className="button_salvar">
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormCad;
