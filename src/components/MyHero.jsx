import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap"

function MyHero() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
      <div className="d-flex ">
        <h2>TV Shows</h2>
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Genres"
            id="bg-vertical-dropdown-1"
            variant="btn btn-dark btn-sm dropdown-toggle rounded-0 ms-4 mt-1"
            menuVariant="dark"
          >
            <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
            <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
            <Dropdown.Item eventKey="3">Thriller</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
      <div>
        <i className="bi bi-grid icons"></i>
        <i className="bi bi-grid-3x3 icons"></i>
      </div>
    </div>
  )
}

export default MyHero
