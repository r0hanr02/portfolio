document.querySelector('.contact-form').addEventListener('submit', function (e) {
    var name = document.querySelector('input[placeholder="Your Name"]').value;
    var email = document.querySelector('input[placeholder="Your Email"]').value;
    var message = document.querySelector('textarea').value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        e.preventDefault();  // Prevents form submission
    }
});

let darkbtn= document.querySelector(".dark-mode")
let image = document.querySelector("#dark-image")
let check = 0
darkbtn.addEventListener("click",()=>{
    if (check == 0) {
        console.log("dark mode on");
        document.body.style.backgroundImage = "url('/icons/12 (4).webp')";
        image.src = "/icons/user-interface.webp";
        darkbtn.style.background="white"
        image.style.filter="none"
        check = 1;
    } else {
        console.log("dark mode off");
        document.body.style.backgroundImage =  "url('/twoimage.webp')"; 
        image.src = "/icons/light-mode.webp";
        darkbtn.style.background="black"
        image.style.filter="invert()"
        check = 0;
    }}
)

let skills = document.querySelector("#skills")
let content = document.querySelector("#content")

skills.addEventListener("onclick",()=>{
    console.log("hello");
    content.innerHTML +=`
    <li>
        <span>Web Developer
        </span>
        <br>"building Website"
    </li>
    <li>
        <span>UI/UX</span>
        <br>
        "Design Web User-Friendly Interface"
    </li>`
})

function toggle(){
    event.preventDefault();
    let content = document.querySelector("#content")
    content.innerHTML +=`
    <li>
        <span>Web Developer
        </span>
        <br>"building Website"
    </li>
    <li>
        <span>UI/UX</span>
        <br>
        "Design Web User-Friendly Interface"
    </li>
    `
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab")
}
