// let input = document.getElementById("inputElement");
// let btn = document.getElementById("btn");


// let text = "";
// btn.addEventListener("click", clickHandler);
// function clickHandler(){
//     text = document.getElementById("inputEmail").value;
//     console.log("text=", text.length-1);

//     if(text.length > 11){
//         let index1 = text.indexOf("@");
//         let index2 = text.indexOf(".");
//     // console.log("position", position)

//     if(index2 == -1){
//     console.log("please write valid input");
//     }
//     else{
//         console.log(index1, index2, text.length-index2)
//         if(index2-index1-1 >= 3 & index1 != -1){
//             if(text.length-index2-1 === 2 || text.length-index2-1 === 3){
//                 document.getElementById("verify").innerHTML = "verified";
//             }
//             else{
//                 document.getElementById("verify").innerHTML = "error!!!";
//                 document.getElementById("verify").style.color = "red";
//                 console.log("error 4");
//             }
//         }else{
//             document.getElementById("verify").innerHTML = "error!!!";
//             document.getElementById("verify").style.color = "red";
//             console.log("error 3");
//         }
   
//     }
//     }
//     else{
//         document.getElementById("verify").innerHTML = "error!!!";
//         document.getElementById("verify").style.color = "red";
//         console.log("error 2");
//     }
// }




// JavaScript Code
let btn = document.getElementById("btn");

btn.addEventListener("click", clickHandler);

function clickHandler() {
    let text = document.getElementById("inputEmail").value;
    console.log("text length =", text.length);

    if (text.length > 11) {
        let index1 = text.indexOf("@");
        let index2 = text.lastIndexOf(".");

        if (index2 == -1) {
            setError("Please write a valid input");
        } else {
            if (index2 - index1 - 1 >= 3 && index1 !== -1) {
                if (text.length - index2 - 1 === 2 || text.length - index2 - 1 === 3) {
                    setVerified();
                } else {
                    setError("Error: Invalid length after dot");
                }
            } else {
                setError("Error: Invalid length between @ and dot");
            }
        }
    } else {
        setError("Error: Input length is too short");
    }
}

function setVerified() {
    let verifyElement = document.getElementById("verify");
    verifyElement.innerHTML = "Verified";
    verifyElement.style.color = "green";
    console.log("Email verified");
}

function setError(message) {
    let verifyElement = document.getElementById("verify");
    verifyElement.innerHTML = message;
    verifyElement.style.color = "red";
    console.log(message);
}
//