import * as React from "react";
import '../../../styles/App.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Lote from "./Lotes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import Modal from "@mui/material/Modal";

import ButtonMaterial from '@mui/material/Button';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Carrusel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Splide
        options={{
          type: "slide",
          perPage: 1,
          perMove: 1,
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="img-carrusel-container">
            <Lote className="img-carrusel" onClick={handleOpen} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-carrusel-container">
            <Lote onClick={handleOpen} />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-carrusel-container">
            <Lote className="img-carrusel" onClick={handleOpen} />
          </div>
        </SplideSlide>
      </Splide>
      <div>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
<Box sx={style}>

  <div className="modal-header-left">
  <button className="close-button"  onClick={handleClose}>
      <h4>

    X
      </h4>
      </button>
  </div>
          <div >
            <div className="lote-modal">
               <div>
                <img src={require('../../../image/lote.png')} alt="not found" className="lote" />
               </div>

            <div className="lote-text">
              <h4>Lote: HVZ-1</h4>
              <h4>Area: 200 m2</h4>
              <h4>Precio m2: $100.00mxn</h4>
              <h4>Precio Total: $20,000.00mxn</h4>
    <ButtonMaterial sx={{ width: "100%", background: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000", background: "transparent" } }}>ASIGNAR LEAD</ButtonMaterial>
  <div className="ButtonMaterial"> 
  <ButtonMaterial sx={{ width: "100%", background: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000", background: "transparent" } }}>COPIAR LINK</ButtonMaterial>
  <ButtonMaterial sx={{ width: "100%", background: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000", background: "transparent" } }}>IR AL PAGO</ButtonMaterial>

  </div>
            </div>
            </div>
            
          </div>
          </Box>

        </Modal>
      </div>
    </div>
  );
}
