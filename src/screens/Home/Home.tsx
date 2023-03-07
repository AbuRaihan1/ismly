import { Box, Container, Typography } from "@mui/material";
import LoginAsOptions from "../../components/home-components/LoginAsOptions";
import Constants from "../../utils/Constants";
import "./Home.css";
const Home = () => {
  const loginTypes: {
    icon: any;
    type: string;
    navigationStack: any;
  }[] = [
    {
      icon: Constants.images.admin,
      navigationStack: Constants.navigationStack.adminLogin,
      type: "Admin",
    },
    {
      icon: Constants.images.campusAdmin,
      navigationStack: Constants.navigationStack.campusAdminLogin,
      type: "Campus Admin",
    },
    {
      icon: Constants.images.teacher,
      navigationStack: Constants.navigationStack.teacherLogin,
      type: "Teacher",
    },
    {
      icon: Constants.images.parents,
      navigationStack: Constants.navigationStack.parentsLogin,
      type: "Parents",
    },
    {
      icon: Constants.images.student,
      navigationStack: Constants.navigationStack.studentLogin,
      type: "Student",
    },
  ];

  const homeStyle = {
    loginAs: {
      marginTop: "100px",
      marginBottom: "20px",
      padding: "5px",
      borderRadius: "5px",
      textAlign: "center",
    },
  };
  return (
    <Container>
      <Box>
        <Typography variant="h4" sx={homeStyle.loginAs}>
          Ismly
        </Typography>

        {loginTypes.map((v) => {
          console.log(v);
          return <LoginAsOptions {...v} />;
        })}
      </Box>
    </Container>
  );
};

export default Home;
