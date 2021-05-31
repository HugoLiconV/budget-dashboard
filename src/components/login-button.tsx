import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "atomic/button";

type Props = {
  className?: string;
};

const LoginButton: React.FC<Props> = ({ className }: Props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button onClick={() => loginWithRedirect()} className={className}>
      Log In
    </Button>
  );
};

export default LoginButton;
