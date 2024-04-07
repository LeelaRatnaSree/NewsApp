import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading : false,
      page: 1
    }
  }
  async  componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=28958e086a43488abeb818930581c94f&page=1&pagesize=${this.props.pagesize}`;
    this.setState({
      loading:false})
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:true
    })

  }
  handleNextClick= async ()=>{
    if (!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=28958e086a43488abeb818930581c94f&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({
        loading:false})
      let data =await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles:parsedData.articles,
        page:this.state.page+1,
        loading:true
        
      })

    }
    

  }
  handlePreviousClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=28958e086a43488abeb818930581c94f&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({
      loading:false})
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:true
    })

  }
  render() {
    return (
      <div className="container my-3">
       
        <h1 className='text-center'>NewsMonkey - Top HeadLines</h1>
        {!this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} newsurl={element.url}/>
            </div>
          })}
            
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
