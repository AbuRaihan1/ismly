import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import CampusAdminDrawerData from "../../screens/Dashboard/CampusAdmin/CampusAdminDrawerData";
export default function TemporaryDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const campusAdminFeature: {
    icon: any;
    name: any;
  }[] = [
    {
      icon: "icon",
      name: "Add Teachers",
    },
    {
      icon: "icon",
      name: "Add Students",
    },
    {
      icon: "icon",
      name: "Add Classes",
    },
  ];
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsDrawerOpen(!false)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="left" role="presentation">
          {campusAdminFeature.map((item, idx) => {
            return <CampusAdminDrawerData {...item} />;
          })}
        </Box>
      </Drawer>
    </>
  );
}
