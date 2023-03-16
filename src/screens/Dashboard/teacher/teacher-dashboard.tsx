import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Constants from "../../../utils/Constants";
import "./teacher.css";
import TeacherOptions from "./TeacherOptions";
const TeacherDashboard = () => {
  const teachersOption: {
    icon: any;
    name: string;
  }[] = [
    {
      icon: Constants.icons.messages,
      name: "Messages",
    },
    {
      icon: Constants.images.student,
      name: "Students",
    },
    {
      icon: Constants.icons.attendance,
      name: "Attendance",
    },
    {
      icon: Constants.icons.behavior,
      name: "Behavior Points",
    },
    {
      icon: Constants.icons.grading,
      name: "Grading",
    },
    {
      icon: Constants.icons.classNotes,
      name: "Class Notes",
    },
    {
      icon: Constants.icons.calendar,
      name: "Calendar",
    },
    {
      icon: Constants.icons.studentReports,
      name: "Student Reports",
    },
  ];

  const teacherStyle = {
    myClasses: {
      textAlign: "center",
      marginBottom: "20px",
      fontWeight: "bold",
    },
  };
  return (
    <Container>
      <Box className="teacher_option">
        <Typography variant="h5" sx={teacherStyle.myClasses}>
          My classes
        </Typography>
        {teachersOption.map((optin) => {
          return <TeacherOptions {...optin} />;
        })}
      </Box>
    </Container>
  );
};

export default TeacherDashboard;
