import React from "react";
import Shimmer from "../Shimmer";
import Skelenton from "../Skeleton";
import "./style.css";

interface SkeletonArticleProps {
  theme?: string;
}

const SkeletonArticle = (props: SkeletonArticleProps) => {
  const themeClass = props.theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <Skelenton type="title" theme={themeClass} />
        <Skelenton type="text" theme={themeClass} />
        <Skelenton type="text" theme={themeClass} />
        <Skelenton type="text" theme={themeClass} />
        <Skelenton type="text" theme={themeClass} />
      </div>
      <Shimmer theme={themeClass} />
    </div>
  );
};

export default SkeletonArticle;
