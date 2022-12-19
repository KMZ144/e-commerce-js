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
if(hasCookie("counter"))
    {
      counter=parseInt(getCookie("counter"))
      
    }
    else{
      counter="0";
      setCookie("counter",counter,1)
    }
document.getElementById("cart-counter").innerHTML = counter;
let add = document.getElementsByClassName("add");
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", () => {
      counter=parseInt(getCookie("counter"))
      setCookie("counter",++counter,1)
    document.getElementById("cart-counter").innerHTML = counter;
  });
}



//filter

var data = [];
data[0] = [
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
];

data[1] = [
  {
    desc: "Vacheron Constantin",
    price: 2,
    src: "./images/Vacheron/1.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 2,
    src: "./images/Vacheron/2.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 2,
    src: "./images/Vacheron/3.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 3,
    src: "./images/Vacheron/4.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 4,
    src: "./images/Vacheron/5.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 5,
    src: "./images/Vacheron/6.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 6,
    src: "./images/Vacheron/7.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 7,
    src: "./images/Vacheron/8.webp",
  },
  {
    desc: "Vacheron Constantin",
    price: 7,
    src: "./images/Vacheron/9.webp",
  },
];

data[2] = [
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
];

data[3] = [
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

let products = document.querySelectorAll(".product");
function changeBrand(brand) {
  for (let i = 0; i < products.length; i++) {
    products[i].children[0].setAttribute("src", brand[i].src);
    products[i].children[1].innerHTML = brand[i].desc;
    products[i].children[2].innerHTML = `${brand[i].price} $`;
  }
}

let brands = document.getElementsByClassName("brand");

let names = ["Rolex", "Vacheron", "Omega", "Tag Heuer"];

for (let i = 0; i < brands.length; i++) {
  brands[i].innerHTML = names[i];
  brands[i].addEventListener("click", () => {
    changeBrand(data[i]);
  });
}


//redirect to product page
// for (let i = 0; i < products.length; i++) {
//   products[i].children[0].addEventListener("click", () => {
//     location.href = "./product.html";
//   });
// }

let home = document.querySelectorAll(".home");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");

//home about contact redirection

function redirect(node, url) {
  for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", function() {
      location.href = url;
    });
  }
}

redirect(home,"./index.html");
redirect(contact,"./contact.html");
redirect(about,"./about.html");
