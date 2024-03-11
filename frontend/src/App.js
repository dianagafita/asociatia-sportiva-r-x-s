import React, { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Overlay from "./components/Overlay/Overlay";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useAdmin } from "./hooks/useAdmin";
import Admin from "./Admin/Admin";
import AdminPath from "./AdminPath";

function App() {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnotherComponent(true);
    }, 0);
  }, []);

  const { accessGranted } = useAdmin();

  return (
    <div>
      {!showAnotherComponent ? (
        <Overlay />
      ) : accessGranted ? (
        <AdminPath>
          <Admin />
        </AdminPath>
      ) : (
        <>
          <Header />
          <AppRoutes />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
