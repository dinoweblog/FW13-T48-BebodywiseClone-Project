function navbar(){
    return `<div id="navbar">
    <ul>
      <li id="logo">
        <img
          src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1606295435/staging/Home/Images/bodywise-logo.png"
          alt=""
        />
      </li>
      <li>Book Doctor Consultation</li>
      <li>Take Wellness Assessment</li>
      <li id="dropDownBtn">
        <span>
          Choose Concern<span class="material-icons">
            keyboard_arrow_down
          </span>
        </span>
        <ul id="dropDownMenu">
          <li>Hair</li>
          <li>Skin</li>
          <li>Nutrition</li>
          <li>PCOS</li>
          <li>Intimate Care</li>
        </ul>
      </li>
      <li>All Products</li>
      <li>Refer & Earn</li>
      <li id="iconSection">
        <ul>
          <li id="sortVideo">
            <img
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1625218424/staging/Home/Images/BW_Explore_W_3x.png"
              alt=""
            />
          </li>
          <li id="searchFun" id="searchBtn">
            <img
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/u_search.svg"
              alt=""
            />
          </li>
          <li id="accountBtn">
            <img
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/u_user.svg"
              alt=""
            />

            <ul id="profile" class="profileDetails">
              <li id="userName"></li>
              <li>My Profile</li>
              <li>Refer & Earn</li>
              <li>WB Purse</li>
              <li>My Orders</li>
              <li>My Subscriptions</li>
              <li id="logout">Logout</li>
            </ul>
          </li>
          <li id="whatsappBtn">
            <img
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_48/v1603950724/staging/Home/Images/WhastApp.svg"
              alt=""
            />
          </li>
          <li id="cartBtn">
            <i class="fa fa-shopping-bag" style="font-size: 20px"></i>
            <div id="cartCount">0</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>`
}

export default navbar;