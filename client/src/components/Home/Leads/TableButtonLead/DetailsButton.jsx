import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../../../../styles/App.css";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "5px solid #000",
  boxShadow: 24,
  p: 8,

  "@media (max-width: 1440px)": {
    width: "95%",
    height: "95%",
  },
};
const drawerWidth = 300;

function DetailsButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <div className="avatar-details">
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100, border: "3px solid #000" }}
            />
          </Stack>
          <span className="details-name-modal">
            Jose Antonio Dominguez clare
          </span>
        </div>
        <div className="linea-account"></div>
        <div className="status-detail-lead">
          <div>
            ESTATUS: <span className="interesed">INTERESADO</span>
          </div>
          <div>
            CONTRATO: <span className="no-env">NO ENVIADO</span>
          </div>
          <div>
            MEDIO: <span className="whatsapp">WHATSAPP</span>
          </div>
          <div>
            ASESOR: <span>NAYELI S.</span>
          </div>
        </div>
      </List>
      <div className="icons-details-container">
        <LuPhoneCall className="icons-details" />
        <TfiCommentAlt className="icons-details" />
        <FaWhatsapp className="icons-details" />
        <MdOutlineEmail className="icons-details" />
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Button onClick={handleOpen} sx={{fontSize: 30, color: "#000"}}>
        <AiOutlineSolution />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CssBaseline />

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>

          <div className="details-container">
            <div className="details-input-container">
              <div className="details-input">
                <div className="input-details">
                  <label>NOMBRE</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>NACIONALIDAD</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>CURP</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>RFC</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>ESTADO CIVIL</label>
                  <input type="text" className="lead-input-detail" />
                </div>
              </div>

              <div className="details-input">
                <div className="input-details">
                  <label> N* DE TELEFONO</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>EMAIL</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>PAÍS DE ORIGEN</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>OCUPACIÓN</label>
                  <input type="text" className="lead-input-detail" />
                </div>
                <div className="input-details">
                  <label>LOTE DE INTERÉS</label>
                  <input type="text" className="lead-input-detail" />
                </div>
              </div>
            </div>

            <div className="details-input-container2">
              <div className="details-input2">
                <div className="input-details">
                  <label>NOMBRE</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>NACIONALIDAD</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>CURP</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
              </div>
            </div>

            <div className="details-textarea">
              <div className="details-input2">
                <div className="textarea-details">
                  <label>DIRECCIÓN</label>
                  <textarea type="text" className="lead-input-textarea" />
                </div>
              </div>
            </div>
              
              <div className="text-details">
                <strong>El domicilio es el mismo para el envío de contrato?</strong>
                <input type="checkbox" name="" id="" />
              </div>

              <div className="details-input-container2">
              <div className="details-input2">
                <div className="input-details">
                  <label>NOMBRE</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>NACIONALIDAD</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>CURP</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
              </div>
            </div>

            <div className="details-textarea">
              <div className="details-input2">
                <div className="textarea-details">
                  <label>DIRECCIÓN</label>
                  <textarea type="text" className="lead-input-textarea" />
                </div>
              </div>
            </div>



          </div>

          <div className="btn-add-details ">
            <Button
              variant="contained"
              sx={{ width: "20%", left: "50%", transform: "translateX(-20%)" }}
            >
              GUARDAR
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
DetailsButton.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DetailsButton;
