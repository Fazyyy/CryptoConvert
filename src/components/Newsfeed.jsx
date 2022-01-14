import { useEffect, useState } from 'react'
import axios from 'axios'

const Newsfeed = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_APIKEY
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data)
      setArticles(response.data);
    }).catch((error) => {
      console.error(error)
    })
  }, [])

  const initArticles = articles?.slice(0,5)

  return (
    <div className="cc__newsfeed">
      <h2>Latest News</h2>
      <p>The lastest Crypto news from around the world</p>
      <ul className="cc__newsfeed-list">
        {initArticles?.map(( article, _index ) => (
          <li key={_index}>
            <h3>{article.title}</h3>
            <p>{article.source}</p>
            <p><a href={article.url}>Read More...</a></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Newsfeed
