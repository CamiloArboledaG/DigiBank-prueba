import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Box from "@mui/material/Box";
import Card from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [list, setList] = useState([]);
  const [filter, setfilter] = useState("");

  const handleChange = (event) => {
    setfilter(event.target.value);
    axios
      .get("http://localhost:3000/" + event.target.value)
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <LeftMenu />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <div className="cotenedortitleHeader">
          <h1 className="titleHeader">Productos de DigiBank!</h1>
          <div className="cotenedorsubtitleHeader">
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Filtros</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                label="filtros"
                onChange={handleChange}
              >
                <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                <MenuItem value={"categoria/1"}>Casa</MenuItem>
                <MenuItem value={"categoria/2"}>Apartamento</MenuItem>
                <MenuItem value={"categoria/3"}>Campo</MenuItem>
                <MenuItem value={"categoria/4"}>Autos</MenuItem>
                <MenuItem value={"categoria/5"}>Camionetas</MenuItem>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <MenuItem value={"tipo/3"}>Préstamo Hipotecario</MenuItem>
                <MenuItem value={"tipo/2"}>Préstamo Automotor</MenuItem>
                <MenuItem value={"tipo/1"}>Cuentas Vista</MenuItem>
                <InputLabel id="demo-simple-select-label">Segmento</InputLabel>
                <MenuItem value={"segmento/1"}>Jóvenes</MenuItem>
                <MenuItem value={"segmento/2"}>Standard</MenuItem>
                <MenuItem value={"segmento/3"}>Premium</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="contenedorTarjetas">
          {list.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default App;
