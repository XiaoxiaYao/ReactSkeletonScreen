import React from "react";
import "./style.css";

interface SkelentonProps {
  type: string;
  theme?: string;
}

const Skelenton = (props: SkelentonProps) => {
  const classes = `skeleton ${props.type}`;
  const themeClass = props.theme || "light";
  return <div className={`${classes} ${themeClass}`}></div>;
};

export default Skelenton;
