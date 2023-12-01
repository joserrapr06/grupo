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
import { GrContact } from "react-icons/gr";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,

  bgcolor: "background.paper",
  border: "5px solid #000",
  boxShadow: 24,
  p: 8,
};

export default function ContactButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{fontSize: 30, color: "#000"}}>
   <GrContact/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="table-modal-contact">
            <div className="avatar-contact">
              <Stack direction="row" spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, border: "3px solid #000",  }}
                />
              </Stack>
              <span className="name-table-modal">
                Jose Antonio Dominguez clare
              </span>
            </div>
            <div className="lead-modal-contact">
              <div>
                <strong>TELÉFONO</strong> : +541161361408
              </div>
              <div>
                <strong>EMAIL</strong> :
                <input type="text" className="lead-input-contact" value="jose@gmail.com"/>
            
              </div>
              <div className="icons-contact-container">
              <LuPhoneCall className="icons-contact"/>
              <TfiCommentAlt className="icons-contact"/>
              <FaWhatsapp className="icons-contact"/>
              <MdOutlineEmail className="icons-contact"/>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
