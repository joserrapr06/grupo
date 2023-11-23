import * as React from "react";
import "../../../styles/App.css";
import ButtonMaterial from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addLead } from "../../../redux/action";
import { useDispatch } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ButtonAddLeads() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openSucces, setOpenSuccess] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const [addlead, setAddlead] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addlead.name || !addlead.email || !addlead.phone) {
      setOpenError(true);
    } else {
      dispatch(addLead(addlead));
      setAddlead({
        name: "",
        email: "",
        phone: "",
      });
      setOpenSuccess(true);
    }
  };

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
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form action="" onSubmit={handleSubmit}>
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
                      value={addlead.name}
                      onChange={(e) =>
                        setAddlead({ ...addlead, name: e.target.value })
                      }
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
                      value={addlead.email}
                      onChange={(e) =>
                        setAddlead({ ...addlead, email: e.target.value })
                      }
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
                      value={addlead.phone}
                      onChange={(e) =>
                        setAddlead({ ...addlead, phone: e.target.value })
                      }
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
                  type="submit"
                >
                  AÑADIR LEAD
                </ButtonMaterial>
              </div>
            </Box>
            <div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={openError}
                  autoHideDuration={4000}
                  onClose={handleCloseError}
                >
                  <Alert
                    onClose={handleCloseError}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Complete todos los campos
                  </Alert>
                </Snackbar>
              </Stack>
            </div>
            <div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={openSucces}
                  autoHideDuration={4000}
                  onClose={handleCloseSuccess}
                >
                  <Alert
                    onClose={handleCloseSuccess}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Lead creado correctamente
                  </Alert>
                </Snackbar>
              </Stack>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
