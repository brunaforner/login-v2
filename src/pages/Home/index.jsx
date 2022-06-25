import { Route, Routes } from "react-router-dom";
import { LayoutComponents } from "../../components/layoutComponents";
import DespesasCadastrar from "./DespesasCadastro";
import DespesasListar from "./DespesasListar";
import { useState } from "react";

export const Home = () => {
  const TELA_LISTAR = 'listar';
  const TELA_CADASTRAR = 'cadastrar';
  const [tela, setTela] = useState(TELA_LISTAR);

  return (
    <LayoutComponents>
      <div className="home-container">
        <div className="home-content">
          <button onClick={function() { setTela(TELA_LISTAR)}}>Listar</button>
          <button onClick={function() { setTela(TELA_CADASTRAR)}}>Cadastrar</button>
          
          {(tela === TELA_LISTAR) && ( <DespesasListar />)}
          {(tela === TELA_CADASTRAR) && ( <DespesasCadastrar />)}



          {/*
          <h1 className="home-title">
            <span style={{ color: "#fff" }}>Finanças</span>
          </h1>
          <br />
          <br />
          <p style={{ color: "#f4f4f4" }} className="home-description">
            Aplicativo para auxiliar na organização financeiras.
          </p>
          */}
        </div>
      </div>
    </LayoutComponents>
  );
};
