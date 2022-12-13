// let userName = prompt("Give me userName");

// // alert("this script works ",userName); // this is not print userName -> comma
// alert("this script works "+userName);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslateUrl(text) {
    console.log("url " , serverUrl + "?" + "text=" + text);
    return serverUrl + "?" + "text=" + text;
}


btnTranslate.addEventListener("click",()=>{ 
    console.log("Clicked"); 
    console.log(txtInput.value);

    var inputText = txtInput.value;
    try{
        // fetch(getTranslateUrl(inputText))
        // .then(res => {
        //     console.log(res);
        //     return JSON.parse(res);
        // })
        // .then(json => console.log(json))
        const request = new XMLHttpRequest();
        var country = "india"
        request.open(
            "GET",
            // `https://restcountries.com/v2/name/${country}?fullText=true`
                getTranslateUrl(inputText)
            );
        request.send();

        request.addEventListener("load", function () {
            const data = JSON.parse(this.responseText);
            outputDiv.innerText = data.contents.translated;
            console.log(data);
        });

    }catch(e) {
        console.log(e);
    }
})