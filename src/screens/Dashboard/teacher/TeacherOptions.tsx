import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import Constants from "../../../utils/Constants";

const TeacherOptions = ({ icon, name }: { icon: any; name: string }) => {
  const teacherDashboard = {
    teacherOption: {
      display: "flex",
      border: `0.5px solid ${Constants.colors.lightTheme.palette.secondary.main}`,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "all .2s ease-in-out",
      marginBottom: "15px",
    
    },

    optionAvatar: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontWeight: "bold",
    },
    avatarImg: {
      borderRadius: "50%",
      border: `1px solid ${Constants.colors.lightTheme.palette.primary.main}`,
      width: "50px",
      height: "50px",
    },
  };

  return (
    <Box className="optin_content" sx={teacherDashboard.teacherOption}>
      <Box sx={teacherDashboard.optionAvatar}>
        <Box component="img" src={icon} sx={teacherDashboard.avatarImg}></Box>
        <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
      </Box>
      <ArrowForwardIcon />
    </Box>
  );
};

export default TeacherOptions;
