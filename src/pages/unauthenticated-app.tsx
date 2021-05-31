import LoginButton from "components/login-button";
import React from "react";

const UnauthenticatedApp: React.FC = () => {
  return (
    <div className="h-80 flex justify-center flex-col px-4">
      <p className="text-xl text-center mb-4">
        Necesitas iniciar sesión para poder entrar 😬
      </p>
      <LoginButton />
    </div>
  );
};

export default UnauthenticatedApp;
