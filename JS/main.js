let x = document.querySelector(".img");
x.style.width = "400px";
x.style.height = "400px";

let change = () => {
  x.src = "../images/wallpaperflare.cjkjjom_wallpaper.jpg"
};

let b = document.querySelector(".btn").addEventListener("click", change);

let resize = () => { x.style.width = "700px", x.style.height = "700px" };

x.addEventListener("mouseover", resize);
let removeFun = () => {
  x.removeEventListener("mouseover", resize);
  x.style.width = "400px";
  x.style.height = "400px";
}

let nb = document.querySelector(".btntwo");
nb.addEventListener("click", removeFun);

// =============================================
let getLoginDetails = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log("Username: " + username);
  console.log("Password: " + password);
}

let sbtn = document.getElementById("submitbtn");
sbtn.addEventListener('click', () => {
  getLoginDetails();
});

username.onfocus = (() => { username.style.backgroundColor = "#999" });
password.onfocus = (() => { password.style.backgroundColor = "#999" });

// ===========================================
let section = document.createElement("section");
let h1 = document.createElement("h1");
let h1value = document.createTextNode("Products");
h1.appendChild(h1value);
section.appendChild(h1);


for (i = 0; i < 3; i++) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  let title = document.createElement("h2");
  let price = document.createElement("p");
  let button = document.createElement("button");
  let button2 = document.createElement("button");
  let h2value = document.createTextNode("Product Title");
  div.style.border = "2px solid #333";
  div.style.width = "300px";
  div.style.marginBottom = "30px";
  title.appendChild(h2value)
  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(price);
  div.appendChild(button);
  div.appendChild(button2);
  image.src = "../images/wallpaperflare.cjkjjom_wallpaper.jpg";
  image.style.width = "300px";
  let priceValue = document.createTextNode("100$");
  price.appendChild(priceValue);
  let btnValue = document.createTextNode("Delete")
  button.appendChild(btnValue);
  let btn2Value = document.createTextNode("Change")
  button2.appendChild(btn2Value);
  section.appendChild(div);
  let removePic = () => { image.style.display = "none" };
  button.addEventListener("click", () => { removePic() });
  let replacedh1 = document.createElement("h1");
  let h12 = document.createTextNode("h1 inplace of the pictur");
  replacedh1.appendChild(h12);
  let replacePic = () => { image.replaceWith(replacedh1) };
  button2.addEventListener("click", () => { replacePic() });
}

let body = document.getElementById("body");
body.appendChild(section);