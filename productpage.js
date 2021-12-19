
 import footer from "./footer/components/footer.js"

 let onetwo = document.getElementById("onetwo");
 console.log(footer)
 onetwo.innerHTML = footer();


import productList from "./57 products_data.js";

console.log(productList);

let productDisplyMain = document.getElementById("productDisplyMain");
let productDisplyMainSubtype=[];

let type;
document.getElementById("hairBtn").addEventListener("click",hairFn)
function hairFn() {
 buttonColor()
 
   let hairData=document.getElementById("hairBtn");
   hairData.style.backgroundColor="#66509a"

   hairData.style.color="white"
    type="hair"
   appendData(type)
 
}

document.getElementById("skinBtn").addEventListener("click",skinFn)
function skinFn(){
 buttonColor()
 let skinData=document.getElementById("skinBtn");
 skinData.style.backgroundColor="#d8892b"

 skinData.style.color="white"
 type="skin"
   appendData(type)
}

document.getElementById("weightBtn").addEventListener("click",weightFn)

function weightFn(){
 // let weightFilter=document.getElementById("Sun_productBtn2");
 // weightFilter.style.color="black"
 buttonColor()

 // weightFilter.style.backgroundColor=""
  let weightData=document.getElementById("weightBtn");
  weightData.style.backgroundColor="#1a6c5e"

  weightData.style.color="white"

 type="weight"
   appendData(type)
}

document.getElementById("pcosBtn").addEventListener("click",pcosFn)
function pcosFn(){
 buttonColor()
 let pcosData=document.getElementById("pcosBtn");
 pcosData.style.backgroundColor="#e86669"

 pcosData.style.color="white"
 type="pcos"
   appendData(type)
}

document.getElementById("feminineBtn").addEventListener("click",feminineFn)

function feminineFn(){
 buttonColor()
 let feminineData=document.getElementById("feminineBtn");
 feminineData.style.backgroundColor="#5e93bd"

 feminineData.style.color="white"

 type="feminineCare"

   appendData(type)
}

hairFn()


function buttonColor(){
         let hairData=document.getElementById("hairBtn");
         hairData.style.backgroundColor="#efedf5"
        
         hairData.style.color="#66509a"
     
     
         let skinData=document.getElementById("skinBtn");
         skinData.style.backgroundColor="#fbf3e9"
     
         skinData.style.color="#d8892b"
     
         let weightData=document.getElementById("weightBtn");
         weightData.style.backgroundColor="#e8f0ef"
        
          weightData.style.color="#1a6c5e"
     
          let pcosData=document.getElementById("pcosBtn");
         pcosData.style.backgroundColor="#fdeff0"
        
         pcosData.style.color="#e86669"
     
         let feminineData=document.getElementById("feminineBtn");
         feminineData.style.backgroundColor="#eff4f8"
        
         feminineData.style.color="#5e93bd"
     
     }


function appendData(type){

 productDisplyMainSubtype=[];

 productDisplyMain.innerHTML=null;
     let count = 0;
     


 
     productList.forEach(function (el) {
         
       if (el.category == type) {
         productDisplyMainSubtype.push(el);
           count++
         let productDiv = document.createElement("div");
      
         
 
         let img = document.createElement("img");
         img.src = el.imageUrl;
         img.style.borderRadius="20px"
 
         let contentDiv=document.createElement("div");
         contentDiv.style.height="180px"
 if(el.mrp==el.price){
     var price = document.createElement("p");
         price.textContent ="₹" +el.price;
         price.style.fontSize="23px"
         price.style.fontWeight="bold"
 }

 else{
     var price = document.createElement("p");
        
         price.innerHTML=`₹ ${el.price} <span class="mrpValue"> &nbsp${el.mrp}&nbsp</span>`
         price.style.fontSize="23px"
         price.style.fontWeight="bold"
 }
        


         let title = document.createElement("p");
         title.textContent = el.productName;
 
         let useFor = document.createElement("p");
         useFor.innerHTML = `<span style="font-weight: bold; color: blue;">FOR</span> ${el.productUses}`;
 
         let useWith = document.createElement("p");
         useWith.innerHTML = `<span style="font-weight: bold; color: blue;">WITH</span> ${el.productMade}`;


         let addCartBtn=document.createElement("button");
         addCartBtn.textContent="Add to Cart"
         addCartBtn.addEventListener("click",function(){
             addToCartFn(el)
         });

         contentDiv.setAttribute("id","contentDivId");
         contentDiv.append(title, price, useFor,useWith)
         productDiv.append(img, contentDiv,addCartBtn);
         img.addEventListener("click",function(){
             individualShowFn(el)
         })
 
         productDisplyMain.append(productDiv);
       }
     });
     document.getElementById("itemCount").innerHTML=`${count}&nbsp products`
     status=false;

 }



function individualShowFn(el){
  localStorage.setItem("individualShowData",JSON.stringify(el))
 window.location.href="productDetails.html"
} 

document.getElementById("kitesBtn").addEventListener("click",kitsFn);
function kitsFn(){
 let subtype="kits"
status=true;
 appendData1(type,subtype)

}

document.getElementById("allBtn").addEventListener("click",allFn);
function allFn(){
 let subtype="all"

 appendData(type,subtype)

}

document.getElementById("singleBtn").addEventListener("click",singleFn);
function singleFn(){
 let subtype="single"
 status=true;
 appendData1(type,subtype)

}


var addToCartData=JSON.parse(localStorage.getItem("cartData"))||[];

function addToCartFn(el){
 console.log(addToCartData.length);
 console.log(el)
 var status=false;

 for(let i=0; i<addToCartData.length; i++){
     if(el.productName==addToCartData[i].productName){
         status=true; 
     }
 }



if(status==false){
 
 addToCartData.push(el)

 localStorage.setItem("cartData",JSON.stringify(addToCartData));

 
}else{
 alert("already added")
}
addToCartData=JSON.parse(localStorage.getItem("cartData"))
document.getElementById("cartCount").textContent=addToCartData.length
}



       
function appendData1(type,subtype){   
productDisplyMain.innerHTML=null;
  let count = 0; 

  productDisplyMainSubtype.forEach(function (el) {
      
    if (el.category == type&&el.subCategory==subtype) {
     //  productDisplyMainSubtype.push(el);
        count++
      let productDiv = document.createElement("div");
      // productDiv.style.width="200px"
      

      let img = document.createElement("img");
      img.src = el.imageUrl;
      img.style.borderRadius="20px"

      let contentDiv=document.createElement("div");
      contentDiv.style.height="180px"
if(el.mrp==el.price){
  var price = document.createElement("p");
      price.textContent ="₹" +el.price;
      price.style.fontSize="23px"
      price.style.fontWeight="bold"
}

else{
  var price = document.createElement("p");
      // price.textContent ="₹" +el.price +"  "+el.mrp; 
      price.innerHTML=`₹ ${el.price} <span class="mrpValue"> &nbsp${el.mrp}&nbsp</span>`
      price.style.fontSize="23px"
      price.style.fontWeight="bold"
}
     


      let title = document.createElement("p");
      title.textContent = el.productName;

      let useFor = document.createElement("p");
      useFor.innerHTML = `<span style="font-weight: bold; color: blue;">FOR</span> ${el.productUses}`;

      let useWith = document.createElement("p");
      useWith.innerHTML = `<span style="font-weight: bold; color: blue;">WITH</span> ${el.productMade}`;


      let addCartBtn=document.createElement("button");
      addCartBtn.textContent="Add to Cart"
      addCartBtn.addEventListener("click",function(){
          addToCartFn(el)
      });

      contentDiv.setAttribute("id","contentDivId");
      contentDiv.append(title, price, useFor,useWith)
      productDiv.append(img, contentDiv,addCartBtn);

      img.addEventListener("click",function(){
             individualShowFn(el)
         })

      productDisplyMain.append(productDiv);
    }
  });
  document.getElementById("itemCount").innerHTML=`${count}&nbsp products`
  status=false;

}