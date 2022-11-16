function Filter() {
  return (
    <>
      <div class="categories_container">
        <nav>
          <h1>Trending Posts</h1>

          <div class="filter">
            <i class="fa-solid fa-filter"></i>
            <span> Filter by Category</span>
          </div>
          <button class="active"> All</button>
          <button> Artificial Intelligence</button>
          <button> Cloud Computing</button>
          <button> DevOps</button>
          <button> Programming Languages</button>
          <button> Mobile Application Development</button>
          <button> Technology and Tools</button>
          <button> Get a Job in a Tech Company</button>
          <button> Others</button>
        </nav>
      </div>
    </>
  );
}

export default Filter;
