import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:'https://thumbs.dreamstime.com/b/man-reading-news-tablet-home-man-reading-news-tablet-home-imaginary-online-mobile-news-website-application-103769971.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
