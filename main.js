"use strict";

//Selectors
const inputSlider = document.querySelector("input");
const discountInput = document.querySelector(".check");
const sliderValue = document.querySelector(".slider_value");
const pageViews = document.querySelector(".views");
const changeProgressBar = document.querySelector(".progressBar");
let price, views, progressBar;

//EventListeners
inputSlider.addEventListener("input", modifySlider);
discountInput.addEventListener("input", getDiscount);

//Functions
function inputViewsAndPrice(inputValue) {
  switch (inputValue) {
    case "0":
      price = "0.00";
      views = "NO PAGEVIEWS";
      progressBar = 0;
      break;
    case "2":
      price = "8.00";
      views = "10k PAGEVIEWS";
      progressBar = 20;
      break;
    case "4":
      price = "12.00";
      views = "50k PAGEVIEWS";
      progressBar = 40;
      break;
    case "6":
      price = "16.00";
      views = "100k PAGEVIEWS";
      progressBar = 60;
      break;
    case "8":
      price = "24.00";
      views = "500k PAGEVIEWS";
      progressBar = 80;
      break;
    default:
      price = "36.00";
      views = "1M PAGEVIEWS";
      progressBar = 100;
      break;
  }
}

function modifySlider(event) {
  inputViewsAndPrice(event.target.value);

  if (discountInput.checked) {
    price *= 0.75;
    price = price.toFixed(2);
  }

  sliderValue.textContent = price;
  pageViews.textContent = views;
  changeProgressBar.style.width = progressBar + "%";
}

function getDiscount(event) {
  let currentPrice = Number.parseInt(price);

  if (price > 0) {
    if (event.target.checked) {
      currentPrice *= 0.75;
      currentPrice = currentPrice.toFixed(2);
      sliderValue.textContent = currentPrice;
    } else {
      sliderValue.textContent = currentPrice + ".00";
    }
  }
}
