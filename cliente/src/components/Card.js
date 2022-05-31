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
  const [openInfo, setopenInfo] = useState(false);
  const [input, setInput] = useState("");
  const [InfoTotal, setInfoTotal] = useState({
    producto: [],
    segmento: [],
    categoria: [],
    deposito: [],
    prestamo: [],
  });
  const [textoAdvertencia, settextoAdvertencia] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenInfo = () => {
    setopenInfo(true);
  };

  const ChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    settextoAdvertencia("");
  };
  const handleCloseInfo = () => {
    setopenInfo(false);
  };

  // button axios post request
  /**
   * It takes the value of the input and sends it to the server.
   */
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

  //handle click button to get all about product axios

  const handleClickInfo = () => {
    axios
      .get("http://localhost:3000/" + props.data.id)
      .then((response) => {
        setInfoTotal(response.data);
        console.log(response.data);
        setopenInfo(true);
      })
      .catch((error) => {
        settextoAdvertencia("Error al obtener informacion del producto");
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
      <div className="contenedorTarjeta">
        <div className="contenedorImagen">
          <img alt="Imagen referencia" src={imagen} className="imagen" />
        </div>
        <div className="contenedorInfo">
          <h3 className="title">{props.data.nombre}</h3>
          <div>
            <h4 className="subtitle">{props.data.nombre_tipo}</h4>
            <p className="montoMax">Monto Max: {props.data.monto_max}</p>
          </div>

          <button className="Button" onClick={handleClickInfo}>
            Ver más
          </button>
          <button
            className="Button"
            style={{ backgroundColor: "lightskyblue", color: "white" }}
            onClick={handleClickOpen}
          >
            Editar
          </button>
        </div>
      </div>
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
      <Dialog open={openInfo} onClose={handleCloseInfo}>
        <div className="contenedorVentana">
          <div className="contenedorImagenVentana">
            <img
              alt="Imagen referencia"
              src={imagen}
              className="imagenVentana"
            />
          </div>
          <div className="contenedorInfoVentana">
            <h3 className="title">{props.data.nombre}</h3>
            <h2 className="subtitle">{props.data.nombre_tipo}</h2>
            <p className="montoMax">Monto Max: {props.data.monto_max}</p>
            <hr className="divider"></hr>
            <div className="contenedorItems">
              <h2 className="ItemTitle">Segmento</h2>
              {InfoTotal.segmento.map((segmento, index) => (
                <p key={index} className="item">
                  {segmento.nombre}
                </p>
              ))}
            </div>
            <hr className="divider"></hr>
            {InfoTotal.deposito.length > 0 ? (
              <div className="contenedorItems">
                <h2 className="ItemTitle">Depósito</h2>
                {InfoTotal.deposito.map((deposito, index) => (
                  <div key={index}>
                    <p className="item">{deposito.moneda}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="contenedorprestamos">
                <div className="contenedorItems">
                  <h2 className="ItemTitle">Categoría</h2>
                  {InfoTotal.categoria.map((categoria, index) => (
                    <p key={index} className="item">
                      {categoria.nombre}
                    </p>
                  ))}
                </div>
                <hr className="divider"></hr>
                <div className="contenedorItems">
                  <div>
                    <h2 className="ItemTitle">Préstamo</h2>
                    <p className="montoMax">Rango de cuotas</p>
                  </div>
                  {InfoTotal.prestamo.map((prestamo, index) => (
                    <div key={index}>
                      <p className="item">
                        {prestamo.cuota_min} - {prestamo.cuota_max}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleCloseInfo}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
