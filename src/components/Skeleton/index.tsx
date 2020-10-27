import React from "react";
import "./style.css";

interface SkelentonProps {
  type: string;
}

const Skelenton = (props: SkelentonProps) => {
  const classes = `skeleton ${props.type}`;
  return <div className={classes}></div>;
};

export default Skelenton;
