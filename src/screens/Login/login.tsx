import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
import cookie from "react-cookies";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import { v4 as uuid } from "uuid";
import LoadingView from "../../components/loading-view";
import Constants from "../../utils/Constants";
import { loginType } from "../../utils/ConstType";
import Utils from "../../utils/utils";
import "./login.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function LoginScreen() {
  const { type } = useParams<{ type: loginType }>();

  const [goBack, setGoback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (goBack) {
      navigate(Constants.navigationStack.home);
    }
  }, [goBack]);

  const functionHandler = {
    loginHandler: (e: any) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      // email validation
      const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!isValidEmail.test(email)) {
        setIsPasswordError("invalid email");
      }

      // password valiation
      const oneWordUpperCase = /(?=.*[A-Z])/;
      const eightCharacter = /.{8}$/;
      const oneDigit = /(?=.*[0-9])/;

      if (!eightCharacter.test(password)) {
        setIsPasswordError("password should be minimum 8 character");
        return;
      } else if (!oneWordUpperCase.test(password)) {
        setIsPasswordError("use at least one capital letter");
        return;
      } else if (!oneDigit.test(password)) {
        setIsPasswordError("use at least one digits");
        return;
      } else {
        // setIsPasswordError("login success");
        setIsLoading(true);

        const token = uuid();
        // alert(token);

        //save the token to session
        cookie.save(Constants.key.CookiesKey.loginToken, token, {
          maxAge: 3600 * 24 * 60,
        });

        axios
          .post(Constants.apiEnpoint.endPointUrl + "/login", {
            username: email,
            password: password,
            token: token,
          })
          .then((response) => {
            // Handle successful response
            console.log(response.data);
            if (response.data === Constants.key.responseType.success) {
              // navigate
            }
          })
          .catch((error) => {
            // Handle error response
            setIsLoading(false);
            // alert("login failed : " + error);
            const response = "success";

            if (response === Constants.key.responseType.success) {
              navigate(Constants.navigationStack.dashboard);
            } else {
              alert("failed to login. try again")
            }

            console.error(error);
          });
      }
    },
  };

  const styles = {
    logginButton: {
      width: "100%",
      margin: "10px 0px",
    },
    forgotPassword: {
      cursor: "pointer",
      textTransform: "capitalize",
    },
    passwordError: {
      marginTop: "10px",
      color: "red",
      textTransform: "capitalize",
      fontWeight: "bold",
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
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={() => setGoback(true)}>
                <Box>
                  <ArrowBackIosIcon />
                </Box>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container>
            <form action="" onSubmit={functionHandler.loginHandler}>
              <div className="login_form_wrapper">
                <div className="login_form">
                  <LockIcon className="lockIcon" />

                  <div className="inputs">
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="input_field"
                      name="email"
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      className="input_field"
                      name="password"
                    />
                    <Typography sx={styles.passwordError}>
                      {isPasswordError}
                    </Typography>
                    <div className="checked_remember">
                      <Checkbox {...label} />

                      <Typography>remember me</Typography>
                    </div>
                    <Button
                      sx={styles.logginButton}
                      variant="contained"
                      type="submit"
                    >
                      sign in
                    </Button>
                    <Button variant="text" sx={styles.forgotPassword}>
                      Forgot Password?
                    </Button>
                    <Button variant="outlined" sx={styles.logginButton}>
                      Create Account
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Container>
        </div>
      ) : (
        <Navigate to={Constants.navigationStack.home} />
      )}
    </>
  );
}
