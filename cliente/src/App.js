import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Box from "@mui/material/Box";
import Card from "./components/Card";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <LeftMenu />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default" }}
      >
        <div className="cotenedortitleHeader">
          <h1 className="titleHeader">Productos de DigiBank!</h1>
        </div>
        <div className="contenedorTarjetas">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Box>
    </Box>
  );
}

export default App;
