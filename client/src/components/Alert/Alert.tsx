import classNames from "classnames";
import { IconType } from "react-icons";

import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

export type AlertType = "error" | "warning" | "success" | "info";

interface AlertProps {
  type: AlertType;
  title: string;
  description?: string;
}

const getClassStyle = (type: AlertType): string => {
  let classText = "alert-info";
  switch (type) {
    case "error":
      classText = "alert-error";

      break;
    case "warning":
      classText = "alert-warning";
      break;
    case "success":
      classText = "alert-success";
      break;
  }
  return classText;
};

const getIcon = (type: AlertType): JSX.Element => {
  const cls = "w-6 h-6 shrink-0";
  let typeCls: string = type === "info" ? "text-info" : "text-current";
  let Icon: IconType = AiOutlineInfoCircle;

  switch (type) {
    case "error":
      Icon = AiOutlineCloseCircle;
      break;
    case "warning":
      Icon = AiOutlineWarning;
      break;
    case "success":
      Icon = AiOutlineCheckCircle;
      break;
  }

  return <Icon className={classNames([cls, typeCls])} />;
};

const Alert = ({ type, title, description }: AlertProps): JSX.Element => {
  const cls = classNames(["alert", getClassStyle(type)]);

  return (
    <div role="alert" className={cls}>
      {getIcon(type)}
      <div>
        <span className="font-bold">{title}</span>
        {description && <div className="text-xs">{description}</div>}
      </div>
      <div>
        <button className="btn btn-sm btn-ghost">Close</button>
      </div>
    </div>
  );
};

export default Alert;
