import axios from "axios";
import React from "react";
import { load } from "react-cookies";
import LoadingView from "../../components/loading-view";
import Constants from "../../utils/Constants";
import { loginType } from "../../utils/ConstType";
import TeacherDashboard from "../Dashboard/teacher/teacher-dashboard";
import CampusAdminDash from "./CampusAdmin/CampusAdminDash";
//cookie.load("login-type");

const Dashboard = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [type, setType] = React.useState<loginType>("campusAdmin");
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
      return <CampusAdminDash />
    case "parents":
      break;
    case "student":
      break;
    case "teacher":
      return <TeacherDashboard />;
    default:
      return <div>nothing</div>;
  }

  const campusAdminData = {
    adminInfo: {
      name: "demo admin",
      profileUrl:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
      email: "demo@gmail.com",
      totalClasses: 32,
      totalTeachers: 23,
      totalStudents: 100,
    },
  };



  return <div>nothing</div>;
};

export default Dashboard;
