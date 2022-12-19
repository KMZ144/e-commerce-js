let NameExpression = /^[a-zA-Z]+$/;
let passExpression=/(\w|\W){8}/;
let EmailExpression = /([a-zA-z]|[0-9])+@[a-z]+.com/;


let nameInput= document.getElementById("username");
let passInput=document.getElementById("pass");
let mailInput=document.getElementById("mail");

let wrong=document.querySelectorAll(".none")


function hide(node,i){
node.addEventListener("input",function(){
    wrong[i].classList.add("none")
})}

hide(nameInput,0)
hide(passInput,1)
hide(mailInput,2)


let submit=document.getElementById("submit")
submit.addEventListener("click",function(e){

        if(!NameExpression.test(nameInput.value)){
            wrong[0].classList.remove("none")
            e.preventDefault();
        }
        if(!passExpression.test(passInput.value)){
            wrong[1].classList.remove("none")
            e.preventDefault();
        }
        if(!EmailExpression.test(mailInput.value))
        {
            wrong[2].classList.remove("none")
            e.preventDefault();
        }
    })


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
redirect(about,"./about.html");
redirect(contact,"./contact.html");


//counter

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

counter=parseInt(getCookie("counter"))
document.getElementById("cart-counter").innerHTML = counter;