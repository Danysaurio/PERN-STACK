import React from "react";

import { useSelector } from "react-redux";

import Alert from "./Alert";

export const ReduxAlert = () => {
  const alert = useSelector((state: any) => state.alert);

  return (
    <div className="absolute bottom-5 w-full animate-fade-up animate-ease-in-out">
      <Alert title="hubo un error" type="info" />
    </div>
  );
};
