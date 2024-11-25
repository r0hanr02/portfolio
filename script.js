// document.querySelector('.contact-form').addEventListener('submit', function (e) {
//     var name = document.querySelector('input[placeholder="Your Name"]').value;
//     var email = document.querySelector('input[placeholder="Your Email"]').value;
//     var message = document.querySelector('textarea').value;
    
//     if (name === "" || email === "" || message === "") {
//         alert("All fields are required!");
//         e.preventDefault();  // Prevents form submission
//     }
// });

// let darkbtn= document.querySelector(".dark-mode")
// let image = document.querySelector("#dark-image")
// let check = 0
// darkbtn.addEventListener("click",()=>{
//     if (check == 0) {
//         console.log("dark mode on");
//         document.body.style.backgroundImage = "url('/icons/12 (4).webp')";
//         image.src = "/icons/dark_mode_512dp.webp";
//         darkbtn.style.background="white"
//         image.style.filter="none"
//         check = 1;
//     } else {
//         console.log("dark mode off");
//         document.body.style.backgroundImage =  "url('/twoimage.webp')"; 
//         image.src = "/icons/light_mode_512.webp";
//         darkbtn.style.background="#212121"
//         image.style.filter="none"
//         check = 0;
//     }}
// )

// let skills = document.querySelector("#skills")
// let content = document.querySelector("#content")

// skills.addEventListener("onclick",()=>{
//     console.log("hello");
//     content.innerHTML +=`
//     <li>
//         <span>Web Developer
//         </span>
//         <br>"building Website"
//     </li>
//     <li>
//         <span>UI/UX</span>
//         <br>
//         "Design Web User-Friendly Interface"
//     </li>`
// })
// Function to handle tab switching
function opentab(tabname, event) {
    // Get all elements with class "tab-links" and "tab-contents"
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove "active-link" class from all tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Remove "active-tab" class from all tab contents
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Add "active-link" class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add "active-tab" class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
