
let navbar_HTML = `<div id="navbar">
<div class="logo">
<img src="https://tse1.mm.bing.net/th?id=OIF.DbfYj1tIwYcZrNL0Mkum1w&pid=Api&P=0" alt="logo">
</div>
<div class="functions">
  <ul>
  <li><a href="#">Categories</a>
  <div class="sub-menu-1">
    <ul>
      <li><a onclick="window.location.href='inear.html'">IN-EAR FOR <br> BEGINNER</a></li>
      <li><a onclick="window.location.href='headphone.html'">HEADPHONE FOR <br> BEGINNER</a></li>
      <li><a href="#">TRUE WIRELESS <br> EARBUDS</a></li>
      <li><a href="#">WIRELESS <br> HEADPHONES</a></li>
      <li><a href="#">FLAGSHIP<br> ITEMS</a></li>
      <li><a href="#">FLAGSHIP <br> HEADPHONES</a></li>
      <li><a href="#">HI-RES AUDIO<br> PLAYERS</a></li>
      <li><a href="#">PORTABLE AMPS <br> &DACS</a></li>
      <li><a href="#">DESKTOP AMPS &<br> DACS</a></li>
      <li><a href="#">WORK FROM<br>HOME</a></li>
      <li><a href="#">GAMING</a></li>
      <li><a href="#">STUDIOS &<br> PROFFESSIONAL</a></li>
      <li><a href="#">SPEAKERS</a></li>
      <li><a href="#">CABLES</a></li>
      <li><a href="#">EARTIPS &<br>EARPADS</a></li>
      <li><a href="#">CASES</a></li>
    </ul>
  </div>
  </li>
  <li><a href="#">Brands</a></li>
  <li><a href="#">Price</a></li>
  <li><a href="#">Deals</a></li>
  <li><a href="#">Headphone Finder</a></li>
  <li><a href="#">Events</a></li>
  <li><a href="#">Forum</a></li>
  <li><a href="#">Info</a></li>
  <li><a href="#">Help Center</a></li>
  <li>
    <button id="searchbtn">Search</button>
    <div id="search_slider">
      <div id="search_container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="search" placeholder="  what are you looking for?">
        <button id="searchclose">X</button>
      </div>
    </div>
  </li>
  <li><a onclick="window.location.href='login.html'">Log In</a></li>
  <li>
    <button id="cartbtn">Cart</button>
    <div id="cart_slider">
      <div id="cart_container">  
        <i class="fa-solid fa-bag-shopping"></i>
        <h2>CART</h2>
        <button id="cartclose">X</button>
        </div>
        <div id="content">
        <button id="start">START SHOPPING</button>
        </div>
    </div>
  </li>
</ul>
</div>
</div>`

let navbar = document.querySelector("nav");
navbar.innerHTML = navbar_HTML;


let cartbtn = document.getElementById("cartbtn");
let cart_slider = document.getElementById("cart_slider");
let cartclose = document.getElementById("cartclose");

cartbtn.addEventListener("click", function (){
    cart_slider.style.display="block";
})

cartclose.addEventListener("click", function (){
    cart_slider.style.display="none";
})
let searchbtn = document.getElementById("searchbtn");
let search_slider = document.getElementById("search_slider");
let searchclose = document.getElementById("searchclose");

searchbtn.addEventListener("click", function (){
    search_slider.style.display="block";
})

searchclose.addEventListener("click", function (){
    search_slider.style.display="none";
})
