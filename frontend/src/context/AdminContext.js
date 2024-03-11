import { createContext, useState } from "react";
import { ADMIN_PASSWORD } from "../secret";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [accessGranted, setAccessGranted] = useState(false);

  const giveAccess = (password) => {
    const validatePassword = password === ADMIN_PASSWORD;
    if (validatePassword) {
      setAccessGranted(true);
    }
  };

  const values = {
    giveAccess,
    accessGranted,
  };

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
};
