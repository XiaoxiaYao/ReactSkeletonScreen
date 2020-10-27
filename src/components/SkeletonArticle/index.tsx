import React from "react";
import Skelenton from "../Skeleton";
import "./style.css";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <Skelenton type="title" />
        <Skelenton type="text" />
        <Skelenton type="text" />
        <Skelenton type="text" />
        <Skelenton type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
