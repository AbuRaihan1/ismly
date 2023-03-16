import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
// import EfImageView from "../../../components/EfImageView";
import Constants from "../../../utils/Constants";

const CampusAdminDrawerData = ({ icon, name }: { icon: any; name: string }) => {
  <style>.teacherOption:hover{}</style>;
  const drawerStyle = {
    drawerItemStyle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginLeft: "-15px",
      padding: "0 10px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all .2s ease-in-out",
      "&:hover": {
        color: `${Constants.colors.lightTheme.palette.primary.main}`,
      },
    },
    addIcon: {
      backgroundColor: `${Constants.colors.lightTheme.palette.primary.main}`,
      color: "white",
      borderRadius: "50%",
    },
  };
  return (
    <div>
      <Box sx={drawerStyle.drawerItemStyle} className="drawer_option">
        <AddIcon sx={drawerStyle.addIcon} />
        <p style={{ margin: "0px" }}>{name}</p>
        <p>
          {/* <EfImageView
            src={require("../../../assets/icons/instruction.png")}
            tint="blue"
            alt="test"
          />  */}
        </p>
      </Box>
    </div>
  );
};
export default CampusAdminDrawerData;
