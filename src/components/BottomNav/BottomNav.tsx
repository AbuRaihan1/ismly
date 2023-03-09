import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
const BottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="restore" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="restore" />
      <BottomNavigationAction icon={<ArchiveIcon />} label="restore" />
    </BottomNavigation>
  );
};

export default BottomNav;
