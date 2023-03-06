import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Constants from "../../utils/Constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const homeStyle = {
    loginAs : {
      marginTop : '20px',
      background : '#eeebeb',
      padding : "5px",
      borderRadius : "5px",
      fontSize : "28px"
    }
  }
  return (
    <Container>
      <Box>
        <Typography variant="h4" sx={homeStyle.loginAs}>Login as a</Typography>

        <div className="login_list_wrapper">
          <div
            className="login_option"
            onClick={() => navigate(Constants.navigationStack.adminLogin)}
          >
            <div className="avatar_and_name">
              <img src={Constants.images.admin} alt="admin" />
              <p> Admin </p>
            </div>
            <div>
              <ArrowForwardIcon />
            </div>
          </div>

          <div
            className="login_option"
            onClick={() => navigate(Constants.navigationStack.campusAdminLogin)}
          >
            <div className="avatar_and_name">
              <img src={Constants.images.campusAdmin} alt="admin" />
              <p> Campus Admin </p>
            </div>
            <div>
              <ArrowForwardIcon />
            </div>
          </div>

          <div
            className="login_option"
            onClick={() => navigate(Constants.navigationStack.teacherLogin)}
          >
            <div className="avatar_and_name">
              <img src={Constants.images.teacher} alt="teacher" />
              <p> Teacher </p>
            </div>
            <div>
              <ArrowForwardIcon />
            </div>
          </div>

          <div
            className="login_option"
            onClick={() => navigate(Constants.navigationStack.parentsLogin)}
          >
            <div className="avatar_and_name">
              <img src={Constants.images.parents} alt="parents" />
              <p> Parents</p>
            </div>
            <div>
              <ArrowForwardIcon />
            </div>
          </div>

          <div
            className="login_option"
            onClick={() => navigate(Constants.navigationStack.studentLogin)}
          >
            <div className="avatar_and_name">
              <img src={Constants.images.student} alt="student" />
              <p> Student </p>
            </div>
            <div>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
