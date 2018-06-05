import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ArticlesShow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const articleId = this.props.match.params.id;

    axios.get(`http://localhost:3000/articles/${articleId}`)
    .then(function (response) {
      this.setState({ article: response.data });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    if(!this.state.hasOwnProperty('article')) {
      return(<p>loading ...</p>);
    }

    const { article } = this.state;

    return (
      <div>
        <div className="page-header">
          <Link to="/" className="btn btn-primary">Back</Link>
          <h3>{article.title}</h3>
        </div>
        <img src={article.image_url} className="mr-3" height={300} />
        <p>{article.content}</p>
      </div>
    );
  }
}
