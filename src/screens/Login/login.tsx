// import { useParams } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import LoadingView from "../../components/loading-view";
import Constants from "../../utiils/Constants";
import { loginType } from "../../utiils/ConstType";
import Utils from "../../utiils/utils";

import "./login.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import ResponsiveAppBar from '../../components/AppBar/AppBar'
export default function LoginScreen() {
  const { type } = useParams<{ type: loginType }>();

  const [goBack, setGoback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log(type);

  useEffect(() => {
    if (goBack) {
      navigate(Constants.navigationStack.home);
    }
  }, [goBack]);

  const functionHandler = {
    loginHandler: () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    },
  };


  const styles = {
    logginButton: {
      width: "100%",
    },
  };

  // if (isLoading) {
  //   return <LoadingView />;
  // }

  return (
    <>
      {isLoading && <LoadingView />}
      {Utils.isValidLoginType(type) ? (
        <div>
          {/* <ResponsiveAppBar /> */}
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={() => setGoback(true)}>
                <Box>back</Box>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container>
            <div className="login_form_wrapper">
              <div className="login_form">
                <LockIcon className="lockIcon" />
                <div className="inputs">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                    className="input_field"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="email"
                    required
                    className="input_field"
                  />
                  <div className="checked_remember">
                    <Checkbox
                      {...label}
                      // style={{
                      //   color: "#00e676",
                      // }}
                    />
                    <Typography>remember me</Typography>
                  </div>
                  <Button
                    onClick={functionHandler.loginHandler}
                    sx={styles.logginButton}
                    variant="contained"
                  >
                    sign in
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Navigate to={Constants.navigationStack.home} />
      )}
    </>
  );
}
