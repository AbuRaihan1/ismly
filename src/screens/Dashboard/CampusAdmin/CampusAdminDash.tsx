import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../../../components/Drawer/Drawer";
import LoadingView from "../../../components/loading-view";
import { CampusAdminDataType } from "../../../utils/ConstType";
import CreateTeacher from "./CreateTeacher/CreateTeacher";

import "./campusAdmin.css";
import CreateStudent from "./CreateStudent/CreateStudent";
import AddClass from "./AddClass/AddClass";
const CampusAdminDash = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [campusData, setCampusData] = useState<CampusAdminDataType>();
  const [uiState, setUiState] = useState("add-teacher");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCampusData({
        name: "demo admin",
        profileUrl:
          "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        email: "demo@gmail.com",
        totalClasses: 32,
        totalTeachers: 23,
        totalStudents: 100,
      });
    }, 500);
  }, []);

  const uiContent = () => {
    if (uiState === "add-teacher") {
      return (
        // <CreateTeacher />
        <AddClass />
        // <CreateStudent />
        // <div className="admin_info_area">
        //   <div className="admin_photo common_div">
        //     <img src={campusData?.profileUrl} alt="" />
        //   </div>
        //   <div className="admin_text_info common_div">
        //     <div>
        //       <Typography>
        //         Name : <strong>{campusData?.name || "N/A"}</strong>
        //       </Typography>
        //       <Typography>
        //         Email : <strong>{campusData?.email || "N/A"}</strong>
        //       </Typography>
        //       <Typography>
        //         Total Class :{" "}
        //         <strong>{campusData?.totalClasses || "N/A"}</strong>
        //       </Typography>
        //       <Typography>
        //         Total Teachers :{" "}
        //         <strong>{campusData?.totalTeachers || "N/A"}</strong>
        //       </Typography>
        //       <Typography>
        //         Total Students :{" "}
        //         <strong>{campusData?.totalStudents || "N/A"}</strong>
        //       </Typography>
        //     </div>
        //   </div>
        // </div>
      );
    }
  };

  return (
    <>
      {isLoading && <LoadingView />}
      <div className="campus_admin_navbar">
        <TemporaryDrawer />
        <Link to="#">Log out</Link>
      </div>
      <Container>{uiContent()}</Container>
      {/* <FixedBottomNavigation /> */}
    </>
  );
};

export default CampusAdminDash;
