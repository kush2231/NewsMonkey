import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { baseUrl } from '../config.js';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.down("sm")]: {
      // For extra-small (xs) devices, show 1 card in a row
      justifyContent: "center",
    },
  },
}));


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // useStyles();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    // const response = await fetch('http://localhost:5000/api/news?country=in&category=technology&apiKey=your-secret-api-key');
    //     const data = await response.json();
    const url = `${baseUrl}/api/news/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ddcb2ebd3f1f4889b3f5de5186ca2dcf"
    setLoading(true);
    let data = await fetch(url);
    if (!data.ok) {
      console.log('Error fetching ');
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.data);
    setTotalResults(parsedData.meta.found);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => { // const url = `http://localhost:5001/api/news/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const url = `${baseUrl}/api/news/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.data));
    setTotalResults(parsedData.meta.found);
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: "55px 0px 40px 0px " }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <Box
          sx={{
            px: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {articles?.map((element) => (
              <Grid item xs={12} sm={6} md={4} key={element.uuid}>
                <NewsItem
                  title={element?.title ? element?.title : ""}
                  description={element?.description ? element?.description : ""}
                  imageUrl={element?.urlToImage}
                  newsUrl={element?.url}
                  author={element?.author}
                  date={element?.publishedAt}
                  source={element?.source.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
