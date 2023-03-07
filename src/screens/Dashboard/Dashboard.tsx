import axios from "axios";
import React from "react";
import { load } from "react-cookies";
import LoadingView from "../../components/loading-view";
import Constants from "../../utils/Constants";
import { loginType } from "../../utils/ConstType";

//cookie.load("login-type");

const Dashboard = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [type, setType] = React.useState<loginType>("teacher");

  React.useEffect(() => {
    const loginToken = load(Constants.key.CookiesKey.loginToken);

    // alert(loginToken);

    axios
      .get(Constants.apiEnpoint.endPointUrl + "/validate-token/" + loginToken)
      .then((response) => {
        if (response.data) {
          setIsLoading(false);
        } else {
        }
      })
      .catch((e) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingView />;

  switch (type) {
    case "admin":
      break;
    case "campusAdmin":
      break;
    case "parents":
      break;
    case "student":
      break;
    case "teacher":
      return <div>teacher dashboard</div>;
      break;
    default:
      return <div>nothing</div>;
  }

  return <div>nothing</div>;
};

export default Dashboard;
