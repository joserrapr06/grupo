import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../styles/App.css";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClientLead, AllLead } from "../redux/action";

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
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const clientLead = useSelector((state) => state.clientLead);
  const allLead = useSelector((state) => state.allLead);

  React.useEffect(() => {
    dispatch(ClientLead(clientId));
    dispatch(AllLead());
  }, [dispatch, clientId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {/* Verifica si el clientId está en allLead */}
        {allLead.some((lead) => lead.id === clientId) && (
          <Link to={`/home/leads/${clientId}`} className="icons-table-leads">
            <Button onClick={handleOpen} sx={{ fontSize: 30, color: "#000" }}>
              <GrContact />
            </Button>
          </Link>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="table-modal-contact">
              {/* Resto del contenido del modal */}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
