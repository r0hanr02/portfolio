const text1= document.getElementById("t1")
const text2= document.getElementById("t2")
const text3= document.getElementById("t3")
const btn= document.getElementById("btn1")

btn.addEventListener("submit",(e)=>{
    alert(`${text1.value} your form is Submitted`)
    e.preventDefault()
    
})