import * as React from "react";
import "../../../styles/App.css";
import ButtonMaterial from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ButtonAddLeads() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={() => handleOpen(true)}>
        <img
          src={require("../../../image/Botón añadir lead.png")}
          alt="Not found"
          className="icono-navbar"
        />
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <div className="modal-header-left">
                <button
                  className="close-button"
                  onClick={() => handleClose(false)}
                >
                  <h4>X</h4>
                </button>
              </div>
              <div className="input-addLeads">
                <div className="input-label">
                  <label htmlFor="nombre">NOMBRE:</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="nombre"
                      className="input-bottom-border"
                    />
                  </div>
                </div>
                <div className="input-label">
                  <label htmlFor="nombre">EMAIL:</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="nombre"
                      className="input-bottom-border"
                    />
                  </div>
                </div>
                <div className="input-label">
                  <label htmlFor="nombre">TELÉFONO:</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="nombre"
                      className="input-bottom-border"
                    />
                  </div>
                </div>
              </div>

              <div className="ButtonMaterial">
                <ButtonMaterial
                  sx={{
                    height: "2%",
                    width: "150%",
                    background: "transparent",
                    color: "#000",
                    border: "2px solid #000",
                    "&:hover": {
                      border: "2px solid #000",
                      background: "transparent",
                    },
                  }}
                >
                  SUBIR DOCUMENTOS
                </ButtonMaterial>
                <ButtonMaterial
                  sx={{
                    height: "2%",
                    width: "100%",
                    background: "transparent",
                    color: "#000",
                    border: "2px solid #000",
                    "&:hover": {
                      border: "2px solid #000",
                      background: "transparent",
                    },
                  }}
                >
                  AÑADIR LEAD
                </ButtonMaterial>
              </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
