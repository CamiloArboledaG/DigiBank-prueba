import * as React from "react";
import data from "../data";
import "./Card.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";

export default function BasicCard(props) {
  const [imagen, setImagen] = useState(imagenSetter(props));
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [textoAdvertencia, settextoAdvertencia] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const ChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    settextoAdvertencia("");
  };

  // button axios post request
  const handleClickPost = () => {
    axios
      .post("http://localhost:3000/", {
        nombre: input,
        id: props.data.id,
      })
      .then((response) => {
        //refresh page
        window.location.reload(); 
      })
      .catch((error) => {
        settextoAdvertencia("Error al agregar producto");
        console.error(error);
      });
  };

  function imagenSetter(props) {
    if (props.data.nombre_tipo === "Préstamo Hipotecario") {
      return data.casa;
    } else if (props.data.nombre_tipo === "Préstamo Automotor") {
      return data.carro;
    } else {
      return data.cuenta;
    }
  }

  return (
    <>
      <button className="contenedorTarjeta">
        <div className="contenedorImagen">
          <img alt="Imagen referencia" src={imagen} className="imagen" />
        </div>
        <div className="contenedorInfo">
          <h3 className="title">{props.data.nombre}</h3>
          <div>
            <h4 className="subtitle">{props.data.nombre_tipo}</h4>
            <p className="montoMax">Monto Max: {props.data.monto_max}</p>
          </div>
          <a className="Button" onClick={handleClickOpen}>
            Editar
          </a>
        </div>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Editar nombre del producto "{props.data.nombre}"
        </DialogTitle>
        <DialogContent>
          <input
            type="text"
            placeholder="Nombre"
            className="inputText"
            onChange={ChangeInput}
          />
          <p style={{ color: "red" }}>{textoAdvertencia}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClickPost} autoFocus>
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
