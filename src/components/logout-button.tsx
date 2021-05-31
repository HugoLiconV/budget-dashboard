import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "atomic/button";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
