import React, { Component } from "react"
import MyList from "./MyList"

class MyFilmList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <div className="text-center">
        <h2>Trending Now</h2>
        <div className="mt-5 mb-5">
          <MyList film="Star Trek" />
        </div>
        <h2>New Releases</h2>
        <div className="mt-5 mb-5">
          <MyList film="Harry Potter" />
        </div>
        <h2>Watch it Again</h2>
        <div className="mt-5 mb-5">
          <MyList film="avengers" />
        </div>
      </div>
    )
  }
}
export default MyFilmList
