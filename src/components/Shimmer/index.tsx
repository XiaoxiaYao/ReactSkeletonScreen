import React from "react";
import "./style.css";

interface ShimmerProps {
  theme?: string;
}

const Shimmer = (props: ShimmerProps) => {
  const themeClass = props.theme || "light";
  return (
    <div className="shimmer-wrapper">
      <div className={`shimmer ${themeClass}`}></div>
    </div>
  );
};

export default Shimmer;
