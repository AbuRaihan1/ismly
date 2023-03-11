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
      justifyContent: "space-between",
      gap: "10px",
      border: `1px solid ${Constants.colors.lightTheme.palette.primary.main}`,
      margin: "5px 0",
      borderRadius: "5px",
      marginLeft: "-15px",
      padding: "0 10px",
      cursor: "pointer",
      fontWeight: "bold",
      height: "40px",
      width: "113%",
      transition: "all .2s ease-in-out",

      "&:hover": {
        background: `${Constants.colors.lightTheme.palette.primary.main}`,
        color: `${Constants.colors.lightTheme.palette.background.paper}`,
      },
    },
    addIcon: {
      backgroundColor: `${Constants.colors.lightTheme.palette.primary.main}`,
      color: "white",
      borderRadius: "50%",
      marginTop: "8px",
      border : `1px solid ${Constants.colors.lightTheme.palette.background.paper}`
    },
  };
  return (
    <div>
      <Box sx={drawerStyle.drawerItemStyle} className="drawer_option">
        <p>{name}</p>
        <p>
          {" "}
          <AddIcon sx={drawerStyle.addIcon} />
          {/* <EfImageView
            src={require("../../../assets/icons/instruction.png")}
            tint="blue"
            alt="test"
          /> */}
        </p>
      </Box>
    </div>
  );
};
export default CampusAdminDrawerData;
