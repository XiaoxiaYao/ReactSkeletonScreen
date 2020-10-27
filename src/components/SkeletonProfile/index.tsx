import React from "react";
import Skelenton from "../Skeleton";
import "./style.css";

interface SkeletonProfileProps {
  theme?: string;
}

const SkeletonProfile = (props: SkeletonProfileProps) => {
  const themeClass = props.theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <Skelenton type="avatar" theme={themeClass} />
        </div>
        <div>
          <Skelenton type="title" theme={themeClass} />
          <Skelenton type="text" theme={themeClass} />
          <Skelenton type="text" theme={themeClass} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
