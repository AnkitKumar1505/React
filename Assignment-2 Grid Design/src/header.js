function Header() {
  return (
    <>
      <header>
        <div class="left_header_div">
          <div class="logo">
            <h1>
              <strong>EDYODA</strong>
            </h1>
            <p>Stories</p>
          </div>

          <div class="dropdown_list">
            <label for="dropdown_list">Explore Catagories</label>
            <select name="Dropdown" id="dropdown">
              <option value=""> </option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="DevOps">DevOps</option>
              <option value="Programming Languages">
                Programming Languages
              </option>
              <option value="Mobile Application Development">
                Mobile Application Development
              </option>
              <option value="Technology and Tools">Technology and Tools</option>
              <option value="Get a Job in a Tech Company">
                Get a Job in a Tech Company
              </option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div class="right_header_div">
          <p id="h_art">
            EdYoda is free learning and knowledge <br />
            sharing platform for techies
          </p>
          <button>
            <a href="https://www.edyoda.com/" target="_blank" title="Home page">
              Go To Main Website
            </a>
          </button>
        </div>
      </header>{" "}
      <hr />
    </>
  );
}

export default Header;
