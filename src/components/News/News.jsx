import styles from '../../styles/news.module.css'
import NewsList from './NewsList/NewsList'
import { useState, useEffect } from 'react'

const News = ({category}) => {
  const [myNewsList, setMyNewsList] = useState([])
  const [totalResult, setTotalResult] = useState()
  const [page, setPage] = useState(1)
  console.log(category)

  const newsApi = async ()=> {
    try {
      let sample = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2ed8a20d0ba041f58ee693a3c3dcb06e&page=${page}`)
      let result = await sample.json()
      setTotalResult(result.totalResults)
      setMyNewsList(result.articles)
    } catch(err) {
      console.log(err)
    }
  }

  const handlePrevious = async ()=> {
    try {
      let sample = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2ed8a20d0ba041f58ee693a3c3dcb06e&page=${page - 1}`)
      let result = await sample.json()
      setTotalResult(result.totalResults)
      setMyNewsList(result.articles)
    } catch(err) {
      console.log(err)
    }
    let myPage = page - 1
    setPage(myPage)
    console.log("Virtual : " + myPage)
  }

  console.log("Original : " + page)

  const handleNext = async ()=> {
    try {
      let sample = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2ed8a20d0ba041f58ee693a3c3dcb06e&page=${page + 1}`)
      let result = await sample.json()
      setTotalResult(result.totalResults)
      setMyNewsList(result.articles)
    } catch(err) {
      console.log(err)
    }
    let myPage = page + 1
    setPage(myPage)
    console.log("Virtual : " + myPage)
  }

  useEffect( ()=> {
    newsApi();
  }, [])

  return (
    <>
      <h1 className={styles.total_result} >Total Result : {totalResult}</h1>
      <div className={styles.news_container} >
        {
          myNewsList.map((item)=> {
            return <NewsList key={item.url} title={item.title} publisher={item.source.name} urlToImage={item.urlToImage} description={item.description} url={item.url} />
          })
        }
        <div className={styles.pagination}>
          <button disabled={false} onClick={handlePrevious} > &larr; Previous</button>
          <button onClick={handleNext} >Next &rarr; </button>
        </div>
      </div> 
    </>
  )
}

export default News;
