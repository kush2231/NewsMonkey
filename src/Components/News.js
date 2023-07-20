import React, { Component } from "react";
import NewsItem from "./NewsItem";
import url from "../config"
export class News extends Component {
  constructor() {
    super();
    console.log("i am constructor from news component  ");
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount()
  {
    console.log("cmd");
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  
  render() {
    console.log("render ")
    return (
      <div className='my-2' >
        <h2>NewsMonkey - Top headLines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
          
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title?element.title:" "}
                  description={element.description?element.description:" "}
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
        
          })}
        </div>
      </div>
    );
  }
}

export default News;
