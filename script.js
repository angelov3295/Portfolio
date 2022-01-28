const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const dropdown = document.querySelector(".dropdown-content");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
    dropdown.classList.toggle("active");
})