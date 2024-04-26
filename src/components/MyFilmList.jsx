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
          <MyList film="Harry Potter" />
        </div>
        <h4>New Releases</h4>
      </>
    )
  }
}
export default MyFilmList
