//slider
var image = document.getElementById("img");
var sources = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpeg",
];
var i = 0;
var myInterval = setInterval(function () {
  next();
}, 2000);

function next() {
  image.setAttribute("src", sources[i]);
  i++;
  if (i > sources.length - 1) {
    i = 0;
  }
}
function previous() {
  i--;
  if (i < 0) {
    i = sources.length - 1;
  }
  image.setAttribute("src", sources[i]);
}

document.getElementById("next").addEventListener("click", () => {
  next();
  clearInterval(myInterval);
});

document.getElementById("previous").addEventListener("click", () => {
  previous();
  clearInterval(myInterval);
});

//add to cart
function setCookie(key, value, days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${key}=${value};expires=${date}`;
}

function deleteCookie(key) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${key}=dummy;expires=${date}`;
}

function getCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return keyValue[j + 1];
      }
    }
  }
}

function hasCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return true;
      }
    }
  }
  return false;
}

let counter;
if (hasCookie("counter")) {
  counter = parseInt(getCookie("counter"));
} else {
  counter = "0";
  setCookie("counter", counter, 1);
}
document.getElementById("cart-counter").innerHTML = counter;

//filter
var data = [
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/1.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/2.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/3.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/4.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/5.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/6.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/7.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/8.webp",
  },
  {
    desc: "Rolex",
    price: 1,
    src: "./images/Rolex/9.webp",
  },
  {
    desc: "Vacheron",
    price: 2,
    src: "./images/Vacheron/1.webp",
  },
  {
    desc: "Vacheron",
    price: 2,
    src: "./images/Vacheron/2.webp",
  },
  {
    desc: "Vacheron",
    price: 2,
    src: "./images/Vacheron/3.webp",
  },
  {
    desc: "Vacheron",
    price: 3,
    src: "./images/Vacheron/4.webp",
  },
  {
    desc: "Vacheron",
    price: 4,
    src: "./images/Vacheron/5.webp",
  },
  {
    desc: "Vacheron",
    price: 5,
    src: "./images/Vacheron/6.webp",
  },
  {
    desc: "Vacheron",
    price: 6,
    src: "./images/Vacheron/7.webp",
  },
  {
    desc: "Vacheron",
    price: 7,
    src: "./images/Vacheron/8.webp",
  },
  {
    desc: "Vacheron",
    price: 7,
    src: "./images/Vacheron/9.webp",
  },
  {
    desc: "Omega",
    price: 3,
    src: "./images/Omega/1.png",
  },
  {
    desc: "Omega",
    price: 70,
    src: "./images/Omega/2.png",
  },
  {
    desc: "Omega",
    price: 80,
    src: "./images/Omega/3.png",
  },
  {
    desc: "Omega",
    price: 90,
    src: "./images/Omega/4.png",
  },
  {
    desc: "Omega",
    price: 54,
    src: "./images/Omega/5.png",
  },
  {
    desc: "Omega",
    price: 53,
    src: "./images/Omega/6.png",
  },
  {
    desc: "Omega",
    price: 45,
    src: "./images/Omega/7.png",
  },
  {
    desc: "Omega",
    price: 7,
    src: "./images/Omega/8.png",
  },
  {
    desc: "Omega",
    price: 99,
    src: "./images/Omega/9.png",
  },
  {
    desc: "Tag Heuer",
    price: 3,
    src: "./images/TagHeuer/1.webp",
  },
  {
    desc: "Tag Heuer",
    price: 70,
    src: "./images/TagHeuer/2.webp",
  },
  {
    desc: "Tag Heuer",
    price: 80,
    src: "./images/TagHeuer/3.webp",
  },
  {
    desc: "Tag Heuer",
    price: 90,
    src: "./images/TagHeuer/4.webp",
  },
  {
    desc: "Tag Heuer",
    price: 54,
    src: "./images/TagHeuer/5.webp",
  },
  {
    desc: "Tag Heuer",
    price: 53,
    src: "./images/TagHeuer/6.webp",
  },
  {
    desc: "Tag Heuer",
    price: 45,
    src: "./images/TagHeuer/7.webp",
  },
  {
    desc: "Tag Heuer",
    price: 7,
    src: "./images/TagHeuer/8.webp",
  },
  {
    desc: "Tag Heuer",
    price: 99,
    src: "./images/TagHeuer/9.webp",
  },
];

// create products in categories div
let categoriesDiv = document.querySelector(".categories");

let productDiv, productImg, productDesc, productPrice;

function createProductDiv(arr) {
  for (let i = 0; i < arr.length; i++) {
    productDiv = document.createElement("div");
    productImg = document.createElement("img");
    productDesc = document.createElement("p");
    productPrice = document.createElement("p");
    productAdd = document.createElement("p");
    productDiv.classList.add("product");
    productImg.classList.add("product-img");
    productDesc.classList.add("product-p");
    productPrice.classList.add("product-p");
    productAdd.classList.add("add");
    productAdd.innerHTML = "+ Add to cart";
    productAdd.addEventListener("click", function () {
      counter = parseInt(getCookie("counter"));
      setCookie("counter", ++counter, 1);
      document.getElementById("cart-counter").innerHTML = counter;
    });
    productDiv.appendChild(productImg);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productAdd);
    categoriesDiv.appendChild(productDiv);
  }
}

createProductDiv(data);
changeBrand(data);

//remove div product
function removeProductDiv() {
  while (categoriesDiv.hasChildNodes()) {
    categoriesDiv.removeChild(categoriesDiv.lastChild);
  }
}

function changeBrand(dataSet) {
  for (let i = 0; i < dataSet.length; i++) {
    categoriesDiv.children[i].children[0].setAttribute("src", dataSet[i].src);
    categoriesDiv.children[i].children[1].innerHTML = dataSet[i].desc;
    categoriesDiv.children[i].children[2].innerHTML = `${dataSet[i].price} $`;
  }
}

document.getElementById("all").addEventListener("click", function () {
  removeProductDiv();
  createProductDiv(data);
  changeBrand(data);
});

//get category names
let categoryNames = [];
for (let i = 0; i < data.length; i++) {
  categoryNames.push(data[i].desc);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
categoryNames = categoryNames.filter(onlyUnique);

//create buttons
let brandsDiv = document.querySelector(".brands");
function createButton(name, div) {
  let btn = document.createElement("div");
  btn.classList.add("brand");
  div.appendChild(btn);
  btn.innerHTML = name;
  return btn;
}

for (let i = 0; i < categoryNames.length; i++) {
  let brand = createButton(categoryNames[i], brandsDiv);
  console.log(brand);
  brand.addEventListener("click", () => {
    let arr = data.filter((element) => {
      return element.desc == categoryNames[i];
    });
    removeProductDiv();
    createProductDiv(arr);
    changeBrand(arr);
  });
}

//home about contact redirection

let home = document.querySelectorAll(".home");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");

function redirect(node, url) {
  for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", function () {
      location.href = url;
    });
  }
}

redirect(home, "./index.html");
redirect(contact, "./contact.html");
redirect(about, "./about.html");
