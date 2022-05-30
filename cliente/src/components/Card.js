import * as React from "react";
import CardContent from "@mui/material/CardContent";
import data from "../data";
import "./Card.css";

export default function BasicCard() {
  return (
    <a className="contenedorTarjeta">
      <CardContent style={{ padding:"0px" }}>
        <div className="contenedorImagen">
          <img alt="Imagen referencia" src={data.casa} className="imagen" />
        </div>
        <div className="contenedorInfo">
          <h3 className="title">Tu casa </h3>
          <h4 className="subtitle">Préstamo Hipotecario</h4>
          <button className="Button" >Editar</button>
        </div>
      </CardContent>
    </a>
  );
}
