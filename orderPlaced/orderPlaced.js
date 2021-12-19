var cartData = [
  {
    category: "hair",
    subCategory: "kits",
    productName: "Hair Growth Pack",
    price: 1199,
    mrp: 1399,
    productUses: "New hair growth",
    productMade: "3% Redensyl Solution, 5000 MCG Biotin Gummies",
    imageUrl:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1618881636/staging/products/buying-options/Hair%20Pro-Growth%20Pack/New%20Carousel/Hair_Growth_Pack.jpg",
    rating: 5,
    reviews: 27,
    soldItems: 6315,
    imagesAll: [
      "https://media.istockphoto.com/photos/keep-your-skin-healthy-picture-id883019542?k=20&m=883019542&s=612x612&w=0&h=b7BXlxhir3tycL8eQ7cIl7rguRDrfxb10aU07XgcALk=",
      "https://media.istockphoto.com/photos/keep-your-skin-clean-picture-id1170104811?k=20&m=1170104811&s=612x612&w=0&h=LwjJRL3iF_on95dqKTkcvXmrV-3EqyHbMRrNsuTO4g8=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJMzOIBqX7avx579xCBMrB-VYVjhcf0o_rsCcBm5HrwUvtBh4YfRwN2rASb3sjMiBbqI&usqp=CAU",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/58b19575277511.5c483922dd0c1.jpg",
      "https://media.istockphoto.com/photos/spa-products-for-home-skin-care-picture-id1141698953?k=20&m=1141698953&s=612x612&w=0&h=xmKtvy6Ui66zvVIfVobtVYt_elJuiZOeZYCRXOOiyBI=",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beauty-products-1603140461.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    ],
  },
  {
    category: "hair",
    subCategory: "kits",
    productName: "Hair Health Starter Pack",
    price: 799,
    mrp: 999,
    productUses: "Hair Health, Hair Growth",
    productMade: "Biotin Shampoo , 5000 MCG Biotin Gummies (30)",
    imageUrl:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620047677/staging/products/buying-options/Hair%20Health%20Starter%20Pack/New%20Carousel/Hair_Health_Starter_Pack.jpg",
    rating: 4.5,
    reviews: 30,
    soldItems: 2809,
    imagesAll: [
      "https://media.istockphoto.com/photos/keep-your-skin-healthy-picture-id883019542?k=20&m=883019542&s=612x612&w=0&h=b7BXlxhir3tycL8eQ7cIl7rguRDrfxb10aU07XgcALk=",
      "https://media.istockphoto.com/photos/keep-your-skin-clean-picture-id1170104811?k=20&m=1170104811&s=612x612&w=0&h=LwjJRL3iF_on95dqKTkcvXmrV-3EqyHbMRrNsuTO4g8=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJMzOIBqX7avx579xCBMrB-VYVjhcf0o_rsCcBm5HrwUvtBh4YfRwN2rASb3sjMiBbqI&usqp=CAU",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/58b19575277511.5c483922dd0c1.jpg",
      "https://media.istockphoto.com/photos/spa-products-for-home-skin-care-picture-id1141698953?k=20&m=1141698953&s=612x612&w=0&h=xmKtvy6Ui66zvVIfVobtVYt_elJuiZOeZYCRXOOiyBI=",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beauty-products-1603140461.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    ],
  },
];

localStorage.setItem("cartData", JSON.stringify(cartData));

var cartData = JSON.parse(localStorage.getItem("cartData"));

// console.log( cartData);

cart_order_details();

function cart_order_details() {

  var random = Math.round(Math.random() * 30000);

  var date = new Date().getDate();
  
  var order_date = date + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

  var delivery_date = (date + 3) + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

  document.getElementById("delivery_2").textContent = order_date;
  document.getElementById("delivery_4").textContent = delivery_date;
  document.getElementById("address_hide_date").textContent = "Expected Delivery Date : " + delivery_date;

    //  console.log(order_date)
    //  console.log(delivery_date)


  console.log(random);

  var order_id = document.createElement("p");
  order_id.setAttribute("id", "order_id");
  order_id.textContent = "ORDER DETAILS : # " + random;

  var confirm_tag = document.createElement("p");
  confirm_tag.setAttribute("id", "confirm_tag");
  confirm_tag.textContent = "CONFIRMED";

  document.getElementById("cart_details").append(order_id, confirm_tag);

  cartData.forEach(function (product) {
    console.log(product);

    var mainDiv = document.createElement("div");
    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");

    var image = document.createElement("img");
    image.setAttribute("id", "cart_image");
    image.setAttribute("src", product.imageUrl);

    imageDiv.append(image);

    var textDiv = document.createElement("div");
    textDiv.setAttribute("id", "textDiv");

    var name = document.createElement("p");
    name.setAttribute("id", "cart_product_name");
    name.textContent = product.productName;

    var quantity = document.createElement("p");
    quantity.setAttribute("id", "cart_quantity");
    quantity.textContent = "Quantity : " + "1";

    var price = document.createElement("p");
    price.setAttribute("id", "cart_product_price");
    price.textContent = "Rs. " + " " + product.price;

    textDiv.append(name, quantity, price);

    mainDiv.append(imageDiv, textDiv);
    document.getElementById("cart_details").append(mainDiv);
  });

  var order_receipt = document.createElement("p");
  order_receipt.setAttribute("id", "order_receipt");
  order_receipt.textContent = "RECEIPT";

  var subtotal = document.createElement("p");
  subtotal.setAttribute("id", "subtotal");
  subtotal.textContent = "Sub Total";

  var subtotal_price = document.createElement("P");
  subtotal_price.setAttribute("id", "subtotal_price");

  var cart_total = cartData.reduce(function (a, b) {
    return a + Number(b.price);
  }, 0);

  subtotal_price.textContent = cart_total;

  document.getElementById("cart_total_price").textContent = cart_total;

  var discount = document.createElement("p");
  discount.setAttribute("id", "discount");
  discount.textContent = "Discount";

  var discount_total = document.createElement("p");
  discount_total.setAttribute("id", "discount_total");
  discount_total.textContent = "- Rs. " + "0";

  var shipping = document.createElement("p");
  shipping.setAttribute("id", "shipping");
  shipping.textContent = "Shipping";

  var shipping_total = document.createElement("p");
  shipping_total.setAttribute("id", "shipping_total");
  shipping_total.textContent = "FREE ";

  var line = document.createElement("hr");
  line.setAttribute("id", "break_line");

  var finalTotal = document.createElement("p");
  finalTotal.setAttribute("id", "finalTotal");
  finalTotal.textContent = "Total : ";

  var final_total = document.createElement("p");
  final_total.setAttribute("id", "final_total");
  final_total.textContent = "Rs. " + cart_total;

  document
    .getElementById("cart_details")
    .append(
      order_receipt,
      subtotal,
      subtotal_price,
      discount,
      discount_total,
      shipping,
      shipping_total,
      line,
      finalTotal,
      final_total
    );
}

//  this below is for shipping address up and down 

document.getElementById("address").addEventListener("click", upAndDown);

function upAndDown() {

  var content = this.nextElementSibling;
  if (content.style.display === "block") {

    content.style.display = "none";
    document.getElementById("address").innerHTML =
      "Shipping Details" + " " + "<span> &#8681;</span>";

  } else {

    content.style.display = "block";
    document.getElementById("address").innerHTML =
      "Shipping Details" + " " + "<span>&#8679;</span>";

  }
}
