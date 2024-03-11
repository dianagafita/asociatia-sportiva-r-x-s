import React from "react";
import { useAdmin } from "./hooks/useAdmin";
import { Navigate } from "react-router-dom";
import { ADMIN_URL } from "./secret";

export default function AdminPath({ children }) {
  const { accessGranted } = useAdmin();

  if (!accessGranted) {
    return <Navigate to={`/${ADMIN_URL}`} />;
  }

  return children;
}
