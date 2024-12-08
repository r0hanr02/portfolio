// document.querySelector('.contact-form').addEventListener('submit', function (e) {
//     var name = document.querySelector('input[placeholder="Your Name"]').value;
//     var email = document.querySelector('input[placeholder="Your Email"]').value;
//     var message = document.querySelector('textarea').value;
    
//     if (name === "" || email === "" || message === "") {
//         alert("All fields are required!");
//         e.preventDefault();  // Prevents form submission
//     }
// });

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

const sr = ScrollReveal({
  distance: '50px',
  duration: 500,
  easing: 'ease-in-out',
  reset: true,
});

sr.reveal('.reveal', {
  origin: 'bottom',
  interval: 200,
});

const menuIcon = document.getElementById("menu-icon");
const navbarLinks = document.getElementById("navbar-links");
const menuItems = document.querySelectorAll(".menu-item");

menuIcon.addEventListener("click", () => {
  // Toggle the navbar visibility (for mobile)
  navbarLinks.classList.toggle("right-0");

  // Add the active class to all menu items
  menuItems.forEach((item) => {
    item.classList.toggle("active");
  });
});

// Close the menu when a menu item is clicked
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close the menu
    navbarLinks.classList.remove("right-0");
    
    // Optionally, you can remove the active class from the items as well
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

