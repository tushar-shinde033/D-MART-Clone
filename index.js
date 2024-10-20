//search input

const place = [
  "tea",
  "butter",
  "pizza",
  "burger",
  "sugar",
  "egg",
  "rice",
  "chips",
  "coffee",
  "milk",
  "cake",
];
let index = 0;
let animatedplaceholder = document.getElementById("animatedplaceholder");

function movingPlaceholder() {
  animatedplaceholder.style.animation = "changeValue 0.5s forwards";

  setTimeout(() => {
    index = (index + 1) % place.length;
    animatedplaceholder.textContent = `Search "${place[index]}"`;
    animatedplaceholder.style.animation = "inchangeValue 0.5s forwards";
  }, 400);
}
movingPlaceholder();
setInterval(movingPlaceholder, 3000);

//indicator slider
const wrapper = document.querySelector("#wrapper");
const carosuel = document.querySelector("#image-carousel");
const images = document.querySelectorAll(".img");
const btn = document.querySelectorAll(".indicator-btn");
const previous = document.querySelector("#prev");
const nxt = document.querySelector("#next");

images.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

const slideImage = () => {
  images.forEach((e) => {
    e.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const prev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
    console.log(counter);
  }
};

const next = () => {
  if (counter <= images.length - 1) {
    counter++;
    slideImage();
    console.log(counter);
  }
};

//cart
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Storage",
    image: "APR150003700xx12APR23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 400,
  },
  {
    id: 2,
    name: "Cleaner",
    image: "APR180000751xx8APR24_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 300,
  },

  {
    id: 3,
    name: "Straweberry Jam",
    image: "DEC120005312xx20DEC21_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 400,
  },
  {
    id: 4,
    name: "Digestive Biscuits",
    image: "FEB120002934xx15FEB23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 200,
  },
  {
    id: 5,
    name: "Jaggery Cookies",
    image: "FEB120006096xx20FEB23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 300,
  },
  {
    id: 6,
    name: "Protein Cookies",
    image: "FEB120006097xx20FEB23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 400,
  },

  {
    id: 7,
    name: "Red Label",
    image: "FEB130000348xx29FEB24_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 500,
  },
  {
    id: 8,
    name: "Juice",
    image: "FEB130001741xx28FEB24_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 100,
  },
  {
    id: 9,
    name: "Ice Pepsi",
    image: "FEB130001977xx14FEB23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 200,
  },
  {
    id: 10,
    name: "Sugnadhi Indryani Rice",
    image: "JUL110004495xx4JUL24_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 400,
  },
  {
    id: 11,
    name: "Rice",
    image: "JUL110004496xx4JUL24_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 200,
  },
  {
    id: 12,
    name: "Protein Powder",
    image: "JUL120006565xx10JUL23_5_P.jpg",
    des: "Nongshim Shin Ramyun Korean Style Noodles : 120 gms",
    price: 700,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="desc">${value.des}</div>
        <div class="price">&#8377; ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>

        `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice += value.quantity * value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
            <div><img src="dmart/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${(value.price * value.quantity).toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changequantity(${key},${
        value.quantity - 1
      })">-<button>
            <div class="count">${value.quantity}</div>
            <button onclick="changequantity(${key},${
        value.quantity + 1
      })">+<button>

            </div>
            `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changequantity(key, quantity) {
  if (quantity <= 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    //listCards[key].price=quantity*products[key].price
  }
  reloadCard();
}

var bttn = $("#top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    bttn.addClass("show");
  } else {
    bttn.removeClass("show");
  }
});

bttn.on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, "300");
});
