import Menu from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";

export default function TemporaryDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
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
          <Typography>drawer item</Typography>
        </Box>
      </Drawer>
    </>
  );
}
