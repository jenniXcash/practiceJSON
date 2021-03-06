const catImg = document.querySelector(".current");
const catArray = [];

async function fetchCats() {
  const res = fetch("https://api.thecatapi.com/v1/images/search");
  res
    .then(function (response) {
      return response.json();
    })
    .then(function (cat) {
      showCat(cat);
      console.log(catArray);
    });
}

function showCat(cat) {
  catImg.classList.add("images");
  catImg.src = cat[0].url;
  catArray.push(cat[0].url);
}

document.querySelector("button").onclick = fetchCats;

document.querySelector("button").addEventListener(
  "click",
  () => {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous cat";
    if (!catArray.indexOf(catImg.src)) {
      document
        .querySelector(".buttons")
        .insertBefore(prevBtn, document.querySelector("button"));

      prevBtn.onclick = function () {
        catImg.src = catArray[catArray.indexOf(catImg.src) - 1];
      };
    }
  }
  // { once: true }
);
