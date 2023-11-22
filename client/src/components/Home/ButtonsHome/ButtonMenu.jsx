import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "../../../styles/App.css";

export default function ButtonMenu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono calendario.png")}
                  alt="Not found"
                  className="icons-menu"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">CALENDARIO</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <hr />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono menú _cotizar_.png")}
                  alt="Not found"
                  className="icons-menu"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">COTIZAR</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <hr />

       
          <ListItem   disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono contenido.png")}
                  alt="Not Found"
                  className="icono-navbar"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">CONTENIDO</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <hr />
        </List>

        <ListItem sx={{ position: "absolute", bottom: 0 }}   disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../../../image/ícono ayuda.png")} alt="Not found" className="icono-navbar" />

              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">AYUDA</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>

       
      </Box>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <img
              srcset={require("../../../image/Botón Menú_.png")}
              alt="Not Found"
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
