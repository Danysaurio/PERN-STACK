import classNames from "classnames";
import { IconType } from "react-icons";

import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

type alertType = "error" | "warning" | "success" | "info";

interface AlertProps {
  type: alertType;
  title: string;
  description?: string;
}

const getIcon = (type: alertType): JSX.Element => {
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
  const cls = classNames(["alert", `alert-${type}`]);

  return (
    <div role="alert" className={cls}>
      {getIcon(type)}
      <div>
        <span className="font-bold">{title}</span>
        {description && <div className="text-xs">{description}</div>}
      </div>
      <div>
        <button className="btn btn-sm">Close</button>
      </div>
    </div>
  );
};

export default Alert;
