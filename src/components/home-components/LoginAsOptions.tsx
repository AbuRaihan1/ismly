/* eslint-disable import/no-anonymous-default-export */
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../screens/Home/Home.css";
import Constants from "../../utils/Constants";
import EfImageView from "../EfImageView";

export default function ({
  icon,
  type,
  navigationStack,
}: {
  icon: any;
  type: string;
  navigationStack: any;
}) {
  const navigate = useNavigate();

  return (
    <div className="login_list_wrapper">
      <Box
        sx={{
          borderRadius: "50%",
          borderColor: Constants.colors.lightTheme.palette.primary.main,
          borderWidth: "5px",
        }}
      >
        {/* <EfImageView src={icon} alt={type} /> */}
      </Box>
      <div className="login_option" onClick={() => navigate(navigationStack)}>
        <div className="avatar_and_name">
          <Box
            sx={{
              borderRadius: "50%",
              borderColor: Constants.colors.lightTheme.palette.primary.main,
              borderWidth: "50px",
            }}
          >
            <div className="option_img_wrapper">
              <img src={icon} alt={type} className="option_img"/>
            </div>
          </Box>
          <p style={{ textTransform: "capitalize" }}> {type} </p>
        </div>
        <div>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
}
