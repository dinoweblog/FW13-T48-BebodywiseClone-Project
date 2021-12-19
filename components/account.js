function account(){
    return `<div id="accountBackground"></div>

    <div id="signupLoginBox">
      <div id="signupBox">
        <div class="closeDiv">
          <div>Login or Signup</div>
          <div class="material-icons closeBtn">close</div>
        </div>
        <p>Enter your phone number to verify yourself</p>
        <input
          id="enterNumber"
          type="number"
          placeholder="Enter Phone Number"
        />
        <p id="showMsg"></p>
        <p>We will send OTP to this number</p>

        <button id="submitBtn1">SUBMIT</button>
      </div>

      <div id="inputBox">
        <div class="closeDiv">
          <div>Signup</div>
          <div class="material-icons closeBtn2">close</div>
        </div>
        <input id="firstName" type="text" placeholder="First Name" />
        <p id="showFirst"></p>
        <input id="lastName" type="text" placeholder="Last Name" />
        <input id="emailId" type="email" placeholder="Email Id" />
        <p id="showEmail"></p>

        <button id="submitBtn2">SUBMIT</button>
      </div>

      <div id="otpBox">
        <div class="closeDiv">
          <div>Signup</div>
          <div class="material-icons closeBtn3">close</div>
        </div>
        <p>We've sent an OTP on your number,</p>
        <input
          id="enterOtp"
          type="number"
          placeholder="Enter OTP"
        />

        <p id="otpCheck"></p>

        <button id="submitBtn3">Not received OTP? Resend</button>
      </div>
    </div>`
}

export default account;