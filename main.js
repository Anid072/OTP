let input = document.querySelector("input");
let button = document.querySelector("#bt");
let input2 = document.querySelector("#input2");
let button2 = document.querySelector("#btn");
let Form = document.querySelector("form");

const generateOtp = () => {
    return Math.random().toString(20).substring(2,4);
}
const generateOtp1 = () => {
    return Math.random().toString(20).substring(2,6);
}

const insertOtp = () => {
    const otp = generateOtp();
    const otp1 = generateOtp1();
    let tt = otp.toUpperCase()
    let tt2 = otp1.toLowerCase()
    

    let pas = tt2+tt;
    // if (pas.length) {
    //     input.value = pas
    // }
    input.value = pas
    
};

button.addEventListener("click" , insertOtp);


button2.addEventListener("click", ()=>{
    let one = input.value
    let two = input2.value
    // console.log(one,two)
    if(one===two){
        alert("OTP is Successful")
    }
    else{
        alert("otp not matched")
    }
    Form.reset();
});
