import React, { Component } from 'react';
import $ from 'jquery';
import News from './Components/News';
import uuid from 'uuid';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      news:[]
    }
  }
  //importing from the API using json
  //https://newsapi.org/
  //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey={API_KEY}
  //Your API key is: ae4db264be7e4039a1f07be644361fe2
  getNews(){
    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ae4db264be7e4039a1f07be644361fe2',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({news:data.articles}, function(){});
        console.log(this.state);
      }.bind(this),
      error: function (xhr, status, err){
        console.log(err);
      }

    })
  };

  //Lifecycle component to handle the API
  //Called after the component has been rendered into the pag3
  componentWillMount(){
    this.getNews();
  }

  //Looks through all the news and find items with id matching id and adds them to x
  //and delete one from the index
  handleDeleteNews(id){
    let news = this.state.news;
    let index = news.findIndex(x => x.id === id);
    news.splice(index, 1);
    this.setState({news: news});
  }

  render() {
    return (
      <div className="App">
         <h1>The Atomic News Reaction</h1>
         <h3>Updated from a News API</h3>
         <br></br>
         <hr/>
         <News news ={this.state.news} onDelete = {this.handleDeleteNews.bind(this)}/>

      </div>
    );
  }
}

export default App;
