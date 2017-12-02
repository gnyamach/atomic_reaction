import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render() {
    let newsItems;
    if(this.props.news){
      newsItems = this.props.news.map(theNew =>{
        return (
          <NewsItem onDelete={this.deleteItem.bind(this)} key = {theNew.title} theNew = {theNew } />
        );
      });
    }

    console.log(this.props);
    return (
      <div className="News">
        <h3>Latest News</h3>
         {newsItems}
      </div>
    );
  }
}

export default News;
