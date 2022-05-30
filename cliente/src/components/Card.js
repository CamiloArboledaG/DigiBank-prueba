import * as React from "react";
import data from "../data";
import "./Card.css";

export default function BasicCard(props) {
  const [imagen, setImagen] = React.useState(imagenSetter(props));

  function imagenSetter(props) {
    if(props.data.nombre_tipo === "Préstamo Hipotecario"){
      return data.casa
    }else if(props.data.nombre_tipo === "Préstamo Automotor"){
      return data.carro
    }else{
      return data.cuenta
    }
  }

  return (
    <a className="contenedorTarjeta">
      <div className="contenedorImagen">
        <img alt="Imagen referencia" src={imagen} className="imagen" />
      </div>
      <div className="contenedorInfo">
        <h3 className="title">{props.data.nombre}</h3>
        <div>
          <h4 className="subtitle">{props.data.nombre_tipo}</h4>
          <p className="montoMax">Monto Max: {props.data.monto_max}</p>
        </div>
        <button className="Button">Editar</button>
      </div>
    </a>
  );
}
