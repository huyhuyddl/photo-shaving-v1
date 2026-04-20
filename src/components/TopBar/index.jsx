import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();

  function getContext() {
    const path = location.pathname;

    const userDetailMatch = path.match(/^\/users\/(.+)$/);
    if (userDetailMatch) {
      const user = models.userModel(userDetailMatch[1]);
      return user ? `${user.first_name} ${user.last_name}` : "";
    }

    const userPhotosMatch = path.match(/^\/photos\/(.+)$/);
    if (userPhotosMatch) {
      const user = models.userModel(userPhotosMatch[1]);
      return user ? `Photos of ${user.first_name} ${user.last_name}` : "";
    }

    return "Photo App";
  }

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Lê Đức Huy
        </Typography>
        <Typography variant="h6">{getContext()}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
