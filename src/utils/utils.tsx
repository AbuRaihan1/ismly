import { loginType } from "./ConstType";

const Utils = {
  isValidLoginType: (type: loginType | undefined) => {
    if (!type) return false;
    if (
      type === "admin" ||
      type === "campusAdmin" ||
      type === "parents" ||
      type === "student" ||
      type === "teacher"
    ) {
      return true;
    }

    return false;
  },
};

export default Utils;
