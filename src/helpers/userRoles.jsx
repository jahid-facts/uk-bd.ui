import React from "react";
import { useAuthInfo } from "./AuthCheck";

const AdminCheck = () => {
  const userInfo = useAuthInfo();
  const userRole = userInfo && userInfo.role;

  return userRole === "admin";
};

export default AdminCheck;
