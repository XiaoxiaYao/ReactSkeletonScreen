import React, { useState } from "react";
import { useEffect } from "react";
import SkeletonArticle from "../SkeletonArticle";

interface Article {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const Articles = () => {
  const [articles, setArticles] = useState(null as [Article] | null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map(article => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && [1, 2, 3, 4, 5].map(n => <SkeletonArticle key={n} />)}
    </div>
  );
};

export default Articles;
