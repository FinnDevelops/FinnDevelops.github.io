document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const body = document.getElementById("wrap");
  const aBody = document.querySelector("body");
  const functions = document.getElementById("functions");
  const select = document.getElementById("select");
  let theme = localStorage.getItem("theme");
  if (theme !== null || theme !== "dark") {
    if (theme === "light") {
      aBody.style.backgroundColor = "white";
      select.style.backgroundColor = "rgb(235,235,235)";
      nav.classList.toggle("light");
      nav.classList.toggle("shadow");
      let thing = Array.from(nav.children);
      thing.forEach(function (thi) {
        thi.classList.toggle("light");
        thi.classList.toggle("link-l");
      });

      let thing2 = Array.from(body.children);
      thing2.forEach(function (hi) {
        hi.classList.toggle("light");
      });
      let thing4 = Array.from(select.children);
      console.log(select, thing4);
      thing4.forEach(function (tti) {
        let something = Array.from(tti.children);
        console.log(something);
        something.forEach(function (aaaaa) {
          aaaaa.classList.toggle("light");
          aaaaa.classList.toggle("link-l");
        });
        tti.classList.toggle("light");
      });
      let thing3 = Array.from(functions.children);
      thing3[0].classList.toggle("functions-l");
    }
  }
});

function dark() {
  localStorage.setItem("theme", "dark");
}

function light() {
  localStorage.setItem("theme", "light");
}
