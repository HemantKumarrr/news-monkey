import styles from "../../styles/news.module.css";
import NewsList from "./NewsList/NewsList";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";

const News = ({ category }) => {
  const [myNewsList, setMyNewsList] = useState([]);
  const [totalResult, setTotalResult] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "2ed8a20d0ba041f58ee693a3c3dcb06e";

  const newsApi = async () => {
    try {
      setIsLoading(true);
      let sample = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}`
      );
      let result = await sample.json();
      setTotalResult(result.totalResults);
      setMyNewsList(result.articles);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrevious = async () => {
    let myPage = page - 1;
    setPage(myPage);
    newsApi()
  };

  const handleNext = async () => {
    let myPage = page + 1;
    setPage(myPage);
    newsApi()
  };

  useEffect(() => {
    newsApi();
  }, [category]);

  return (
    <>
      <h1 className={styles.total_result}>Total Result : {totalResult}</h1>
      <div className={styles.news_container}>
        {isLoading ? (
          <Loading />
        ) : (
          myNewsList?.map((item) => {
            return (
              <NewsList
                key={item.url}
                title={item.title}
                publisher={item.source.name}
                urlToImage={item.urlToImage}
                description={item.description}
                url={item.url}
              />
            );
          })
        )}
        <div className={styles.pagination}>
          <button onClick={handlePrevious}> &larr; Previous</button>
          <button onClick={handleNext}>Next &rarr; </button>
        </div>
      </div>
    </>
  );
};

export default News;
