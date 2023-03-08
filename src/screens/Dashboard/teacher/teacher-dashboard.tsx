import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Constants from "../../../utils/Constants";
import "./teacher.css";
const TeacherDashboard = () => {
  const teacherDashboard = {
    teacherOption: {
      display: "flex",
      border: `1px solid ${Constants.colors.lightTheme.palette.secondary.main}`,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "all .2s ease-in-out",
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
    },

    hover: {
      "&:hover": {
        backgroundColor: "rgb(7, 177, 77, 0.42)",
      },
    },
  };

  return (
    <Container>
      <Box className="teacher_option">
        <Box className="optin_content" sx={teacherDashboard.teacherOption}>
          <Box sx={teacherDashboard.optionAvatar}>
            <Box
              component="img"
              src={Constants.images.student}
              sx={teacherDashboard.avatarImg}
            ></Box>

            <Typography style={{ fontWeight: "bold" }}>Students</Typography>
          </Box>
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Container>
  );
};

export default TeacherDashboard;
