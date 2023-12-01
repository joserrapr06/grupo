import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Users } from "../../redux/action";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import ButtonMaterial from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(Users());
  }, [dispatch]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    if (data.password === data.confirmPassword) {
      dispatch(register(data));
    } else {
      return false;
    }
    setTimeout(async () => {
      navigate("/login");
    }, 1000);
  };


  const handleName= (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleLatName = (e) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };
  const handleConfirmPassword = (e) => {
    setData({
      ...data,
      confirmPassword: e.target.value,
    });
  };
  const handlePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <div className="Logo-login">
          <img src={require("../../image/Logo.png")} alt="Not found" />
     
        </div>
       <div>
       <Link to="/" className="btn-back">
            <ButtonMaterial
              component="label"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{
                width: 100,
                top: 190,
                '@media screen and (max-width: 1800px)': {
                  // Estilos específicos para pantallas con un ancho máximo de 600px
                  top: 140,
                },
                '@media screen and (max-width: 768px)': {
                  // Estilos específicos para pantallas con un ancho máximo de 600px
                  top: 130,
                },
              }}
            >
              Volver
            </ButtonMaterial>
          </Link>
       </div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          className="login-container"
        >
          <div className="login-box">
            <div
            // Establece el ancho completo para el label
            >
              <label>NOMBRE</label>

              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div
            // Establece el ancho completo para el label
            >
              <label>APELLIDO</label>

              <Input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleLatName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div>
              <label>EMAIL</label>
              <Input
                type="email"
                name="email"
                onChange={handleEmail}
                value={data.email}
                style={{
                  borderColor: "black",
                  borderWidth: "3px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div
            // Establece el ancho completo para el label
            >
              <label>CONTRASEÑA</label>

              <Input.Password
                type="password"
                name="password"
                value={data.password}
                onChange={handlePassword}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
         
            <div
            // Establece el ancho completo para el label
            >
              <label>CONFIRMAR CONTRASEÑA</label>

              <Input.Password
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleConfirmPassword}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>

            <div
            // Establece el ancho completo para el label
            >
              <label>N* DE TELÉFONO</label>

              <Input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handlePhone}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>

            <div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderColor: "black",
                    border: "none",
                    backgroundColor: "#00807772",
                    width: "100%",
                    borderRadius: 0,
                    outline: "none",
                  }}
                  onClick={handleClick}
                >
                  REGISTRATE
                </Button>
                {data.password !== data.confirmPassword && (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Las contraseñas no coinciden
                    </Alert>
                  </Snackbar>
                )}
              </Stack>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Register;
