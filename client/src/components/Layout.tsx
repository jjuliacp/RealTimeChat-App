import { Snackbar, Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromLogout) {
      setShowLogoutSuccess(true);
    }
  }, [location]);

  return (
    <>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={showLogoutSuccess}
        autoHideDuration={3000}
        onClose={() => setShowLogoutSuccess(false)}
      >
        <Alert severity="success">You have successfully logged out!</Alert>
      </Snackbar>
    </>
  );
};
