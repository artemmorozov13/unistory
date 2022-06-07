import { ReactNode } from "react";
import s from "./container.module.scss";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
