import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container center-xs">
        <p>Thadeu Esteves Jr -  Ruby on Rails | ReactJS | PHP</p>

        <div className="space-around">
          <img src="http://rubyonrails.org/images/rails-logo.svg" alt="" height="40" />
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="50" />
          <img src="https://proappsoft.com/blog/wp-content/uploads/2014/12/apple-touch-icon-76x76.png" alt="" height="50" />
        </div>

        <div>
          <p> dev@thadeu.work :: +55 63 98486-6338</p>
        </div>
      </div>
    );
  }
}

export default App;
