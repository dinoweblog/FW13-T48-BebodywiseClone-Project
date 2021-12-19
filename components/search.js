function search(){
    return `<div id="darkBackground"></div>
    <div id="searchBar">
      <div id="searchInput">
        <input type="text" placeholder="Search here..." />
        <span>
          <img
            src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1622088832/staging/Home/Images/Vector.png"
            alt=""
          />
        </span>
        <span id="searchCloseBtn" class="material-icons">close</span>
      </div>

      <div id="trendingPart">
        <div style="display: flex">
          <span class="material-icons"> trending_up </span>
          <h4>Trending</h4>
        </div>
        <div class="trending">
          <span class="">Open Pores</span>
          <span class="">Acne / Pimple</span><span class="">PCOS</span
          ><span class="">Pigmentation / Uneven skin tone</span
          ><span class="">Hair fall &amp; hair thinning</span
          ><span class="">Weight management</span
          ><span class="">Vaginal infections</span>
        </div>`
}

export default search;