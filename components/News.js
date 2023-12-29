// components/News.js
import React, { useEffect, useState } from 'react';
import newsApi from '../services/newsApi';
import './News.css'; // Import the CSS file for styling
import NewsDetail from './NewsDetail'; // Assuming they're in the same directory
import NewsCard from './NewsCard'; // Import the NewsCard component
// import NewsDetail from './NewsDetail'; // Import the NewsDetail component
import { BsFillGridFill, BsList } from 'react-icons/bs';
import ToggleButton from './ToggleButton'; // Assuming ToggleButton is in a './ToggleButton.js' file


const News = () => {
  const [news, setNews] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [selectedArticle, setSelectedArticle] = useState(null);
  

  const fetchNews = async (category) => {
    try {
      const response = await newsApi.get('/top-headlines', {
        params: {
          country: 'in',
          category: category.toLowerCase(),
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error.message);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsApi.get('/top-headlines', {
          params: {
            country: 'in', // Adjust as needed
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };
  const onClose = () => {
    setSelectedArticle(null);
  };


  return (
    <div>
      <h1>Trevious News</h1>
      <h2><a href='./dashboard'>Top Headlines </a></h2>
      
      <div className='filter'>
        <a href='#general' onClick={() => fetchNews('general')}>General</a>
        <a href='#business' onClick={() => fetchNews('business')}>Business</a>
        <a href='#entertainment' onClick={() => fetchNews('entertainment')}>Entertainment</a>
        <a href='#health' onClick={() => fetchNews('health')}>Health</a>
        <a href='#science' onClick={() => fetchNews('science')}>Science</a>
        <a href='#sports' onClick={() => fetchNews('sports')}>Sports</a>
        <a href='#technology' onClick={() => fetchNews('technology')}>Technology</a>
          <div className='view_con'>
      <button
        className={viewMode === 'grid' ? 'active-button' : ''}
        onClick={() => setViewMode('grid')}
      >
        <BsFillGridFill className="icon" />
      </button>
      <button
        className={viewMode === 'list' ? 'active-button' : ''}
        onClick={() => setViewMode('list')}
      >
        <BsList className="icon" />
      </button>
    </div>
      </div>
      <div>
       
      </div>
      <div className={`news-container ${viewMode}`}>
        {selectedArticle ? (
          <NewsDetail article={selectedArticle} onClose={onClose} />
        ) : (
          <ul>
            {news.map((article, index) => (
              <li key={index}>
                <NewsCard
                  article={article}
                  handleArticleClick={() => handleArticleClick(article)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default News;