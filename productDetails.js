const product = [
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
];



localStorage.setItem("productNextPageData", JSON.stringify(product));

// var productData = JSON.parse(localStorage.getItem("productNextPageData"));

var productData1 = JSON.parse(localStorage.getItem("individualShowData"));

console.log("productData",productData);
console.log("productData1",productData1)


nextProductDetails(productData1);

function nextProductDetails(product) {
  console.log(product);

  var star1 = document.createElement("p");
  star1.innerHTML = "&bigstar;";

  console.log(star1.textContent);

  var lineH = "";

  for (let i = 0; i <= product.rating; i++) {
    lineH = lineH + star1.textContent;
  }

  console.log(lineH);

  document
    .getElementById("next_product_image")
    .setAttribute("src", product.imageUrl);
  document.getElementById("next_product_name").textContent =
    product.productName;
  document.getElementById("next_product_price").textContent = product.price;
  document.getElementById("next_rating").textContent = product.rating;
  document.getElementById("next_reviews").textContent = product.reviews;
  document.getElementById("next_sold").textContent = product.soldItems;
  document.getElementById("next_star_rating").textContent = lineH;

  // display sub images
console.log(product.imagesAll[0])
  document.getElementById("next_product_sub_image_1").setAttribute("src",product.imagesAll[0]);
  document.getElementById("next_product_sub_image_2").setAttribute("src",product.imagesAll[1]);
  document.getElementById("next_product_sub_image_3").setAttribute("src",product.imagesAll[2]);
  document.getElementById("next_product_sub_image_4").setAttribute("src",product.imagesAll[3]);
  document.getElementById("next_product_sub_image_5").setAttribute("src",product.imagesAll[4])
}

//  pincode checking fumcton is below

document
  .getElementById("next_pincode_submit")
  .addEventListener("click", checkAddress);

function checkAddress() {
  var number = document.getElementById("next_pincode").value;

  if (number.length === 6) {
    document.getElementById("next_pincode_available").style.display = "block";
    var content1 = "your address is available";
    document.getElementById("next_pincode_available").textContent = content1;
    document.getElementById("next_pincode_available").style.color = "green";
    console.log("ashok");
  }

  if (number.length > 6 || number.length < 6) {
    document.getElementById("next_pincode_available").style.display = "block";
    var content = "Your Address not availble - check your pincode";
    document.getElementById("next_pincode_available").textContent = content;
    document.getElementById("next_pincode_available").style.color = "red";
    console.log("less");
  }
}

document.getElementById("next_right_arr").addEventListener("click", nextSlide);

var count = 0;

function nextSlide() {
  // console.log(productData[0].imagesAll[count])
  if(count > 4){
    count = 0;
    
  }
  document
    .getElementById("next_product_image")
    .setAttribute("src", productData[0].imagesAll[count]);
  count++;
  console.log(count)
}

document.getElementById("next_left_arrow").addEventListener("click",backSlide);

function backSlide(){
 console.log("ashok")
  if(count === 0){
    count = 4;
  }
  document
    .getElementById("next_product_image")
    .setAttribute("src", productData[0].imagesAll[count]);
  count--;
  console.log(count)
}
