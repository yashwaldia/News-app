// components/NewsCard.js
import React, { useState } from 'react';



const NewsCard = ({ article, handleArticleClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = "https://i.pinimg.com/564x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"; // Define defaultImage here

  return (
    <div className="news-card">
      <div className="news-details">
        
        {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-image" />)}
        {!article.urlToImage && (
        <img src={defaultImage} alt="Placeholder image" className="news-image" />)}
        <div className="uppercard">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleArticleClick(article);
          }} className="article-title">
            <h3>{article.title}</h3>
          </a>
          <p>{article.description}</p>
        </div>
        <div className="additional-info">
          <p>Publisher: {article.source.name}</p>
          <p>Date: {new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="readbutton">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read More
        </a>
        </div>  
      </div>
    </div>
  );
};

export default NewsCard;