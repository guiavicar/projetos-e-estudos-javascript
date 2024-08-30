console.dir(document)
// selectors
// 1 getEelementsByTagName
document.getElementsByTagName("h1")
// 2 get elementByld
console.log(document.getElementById("main") )


const form = document.querySelector("form")
const input = document.querySelector("input")

form.addEventListener("submit",(a) =>{
    a.preventDefault();
    console.log(input.value)
})