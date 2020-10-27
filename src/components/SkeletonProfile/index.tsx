import React from "react";
import Skelenton from "../Skeleton";
import "./style.css";

const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <Skelenton type="avatar" />
        </div>
        <div>
          <Skelenton type="title" />
          <Skelenton type="text" />
          <Skelenton type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
