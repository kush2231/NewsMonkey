import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className='card' style={{ width: "18rem" }}>
          <img
            src={
              ImageUrl
                ? ImageUrl
                : "https://www.livemint.com/lm-img/img/2023/07/19/600x338/The-country-has-received-340-8-mm-of-monsoon-rains_1689767634278.jpg"
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}..</h5>
            <p className='card-text'>{description}...</p>
            <a href={newsUrl} target='blank' className='btn btn-sm btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem