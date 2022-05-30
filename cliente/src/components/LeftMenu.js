import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import "./LeftMenu.css";

const drawerWidth = 240;

export default function LeftMenu() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <h1 className="Title">DigiBank</h1>
      </Toolbar>
      <Divider />
      <List style={{ marginLeft: "15px" }}>
        <ListItem
          key={"Productos"}
          disablePadding
          style={{
            backgroundColor: "lightskyblue",
            borderRadius: "50px 0px  0px 50px",
          }}
        >
          <ListItemButton
            style={{
              borderRadius: "50px 0px  0px 50px",
            }}
          >
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={"Productos"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
