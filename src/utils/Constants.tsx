const Constants = {
  apiEnpoint: {
    endPointUrl: "https://ismschoool.com/efortshub",
  },
  images: {
    userProfile: require("../assets/images/user.png"),
    student: require("../assets/images/student.png"),
    parents: require("../assets/images/parents.png"),
    admin: require("../assets/images/admin.png"),
    teacher: require("../assets/images/teacher.png"),
    campusAdmin: require("../assets/images/campus.png"),
  },
  icons: {
    messages: require("../assets/icons/message.png"),
    attendance: require("../assets/icons/instruction.png"),
    behavior: require("../assets/icons/feedback.png"),
    grading: require("../assets/icons/best.png"),
    classNotes: require("../assets/icons/classNotes.png"),
    calendar: require("../assets/icons/calendar.png"),
    studentReports: require("../assets/icons/report.png"),
  },
  key: {
    CookiesKey: {
      loginToken: "login-token",
      loginType: "login-type",
    },
    responseType: {
      valid: "valid",
      success: "success",
    },
    loginType: {
      teacher: "teacher",
      student: "student",
    },
  },
  colors: {
    halfTransparentBlack: "#02020288",
    lightTheme: {
      palette: {
        mode: "light",
        primary: {
          main: "#ff5200",
        },
        secondary: {
          main: "#f57c00",
        },
        background: {
          default: "#f5f5f5",
          paper: "#fff",
        },
        text: {
          primary: "#333",
          secondary: "#888",
        },
      },
    },
    darkTheme: {
      palette: {
        mode: "dark",
        primary: {
          main: "#ffa726",
        },
        secondary: {
          main: "#f57c00",
        },
        background: {
          default: "#222",
          paper: "#333",
        },
        text: {
          primary: "#fff",
          secondary: "#ccc",
        },
      },
    },
  },
  navigationStack: {
    home: "/",
    dashboard: "/dashboard",
    studentLogin: "/login/student",
    teacherLogin: "/login/teacher",
    adminLogin: "/login/admin",
    campusAdminLogin: "/login/campusAdmin",
    parentsLogin: "/login/parents",
  },
};

export default Constants;
