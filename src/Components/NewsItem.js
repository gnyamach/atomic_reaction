import React, { Component } from 'react';

class NewsItem extends Component {
  deleteItem(id){
    this.props.onDelete(id);
    console.log('test');
  }
  render() {
    console.log(this.props);
    return (
      <ul className="News">
         <h2>{this.props.theNew.title}</h2> by {this.props.theNew.author}
         <a href="#" onClick={this.deleteItem.bind(this, this.props.theNew.source.id)}> Delete Post</a>
         <br/>
         <img src={this.props.theNew.urlToImage} width="300" height="250"></img>
         <br/>
         {this.props.theNew.description}
         <a href={this.props.theNew.url}>Read More</a>
         <br/>
         <br/>
         <br/>
      </ul>
    );
  }
}

export default NewsItem;
