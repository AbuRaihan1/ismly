import Box from "@mui/material/Box";
import Constants from "../../../utils/Constants";
import AddIcon from "@mui/icons-material/Add";

const CampusAdminDrawerData = ({ icon, name }: { icon: any; name: string }) => {
  const drawerStyle = {
    drawerItemStyle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: `1px solid ${Constants.colors.lightTheme.palette.primary.main}`,
      margin: "5px 0",
      borderRadius: "5px",
      marginLeft: "-10px",
      padding: "0 10px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    addIcon: {
      backgroundColor: `${Constants.colors.lightTheme.palette.primary.main}`,
      color: "white",
      borderRadius: "50%",
      marginTop: "8px",
    },
  };
  return (
    <div>
      <Box sx={drawerStyle.drawerItemStyle} className="drawer_option">
        <p>
          {" "}
          <AddIcon sx={drawerStyle.addIcon} />
        </p>
        <p>{name}</p>
      </Box>
    </div>
  );
};
export default CampusAdminDrawerData;
