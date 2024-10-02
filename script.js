document.querySelector('.contact-form').addEventListener('submit', function (e) {
    var name = document.querySelector('input[placeholder="Your Name"]').value;
    var email = document.querySelector('input[placeholder="Your Email"]').value;
    var message = document.querySelector('textarea').value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        e.preventDefault();  // Prevents form submission
    } else {
        alert("Message sent successfully!");
    }
});

let darkbtn= document.querySelector(".dark-mode")
let image = document.querySelector("#dark-image")
let check = 0
darkbtn.addEventListener("click",()=>{
    if (check == 0) {
        console.log("dark mode on");
        document.body.style.backgroundImage = "url('/portfolio/icons/12 (4).jpg')";
        image.src = "/portfolio/icons/user-interface.png";
        darkbtn.style.background="white"
        image.style.filter="none"
        check = 1;
    } else {
        console.log("dark mode off");
        document.body.style.backgroundImage =  "url('/portfolio/twoimage.jpg')"; 
        image.src = "/portfolio/icons/light-mode.png";
        darkbtn.style.background="black"
        image.style.filter="invert()"
        check = 0;
    }}
)