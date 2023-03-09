type loginType = "student" | "parents" | "teacher" | "admin" | "campusAdmin";

type CampusAdminDataType = {
  name: string;
  profileUrl: string;
  totalClasses: any;
  totalTeachers: any;
  totalStudents: any;
  email: any;
};
export type { loginType, CampusAdminDataType };
