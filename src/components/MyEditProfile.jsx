import "../css/MyEditProfile.css"
import logo from "../assets/img/logo.png"

function MyEditProfile() {
  return (
    <div className="container bg-dark pt-2">
      <header>
        <a className="logo" href="#1">
          <img src={logo} width="112" height="47" alt="Netflix logo" />
        </a>
      </header>
      <div className="container edit-profile stretch text-white pt-4">
        <h3>Edit Profile</h3>
        <hr />
        <div className="account-info">
          <div className="account-avatar position-relative">
            <span id="badge" className="badge position-absolute z-2 rounded-circle">
              <i className="bi bi-pencil"></i>
            </span>
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/28b22a54c96662989843912cfceff789a6bae093.png"
              alt="logo"
            />
          </div>
          <div className="account-Choices">
            <h4 className="user-name">Strive Student</h4>
            <label htmlFor="language">
              <h5>Language:</h5>
            </label>
            <select id="language">
              <option value="Italian">Italiano</option>
              <option value="Español">Español</option>
              <option value="Spanish">Français</option>
              <option value="Russian">Russian</option>
              <option value="Chinese">Chinese</option>
              <option value="Sardinian">Sardo</option>
            </select>
            <hr />
            <h5>Maturity Settings:</h5>
            <h5 className="btn btn-secondary pt-2 fw-bold">ALL MATURITY RATINGS</h5>
            <p>Show titles of all maturity ratings for this profile.</p>
            <button type="button" className="btn btn-outline-secondary rounded-0">
              Edit
            </button>
            <hr />
            <h5>Autoplay controls</h5>
            <label className="checkboxBox ">
              <input type="checkbox" className="btn custom-checkbox" defaultChecked />
              Autoplay next episode in a series on all devices.
            </label>
            <label className="checkboxBox">
              <input type="checkbox" defaultChecked />
              Autoplay previews while browsing on all devices.
            </label>
          </div>
        </div>
        <hr />
        <div className="buttons">
          <button type="submit">Save</button>
          <a href="#2" className="btn">
            Cancel
          </a>
          <a href="#3" className="btn">
            Delete profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyEditProfile
