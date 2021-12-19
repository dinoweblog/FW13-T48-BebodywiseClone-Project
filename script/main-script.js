// Account section js



let closeBtn = document.querySelector(".closeBtn");
let closeBtn2 = document.querySelector(".closeBtn2");
let closeBtn3 = document.querySelector(".closeBtn3");
let accountPage = document.getElementById("accountPage");
let accountBtn = document.querySelector("#accountBtn");
let accountBackground = document.getElementById("accountBackground")

accountB.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0 });
  accountPage.style.top = "0px";
  disableBodyScroll();
});

closeBtn.addEventListener("click", closeFun);
function closeFun() {
  accountPage.style.top = "-1000px";
  enableBodyScroll();
}

closeBtn2.addEventListener("click", () => {
  accountPage.style.top = "-1000px";
  enableBodyScroll();
});

closeBtn3.addEventListener("click", () => {
  accountPage.style.top = "-1000px";
  enableBodyScroll();
});

accountBackground.addEventListener("click", () => {
  accountPage.style.top = "-1000px";
  enableBodyScroll();
});

function disableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.add("stop-scroll");
}

function enableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.remove("stop-scroll");
}

// cart buttom fun
let cartBtn = document.getElementById("cartBtn");
let backBtn = document.getElementById("backBtn2");
let backBtn2 = document.getElementById("backBtn");
let cartSlider = document.getElementById("cartSlider");
let cartSliderDiv = document.getElementById("cartSliderDiv");
let cartBackground = document.getElementById("cartBackground")
let id;

cartBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0 });

  setTimeout(() => {
    cartSlider.style.display = "block";
  }, 200);

  id = setTimeout(() => {
    cartSliderDiv.style.right = "0px";
  }, 300);

  setTimeout(() => {
    disableBodyScroll();
  }, 300);
});

backBtn.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

backBtn2.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

cartBackground.addEventListener("click", () => {
  cartSliderDiv.style.right = "-30%";
  setTimeout(() => {
    cartSlider.style.display = "none";
  }, 500);
  enableBodyScroll();
});

let signupBox = document.getElementById("signupBox");
let inputBox = document.getElementById("inputBox");
let otpBox = document.getElementById("otpBox");

let submitBtn1 = document.getElementById("submitBtn1");
let submitBtn2 = document.getElementById("submitBtn2");
let submitBtn3 = document.getElementById("submitBtn3");

let enterNumber = document.getElementById("enterNumber");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let emailId = document.getElementById("emailId");
let enterOtp = document.getElementById("enterOtp");

let showMsg = document.getElementById("showMsg");
let showFirst = document.getElementById("showFirst");
let showEmail = document.getElementById("showEmail");
let otpCheck = document.getElementById("otpCheck");
let userName = document.getElementById("userName");

submitBtn1.addEventListener("click", () => {
  let mNum = enterNumber.value;

  if (mNum.length == 10) {
    signupBox.style.display = "none";
    inputBox.style.display = "block";
  } else {
    showMsg.innerText = "Enter a valid Phone Number";
    showMsg.style.marginBottom = "7px";
    showMsg.style.color = "tomato";
  }
});

submitBtn2.addEventListener("click", () => {
  let first = firstName.value;

  if (first.length != 0) {
    let userArray = {
      firstName: first,
    };
    localStorage.setItem("userFirstName", JSON.stringify(userArray));
    console.log("~ userArray", userArray);
    let email = emailId.value;
    showFirst.style.display = "none";
    if (email.length != 0) {
      signupBox.style.display = "none";
      inputBox.style.display = "none";
      otpBox.style.display = "block";
    } else {
      showEmail.innerText = "Invalid Email";
      showEmail.style.marginBottom = "7px";
      showEmail.style.color = "tomato";
    }
  } else {
    showFirst.innerText = `"firstName" is not allowed to be empty`;
    showFirst.style.marginBottom = "7px";
    showFirst.style.color = "tomato";
  }
});

let getName = JSON.parse(localStorage.getItem("userFirstName"));
let profileDetails  = document.querySelector(".profileDetails");
let logout = document.getElementById("logout")
console.log("~ getName", getName);

let countOtp = 0;
document.getElementById("enterOtp").addEventListener("input", ()=> {
  let otp = enterOtp.value;
  countOtp++;
  if (otp.length == 4 && otp == "1234") {
    profileDetails.style.display="block"
    userName.innerText = `Hello! ${getName.firstName}`;
    closeFun();
  } else if (countOtp > 4) {
    otpCheck.innerText = "Please check the otp you have entered";
  }
});

// account profile js

// Search Button js
let searchSection = document.getElementById("searchSection");
let searchCloseBtn = document.getElementById("searchCloseBtn")
let searchBtn = document.getElementById("searchBtn");
let darkBackground = document.getElementById("darkBackground")
searchBtn.addEventListener("click", ()=> {
  window.scrollTo({ top: 0, left: 0 });
  searchSection.style.top = "0px";
  disableBodyScroll();
});

searchCloseBtn.addEventListener("click", ()=>{
  searchSection.style.top = "-1000px";
  enableBodyScroll();
});

darkBackground.addEventListener("click", ()=>{
  searchSection.style.top = "-1000px";
  enableBodyScroll();
}) 

logout.addEventListener("click", ()=>{
  profileDetails.style.display="none"
})

document.getElementById("logo").addEventListener("click", ()=>{
  window.open("index.html")
})
