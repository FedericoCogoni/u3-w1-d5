import React, { Component } from "react"
import MyList from "./MyList"

class MyFilmList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <div className="text-center ">
        <h2 className="display-5 animation1 fw-bold">Trending Now</h2>
        <div className="mt-5 mb-5 ">
          <MyList film="Star Trek" />
        </div>
        <h2 className="display-5 animation1 fw-bold">New Releases</h2>
        <div className="mt-5 mb-5 ">
          <MyList film="Harry Potter" />
        </div>
        <h2 className="display-5 animation1 fw-bold">Watch it Again</h2>
        <div className="mt-5 mb-5 ">
          <MyList film="avengers" />
        </div>
      </div>
    )
  }
}
export default MyFilmList
