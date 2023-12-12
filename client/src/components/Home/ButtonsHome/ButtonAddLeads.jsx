import * as React from "react";
import "../../../styles/App.css";
import ButtonMaterial from "@mui/material/Button";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { addLead } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { useDropzone } from "react-dropzone";



const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

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
  objectFit: "cover",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ChildModal() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [identifyImage, setIdentifyImage] = React.useState(null);
  const [addressImage, setAddressImage] = React.useState(null);
  const [addlead, setAddlead] = React.useState({
    identify_oficial: "",
    proof_of_address: "",
  });
  const [imagePreview, setImagePreview] = React.useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onDrop = (acceptedFiles) => {
    // Puedes hacer algo con los archivos, como cargarlos a un servidor
    // Aquí, simplemente asumiremos que el primer archivo es una imagen y lo mostraremos
    const uploadedImageFile = acceptedFiles[0];


    if (uploadedImageFile) {
      const imageUrl = URL.createObjectURL(uploadedImageFile);
      setIdentifyImage(imageUrl);
    }
  };



  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });



  const dropzoneStyles = (theme, isDragActive) => ({
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", addlead.avatar);
    formData.append("name", addlead.name);
  

    try {
      dispatch(addLead(addlead));

    } catch (error) {
      console.error("Error:", error);
    }
  
 
  };

  const handleImageChange = React.useCallback(
    (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        getBase64(file, (imageUrl) => {
          setImagePreview(imageUrl);
          setAddlead({
            ...addlead,
            identify_oficial: file,
          });
        });
      }
    },
    [addlead]
  );
  return (
    <>

    <React.Fragment>
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
        onClick={handleOpen}
      >
        SUBIR DOCUMENTOS
      </ButtonMaterial>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 650, border: "5px solid #000" }}>
          <div className="input-img">
            <div>
              <Typography
                sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
              >
                IDENTIFICACIÓN OFICIAL
              </Typography>
              <Card
                sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                  {...getRootProps()}
                  style={dropzoneStyles(theme, isDragActive)}
                >
                  <input {...getInputProps()} />
                  {identifyImage ? (
                    <img
                      src={identifyImage}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : isDragActive ? (
                    <Typography variant="body1" component="div" color="primary">
                      Suelta la imagen aquí...
                    </Typography>
                  ) : (
                    <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Typography
                sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
              >
                COMPROBANTE DE DOMICILIO
              </Typography>
              <Card
                sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                  {...getRootProps()}
                  style={dropzoneStyles(theme, isDragActive)}
                >
                  <input {...getInputProps()} />
                  {addressImage ? (
                    <img
                      src={addressImage}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : isDragActive ? (
                    <Typography variant="body1" component="div" color="primary">
                      Suelta la imagen aquí...
                    </Typography>
                  ) : (
                    <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Typography
              sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
            >
              IDENTIFICACIÓN OFICIAL
            </Typography>
            <Card sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
              </CardContent>
            </Card>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
      
    </>

  );
}
export default function ButtonAddLeads() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openDoc, setOpenDoc] = React.useState(false);

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
      dispatch(addLead(addlead));
      setAddlead({
        name: "",
        email: "",
        phone: "",
      });
      setOpenSuccess(true);
      setTimeout(async () => {
        window.location.reload();
      }, 1000);
  };


  const handleChange = (e) => {
    const {name, value} = e.target
    setAddlead({
      ...addlead,
      [name]: value
    })
  }
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
                      id="name"
                      name="name"
                      className="input-bottom-border"
                      value={addlead.name}
                      onChange= {handleChange}
                    />
                  </div>
                </div>
                <div className="input-label">
                  <label htmlFor="">EMAIL:</label>
                  <div className="input-container">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-bottom-border"
                      value={addlead.email}
                      onChange= {handleChange}
                    />
                  </div>
                </div>
                <div className="input-label">
                  <label htmlFor="nombre">TELÉFONO:</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="input-addLead "
                      value={addlead.phone}
                      onChange= {handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="ButtonMaterial">
                <ChildModal />

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
