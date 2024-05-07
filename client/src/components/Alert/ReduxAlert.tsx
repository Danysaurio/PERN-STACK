import React from "react";

import { useSelector } from "react-redux";

import Alert from "./Alert";
import classNames from "classnames";

export const ReduxAlert = () => {
  const { show, title, description, type } = useSelector(
    (state: any) => state.alert
  );
  const cls = classNames([
    "absolute bottom-5 w-full animate-fade-up animate-ease-in-out",
    show ? "" : "hidden",
  ]);

  return (
    <div className={cls}>
      <Alert title={title} type={type} description={description} />
    </div>
  );
};
