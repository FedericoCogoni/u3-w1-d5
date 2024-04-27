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
          <MyList film="Star Wars" />
        </div>
        <h2 className="display-5 animation1 fw-bold">New Releases</h2>
        <div className="mt-5 mb-5 ">
          <MyList film="shrek" />
        </div>
        <h2 className="display-5 animation1 fw-bold">Watch it Again</h2>
        <div className="mt-5 mb-5 ">
          <MyList film="fantozzi" />
        </div>
      </div>
    )
  }
}
export default MyFilmList
