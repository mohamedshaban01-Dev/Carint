// start variables declaration area 
const menuIcon = document.querySelector(".menu-icon");
const Xmark = document.querySelector(".x-mark");
const UlDisplay = document.querySelector(".hidden");
const navgation = document.querySelector(".navgation");
const searchTool = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-Input");

// end variables declaration area
// ----------------------------------------

// start function area
// --------------------
// start header function
menuIcon.addEventListener("click", () => {
    
    UlDisplay.classList.add("display");
    menuIcon.style.display = "none";
})

Xmark.addEventListener("click", () => {
    UlDisplay.classList.remove("display");
    searchInput.style.display = "none";
    menuIcon.style.display = "block";
})
searchTool.addEventListener("click", () => {
    searchInput.style.display = "block";
}
);
// end header function

// end function area