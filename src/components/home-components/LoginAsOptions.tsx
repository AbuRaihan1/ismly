/* eslint-disable import/no-anonymous-default-export */
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import "../../screens/Home/Home.css";

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
      <div className="login_option" onClick={() => navigate(navigationStack)}>
        <div className="avatar_and_name">
          <img src={icon} alt={type} />
          <p style={{ textTransform: "capitalize" }}> {type} </p>
        </div>
        <div>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
}
