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
  icons: {},
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
  },
  navigationStack: {
    home: "/",
    dashboard:"/dashboard",
    studentLogin: "/login/student",
    teacherLogin: "/login/teacher",
    adminLogin: "/login/admin",
    campusAdminLogin: "/login/campusAdmin",
    parentsLogin: "/login/parents",
  },
};

export default Constants;
