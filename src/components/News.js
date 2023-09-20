import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState(props.parsedData.articles);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [search,setSearch] = useState('');
    const filteredPosts = articles.filter((article) => article.description.includes(search.toLowerCase()))
    let {category} = props;
    let {country} = props;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    
    const handleSearch = (e) => {
        
        setSearch(e.target.value);
    }

   



    const updateNews = async ()=> {
        props.setProgress(10);
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        // setLoading(true)
        // let data = await fetch(url);
        props.setProgress(30);
        // let parsedData = await data.json()
        let {parsedData} = props;
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - HowToAbroad`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        // console.log(url);
        // const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-07-20&sortBy=publishedAt&apiKey=API_KEY`
        // setPage(page+1) 
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // setArticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <form style={{ margin: '100px 50px 50px 50px' }} className="d-flex flex-column justify-content-center align-items-center" role="search">
                    <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
                    <button  style={{ width: '25%', margin:'10px' }} className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Top {category} Trends in US</h1>
                {loading && ""}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={""}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {filteredPosts.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
