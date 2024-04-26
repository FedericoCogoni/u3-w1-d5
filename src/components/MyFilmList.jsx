import React, { Component } from "react"
import MyList from "./MyList"

class MyFilmList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <div>
          <MyList film="Star Trek" />
        </div>
        <h4>New Releases</h4>
        <div>
          <MyList film="Harry Potter" />
        </div>
        <h4>Watch it Again</h4>
        <div>
          <MyList film="avengers" />
        </div>
      </>
    )
  }
}
export default MyFilmList
