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

var productData = JSON.parse(localStorage.getItem("productNextPageData"));

// console.log(productData);

nextProductDetails(product[0]);

function nextProductDetails(product) {

  // console.log(product);

  var star1 = document.createElement("p");
  star1.innerHTML = "&bigstar;";



  // console.log(star1.textContent);

  var lineH = "";

  for (let i = 0; i <= product.rating -1 ; i++) {
   
    if(i < product.rating ){
      lineH = lineH + star1.textContent;
    }else{
      lineH = lineH + "";
    }
  }

  // console.log(lineH);

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
// console.log(product.imagesAll[0])
  document.getElementById("next_product_sub_image_1").setAttribute("src",product.imagesAll[0]);
  document.getElementById("next_product_sub_image_2").setAttribute("src",product.imagesAll[1]);
  document.getElementById("next_product_sub_image_3").setAttribute("src",product.imagesAll[2]);
  document.getElementById("next_product_sub_image_4").setAttribute("src",product.imagesAll[3]);
  document.getElementById("next_product_sub_image_5").setAttribute("src",product.imagesAll[4]);



  document.getElementById("addToCart_button").addEventListener("click",function(){
    addToCart_product(product);
  })




}

var cart_products = JSON.parse(localStorage.getItem("cart_product_list")) || [];

function addToCart_product(product){
  // console.log(product);

 product.quantity = 1;
  cart_products.push(product);

  console.log(cart_products)
  localStorage.setItem("cart_product_list",JSON.stringify(cart_products));

}


document.getElementById("buynow_button").addEventListener("click",buyNow)


function buyNow(){

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
    // console.log("ashok");
  }

  if (number.length > 6 || number.length < 6) {
    document.getElementById("next_pincode_available").style.display = "block";
    var content = "Your Address not availble - check your pincode";
    document.getElementById("next_pincode_available").textContent = content;
    document.getElementById("next_pincode_available").style.color = "red";
    // console.log("less");
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

  // console.log(count)
}

document.getElementById("next_left_arrow").addEventListener("click",backSlide);

function backSlide(){

  if(count === 0){
    count = 4;
  }
  document
    .getElementById("next_product_image")
    .setAttribute("src", productData[0].imagesAll[count]);
  count--;

  // console.log(count)

}



// the below function is for popular product regimes

var popular_products =[
  {
    category: "hair",
    subCategory: "kits",
    productName: "Hair Growth Pack",
    productType : "straight",
    productIssue : "hairFall_thinning",
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
    productType : "wavy",
    productName: "Hair Health Starter Pack",
    productIssue : "tangledHair",
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
  {
    category: "hair",
    subCategory: "kits",
    productName: "Anti Dandruff Starter Pack",
    productType : "straight",
    productIssue : "frizzyHair",
    price: 599,
    mrp: 699,
    productUses: "Dandruff Control",
    productMade: "1% Keto Shampoo, Anti dandruff Lotion",
    imageUrl:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620101695/staging/products/buying-options/Anti%20Dandruff%20Starter%20Pack/1000x750.jpg",
    rating: 4.6,
    reviews: 11,
    soldItems: 1404,
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
    productName: "Hair Fall Control Mini",
    productType : "wavy",
    productIssue : "frizzyHair",
    price: 899,
    mrp: 998,
    productUses: "Hair Fall Control Mini",
    productMade: "Biotin Shampoo, Silk Protein Conditioner",
    imageUrl:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1619428969/staging/products/buying-options/Hair%20fall%20Control%20Mini/New%20Carousel/Hair_Fall_Control_Beginner_s_Pack.jpg",
    rating: 4.4,
    reviews: 17,
    soldItems: 738,
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
    productName: "Hair Fall Control Starter Pack",
    productType : "straight",
    productIssue : "tangledHair",
    price: 849,
    mrp: 949,
    productUses: "Hair Growth & Strengthening",
    productMade: "Onion Hair Oil , Biotin Shampoo",
    imageUrl:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1620062959/staging/products/buying-options/Hair%20fall%20Control%20Starter%20Pack/New%20Carousel/Hair_fall_Control_Starter_Pack.jpg",
    rating: 4.5,
    reviews: 30,
    soldItems: 847,
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

displayPopularProducts(popular_products);

function displayPopularProducts(popular){

  popular.forEach(function(product,index){
    // console.log(product.imageUrl)

    var frame = document.createElement("div");
    frame.setAttribute("class","next_popular_products")

    frame.addEventListener("click",function(){
      popular_regime(index);
       
      frame.style.borderColor = "";
      frame.style.borderColor = "blue";
    
      

    })

  

    var image = document.createElement("img");
    image.setAttribute("id","next_popular_image")
    image.setAttribute("src",product.imageUrl)

    var  textDiv = document.createElement("div");
    textDiv.setAttribute("id","next_popular_textDiv")

    var text = document.createElement("p");
    text.setAttribute("id","next_popular_name")
    text.textContent = product.productName;

    var rupee = document.createElement("p");
    rupee.innerHTML = "&#8377;"
    // console.log(rupee)

    var price = document.createElement("p");
    price.setAttribute("id","next_popular_price")
    price.innerHTML = rupee.textContent + " " + product.price;

    var forTag = document.createElement("p");
    forTag.setAttribute("id","next_popular_forTag")
    forTag.textContent = "For";

    var uses = document.createElement("p");
    uses.setAttribute("id","next_popular_uses")
    uses.textContent = product.productUses;

    textDiv.append(text,price,forTag, uses)

     var saveTag = document.createElement("p");
     saveTag.setAttribute("id","next_popular_saveTag")
     saveTag.textContent = " Save Rs." +(product.mrp - product.price) ;


    frame.append(saveTag,image,textDiv)
    next_popular_div.append(frame);
  })

}


function popular_regime(x){
  // console.log(x);
  // console.log(popular_products[x]);
nextProductDetails(popular_products[x])

}


document.getElementById("next_expand_head1").addEventListener("click", upAndDown);

document.getElementById("next_expand_head2").addEventListener("click",upAndDown);

document.getElementById("next_expand_head3").addEventListener("click",upAndDown);

document.getElementById("next_expand_head4").addEventListener("click",upAndDown);

function upAndDown() {
  console.log("ashok")

  var content = this.nextElementSibling;
  console.log(content)

  if (content.style.display === "block") {

    content.style.display = "none";
   

  } else {

    content.style.display = "block";
   

  }
}