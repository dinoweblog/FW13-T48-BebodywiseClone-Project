function cartSlider(){
    return `<div id="cartBackground"></div>
    <div id="cartSliderDiv">
      <div id="cartTop">
        <div>
          <i
            id="backBtn"
            class="fa fa-arrow-right"
            style="font-size: 20px"
          ></i>
        </div>
        <div style="font-size: 20px">Cart</div>
      </div>
      <div id="cartMid">
        <div id="cartItem">
          <div>
            <img
              src="https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_100,c_limit/v1620122159/staging/Home/Images/image_13.png"
              alt=""
            />
          </div>
          <div>
            <h3>Your Personal Health Briefcase is empty!</h3>
            <p>Add products to cart and begin your wellness journey now</p>
          </div>
          <div style="width: 100%">
            <button id="backBtn2">Add Products</button>
          </div>
        </div>

        <div id="cartItemMid">
          <div id="countItem">
            <div>
              <p>Items</p>
              <h4 id="noOfItem"></h4>
            </div>
            <div>
              <p>Total</p>
              <h4 id="tAmount"></h4>
            </div>
            <div style="color: rgb(55, 159, 142)">
              <p>Savings</p>
              <h4 id="sAmount"></h4>
            </div>
            <div></div>
          </div>
          <div id="cartItemList"></div>
          <div id="billDetails">
            <h4>Bill Details</h4>
            <div>
              <p>Subtotal</p>
              <p id="currAmount"></p>
            </div>
            <div id="discount">
              <p>Discount</p>
              <p id="disAmount"></p>
            </div>
            <div id="ship">
              <p>Shipping</p>
              <p>Free!</p>
            </div>
            <div id="toPay">
              <p>To Pay</p>
              <p id="totalPay"></p>
            </div>
            <div id="save">
              <p>Total Savings</p>
              <p id="saveAmount"></p>
            </div>
          </div>
        </div>
      </div>

      <div id="cartBottom"></div>
    </div>`
}

export default cartSlider;