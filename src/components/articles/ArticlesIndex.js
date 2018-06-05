import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

export default class ArticlesIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/articles')
    .then(function (response) {
      this.setState({ articles: response.data });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  renderArticles() {
    return this.state.articles.map(article => {
      const content = _.truncate(article.content, { length: 100 });

      return(
        <Link to={`/articles/${article.id}`} key={article.id} >
          <li className="media list-group-item-action" >
            <img src={article.image_url} className="mr-3" height={100} />
            <div className="media-body">
              <h5>{article.title}</h5>
              {content}
            </div>
          </li>
        </Link>
      );
    });
  }

  render() {
    if(!this.state.hasOwnProperty('articles')) {
      return(<p>loading ...</p>);
    }

    return (
      <div>
        <h1>Articles</h1>
        <ul className="list-group">
          {this.renderArticles()}
        </ul>
      </div>
    );
  }
}
