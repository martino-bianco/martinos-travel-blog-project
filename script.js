// Weather now for the Heres

// const bariWeatherDisplay = document.querySelector("#bariWeatherDisplay");

// bari

const bariCurrentTemp = document.querySelector("#bariCurrentTemp");
const bariMaxTemp = document.querySelector("#bariMaxTemp");
const bariFeelsLike = document.querySelector("#bariFeelsLike");
const bariHumidity = document.querySelector("#bariHumidity");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=bari&appid=69b52e70cffe9ebc50d4629c4f7bd6f2&units=metric"
).then(function (response) {
  response.json().then(function (data) {
    // console.log(data.main);

    bariCurrentTemp.innerText = `Temperature: ${data.main.temp} °C`;
    bariMaxTemp.innerText = `Max Temperature: ${data.main.temp_max} °C`;
    bariFeelsLike.innerText = `Feels like: ${data.main.feels_like} °C`;
    bariHumidity.innerText = `Humidity: ${data.main.humidity} g/m3`;
  });
});

// naples

const naplesCurrentTemp = document.querySelector("#naplesCurrentTemp");
const naplesMaxTemp = document.querySelector("#naplesMaxTemp");
const naplesFeelsLike = document.querySelector("#naplesFeelsLike");
const naplesHumidity = document.querySelector("#naplesHumidity");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=naples&appid=69b52e70cffe9ebc50d4629c4f7bd6f2&units=metric"
).then(function (response) {
  response.json().then(function (data) {
    // console.log(data.main);

    naplesCurrentTemp.innerText = `Temperature: ${data.main.temp} °C`;
    naplesMaxTemp.innerText = `Max Temperature: ${data.main.temp_max} °C`;
    naplesFeelsLike.innerText = `Feels like: ${data.main.feels_like} °C`;
    naplesHumidity.innerText = `Humidity: ${data.main.humidity} g/m3`;
  });
});

// monopoli

const monopoliCurrentTemp = document.querySelector("#monopoliCurrentTemp");
const monopoliMaxTemp = document.querySelector("#monopoliMaxTemp");
const monopoliFeelsLike = document.querySelector("#monopoliFeelsLike");
const monopoliHumidity = document.querySelector("#monopoliHumidity");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=naples&appid=69b52e70cffe9ebc50d4629c4f7bd6f2&units=metric"
).then(function (response) {
  response.json().then(function (data) {
    // console.log(data.main);

    monopoliCurrentTemp.innerText = `Temperature: ${data.main.temp} °C`;
    monopoliMaxTemp.innerText = `Max Temperature: ${data.main.temp_max} °C`;
    monopoliFeelsLike.innerText = `Feels like: ${data.main.feels_like} °C`;
    monopoliHumidity.innerText = `Humidity: ${data.main.humidity} g/m3`;
  });
});

// rome

const romeCurrentTemp = document.querySelector("#romeCurrentTemp");
const romeMaxTemp = document.querySelector("#romeMaxTemp");
const romeFeelsLike = document.querySelector("#romeFeelsLike");
const romeHumidity = document.querySelector("#romeHumidity");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=rome&appid=69b52e70cffe9ebc50d4629c4f7bd6f2&units=metric"
).then(function (response) {
  response.json().then(function (data) {
    // console.log(data.main);

    romeCurrentTemp.innerText = `Temperature: ${data.main.temp} °C`;
    romeMaxTemp.innerText = `Max Temperature: ${data.main.temp_max} °C`;
    romeFeelsLike.innerText = `Feels like: ${data.main.feels_like} °C`;
    romeHumidity.innerText = `Humidity: ${data.main.humidity} g/m3`;
  });
});

// florence

const florenceCurrentTemp = document.querySelector("#florenceCurrentTemp");
const florenceMaxTemp = document.querySelector("#florenceMaxTemp");
const florenceFeelsLike = document.querySelector("#florenceFeelsLike");
const florenceHumidity = document.querySelector("#florenceHumidity");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=florence&appid=69b52e70cffe9ebc50d4629c4f7bd6f2&units=metric"
).then(function (response) {
  response.json().then(function (data) {
    // console.log(data.main);

    florenceCurrentTemp.innerText = `Temperature: ${data.main.temp} °C`;
    florenceMaxTemp.innerText = `Max Temperature: ${data.main.temp_max} °C`;
    florenceFeelsLike.innerText = `Feels like: ${data.main.feels_like} °C`;
    florenceHumidity.innerText = `Humidity: ${data.main.humidity} g/m3`;
  });
});

// suggestion area

const whereTo = document.querySelector("#whereTo");
const why = document.querySelector("#why");
const submit = document.querySelector("#submit");

window.onload = function () {
  whereTo.value = "";
  why.value = "";
};

submit.addEventListener("click", function () {
  console.log(whereTo.value);
  console.log(why.value);
  alert(
    `You want to send me to ${whereTo.value}? You are truly a crazy person! Do you know how dangerous it is out there? And for what?  ${why.value}? Not cool, my friend! Not cool at all!`
  );
});

console.log(whereTo.innerText);
console.log(why.innerText);

marker.Rome.addEventListener("click", function () {
  alert("Yo!");
});

// -------------------the Gallery---------------------------

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

console.log(fullImgBox);

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

// lightbox
// Get all the links with the class "lightbox-link"
// const links = document.querySelectorAll(".lightbox-link");

// // Create the lightbox element
// const lightbox = document.createElement("div");
// lightbox.classList.add("lightbox");

// // Create the image element inside the lightbox
// const lightboxImg = document.createElement("img");
// lightbox.appendChild(lightboxImg);

// // Add the lightbox element to the body
// document.body.appendChild(lightbox);

// Attach the click event handler to each link
// Attach the click event handler to each link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Update the source of the lightbox image
    lightboxImg.src = link.href;

    // Display the lightbox
    lightbox.style.display = "block";
  });
});

// // Close the lightbox when clicked outside the image
// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     lightbox.style.display = "none";
//   }
// });

lightbox.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) {
    lightbox.style.display = "none";
  }
});
// lightbox
