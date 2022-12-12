// let userName = prompt("Give me userName");

// // alert("this script works ",userName); // this is not print userName -> comma
// alert("this script works "+userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://google.com";

function getTranslateUrl(text) {
    console.log("url " , serverUrl + "?" + "text=" + text);
    return serverUrl + "?" + "text=" + text;
}


btnTranslate.addEventListener("click",()=>{
    console.log("Clicked"); 
    console.log(txtInput.value);

    var inputText = txtInput.value;
    fetch(getTranslateUrl(inputText))
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(json => console.log(json))

    outputDiv.innerText = txtInput.value;
})