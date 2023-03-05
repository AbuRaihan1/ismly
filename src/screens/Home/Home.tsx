import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Constants from "../../utils/Constants";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <Typography variant="h2">Hi,</Typography>
        <Typography variant="body1">This is honme page</Typography>
        <Button
          onClick={() => navigate(Constants.navigationStack.studentLogin)}
        >
          Login as teacher
        </Button>
        <Button onClick={() => navigate("/login/student")}>
          Login as student
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
