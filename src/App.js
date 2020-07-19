import React, { Component } from 'react';
import SearchComponent from './Components/SearchComponent'
import ListTweetsComponent from './Components/ListTweetsomponent'
import AnalyzeButtonComponent from './Components/AnalyzeButtonComponent'
import PredictedResultComponent from './Components/PredictedResultComponent'
import axios from 'axios';

import './App.css';
const endpoint = 'http://localhost:8000'


class App extends Component {
  constructor() {
    super()
    this.state = {
      tweets: false,
      search: true,
      anazylzed: false,
      data:[],
      analyzedResult: []
    }
  }
  searchTweets = () => {
    var value = document.getElementById('search').value
    console.log("----------------", value)
    var answer
    axios
    .get(endpoint+'/twitter', {
      params: {
        keyword: value
      }})
    .then((res) => {
      answer = res;
      console.log("1111111111", answer.data)
      this.setState({
        tweets: true,
        search: false,
        data: answer.data
      });
      console.log("+++++++++++++++++", this.state.data)
    });
  }

  analyzeTweets = () => {
    var answer
    axios
    .post(endpoint+'/analyze/', this.state.data)
    .then((res) => {
      answer = res;
      console.log("1111111111", answer.data)
      this.setState({
        tweets: false,
        search: false,
        anazylzed: true,
        analyzedResult: answer.data
      });
      console.log("+++++++++++++++++", this.state.analyzedResult)
    });
  }

  reportAndBlock = (data) => {
    console.log("------------REPORT--------", data)
    var new_data
    axios
    .post(endpoint+'/block/', data)
    .then((res) => {
      console.log("response:", res)
      new_data = this.state.analyzedResult.filter((item) => data.name !== item.name)
      this.setState({
        analyzedResult: new_data
      })
    })
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({loading:false})
    }, 3010)
  }
  render(){
    const { tweets, search, anazylzed } = this.state;
    return (
     <>

    {tweets ? <ListTweetsComponent content={this.state.data}> <AnalyzeButtonComponent analyzeTweets={this.analyzeTweets}/> </ListTweetsComponent >: true }
    {search ?  <SearchComponent search={this.searchTweets}/> : true}
    {anazylzed ? <PredictedResultComponent content={this.state.analyzedResult} reportAndBlock={this.reportAndBlock}/> : true}
      </>
    )
  }

}

export default App;
