const updateLength = document.querySelector(".length");
const lengthValue = document.querySelector("#range");
const toggleBtn = document.querySelectorAll(".toggle-input");
const generateBtn = document.querySelector(".buttonContainer");
const output = document.querySelector("#Password");
const checkedUpperCase = document.querySelector("#uppercase");
const checkedLowerCase = document.querySelector("#lowercase");
const checkedNumber = document.querySelector("#number");
const checkedSymbol = document.querySelector("#symbol");
const copyBtn = document.querySelector(".copy");

let uppercase = "ABCDEFGHIZKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghizklmnopqrstuvwxyz";
let numbers ="0123456789";
let symbols ="~!@#$%^&*?"

updateLength.innerHTML=lengthValue.value;
lengthValue.addEventListener('input',()=>{
    updateLength.innerHTML=lengthValue.value;
})

toggleBtn.forEach((clicked)=>{
    clicked.addEventListener('change',()=>{
        const toggleContainer = clicked.parentElement;
        if(clicked.checked){
            toggleContainer.style.backgroundColor="#48CFCB";
        }else{
            toggleContainer.style.backgroundColor="white";
        }
    });



});

generateBtn.addEventListener('click',()=>{

  let makepassword ="";
  let selectedAllcharacter = "";
const length = parseInt(lengthValue.value);
  selectedAllcharacter += checkedUpperCase.checked ? uppercase : "";
  selectedAllcharacter += checkedLowerCase.checked ? lowercase : "";
  selectedAllcharacter += checkedNumber.checked ? numbers: "";
  selectedAllcharacter += checkedSymbol.checked ?symbols : "";
  if(selectedAllcharacter==="" || selectedAllcharacter.length===0)output.value=makepassword;

for( let i=1;i<=length;i++){

    const randomNumber = Math.floor((Math.random() * selectedAllcharacter.length) );
    // console.log(randomNumber);
makepassword +=selectedAllcharacter.charAt(randomNumber);
}
output.value=makepassword;

})


copyBtn.addEventListener('click',()=>{
    if(output.value!=="" || output.value.length!==0){
navigator.clipboard.writeText(output.value);
copyBtn.classList.replace("fa-copy","fa-check");
setTimeout(()=>{
    copyBtn.classList.replace("fa-check","fa-copy");
},2000)



}
})