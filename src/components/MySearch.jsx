import React, { Component } from "react"
import { Form, FormControl, Spinner } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../assets/css/MyList.css"
import Image from "react-bootstrap/Image"

class MySearch extends Component {
  state = {
    searchQuery: "",
    searchResults: [],
    isLoading: false,
    hasSearched: false,
  }

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value })
  }

  handleSearch = event => {
    event.preventDefault()
    const { searchQuery } = this.state
    if (searchQuery) {
      console.log("Search Query:", { searchQuery })
      this.setState({ isLoading: true, hasSearched: true })
      fetch(`http://www.omdbapi.com/?apikey=b11caad1&s=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          console.log("Search Results:", data.Search)
          this.setState({ searchResults: data.Search || [], isLoading: false })
        })
        .catch(err => {
          console.error("Error fetching data: ", err)
          this.setState({ isLoading: false })
        })
    }
  }

  render() {
    const { searchQuery, searchResults, isLoading, hasSearched } = this.state
    const responsive = {
      extraLargeDesktop: {
        breakpoint: { max: 4000, min: 2001 },
        items: 6,
      },
      largeDesktop: {
        breakpoint: { max: 2000, min: 1400 },
        items: 6,
      },
      desktop: {
        breakpoint: { max: 1399, min: 992 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
    }

    return (
      <div>
        <Form className="d-flex" onSubmit={this.handleSearch}>
          <FormControl
            type="search"
            placeholder=" Titles 🔎"
            className="me-2 mb-5 mt-3 w-50"
            aria-label="Search"
            style={{ height: "50px", fontSize: "22px", fontWeight: "bold" }}
            value={searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <div className="mb-5">
            {hasSearched && <h2 className="display-6 animation1 fw-bold ">Results:</h2>}
            {searchResults.length > 0 ? (
              <Carousel responsive={responsive}>
                {searchResults.map(film => (
                  <Image
                    key={film.imdbID}
                    className="d-block carouselImage"
                    src={film.Poster}
                    alt="film poster"
                  />
                ))}
              </Carousel>
            ) : (
              hasSearched && (
                <h3 className="text-center text-white bold mb-5 display-5">No films found 😔</h3>
              )
            )}
          </div>
        )}
      </div>
    )
  }
}

export default MySearch
