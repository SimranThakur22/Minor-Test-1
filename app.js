let icon = document.querySelectorAll(".icon");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random() * 3);
let option = document.querySelector(".option");
let triangle = document.querySelector(".triangle");
let stone = document.querySelector(".stone-icon computer");
let user = document.querySelector(".user");
let pc = document.querySelector(".pc");
let winModal = document.querySelector(".win-modal");
let win = document.querySelector(".win");
let info = document.querySelector(".info");
let replaybtn = document.querySelector(".replay");
let userScore = JSON.parse(localStorage.getItem("score1"));
let userScoreElem = document.querySelector(".scoreboardUser");
let compScore = JSON.parse(localStorage.getItem("score2"));
let compScoreElem = document.querySelector(".scoreboardComp");
let rules = document.querySelector(".rules");
let rulebox = document.querySelector(".rule-modal");
let closebtn = document.querySelector(".close");
let next = document.querySelector(".next");
let finalreplay = document.querySelector(".final-replay");
let victoryModal = document.querySelector(".victory-modal");
let scoreSection = document.querySelector(".score-section");
let gameeSection = document.querySelector(".game-section");

let count1 = 0;
let count2 = 0;
rules.addEventListener("click", (event) => {
  event.stopPropagation();
  rulebox.style.display = "flex";
});
closebtn.addEventListener("click", (event) => {
  event.stopPropagation();
  rulebox.style.display = "none";
});
if (userScore) {
  userScoreElem.innerText = userScore;
}
if (compScore) {
  compScoreElem.innerText = compScore;
}
// rules.addEventListener("click", (event) => {
//   event.stopPropagation();
//   rulebox.style.display = "flex";
// });
// closebtn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   rulebox.style.display = "none";
// });
icon.forEach((element, index) => {
  element.addEventListener("click", () => {
    triangle.style.display = "none";
    icon.forEach((item) => {
      item.style.display = "none";
    });
    user.style.opacity = "1";
    pc.style.opacity = "1";
    element.style.display = "block";
    element.classList.add("show");
    computer[random].style.display = "block";
    computer[random].classList.add("pcshow");
    if (
      (index === 0 && random === 1) ||
      (index === 1 && random === 2) ||
      (index === 2 && random === 0)
    ) {
      winModal.style.display = "grid";
      element.classList.add("animation");
      count1 = userScore;
      count1 += 1;
      userScoreElem.innerText = count1;
      localStorage.setItem("score1", JSON.stringify(count1));
      next.style.display = "flex";
      next.classList.add("next");
    } else if (index === random) {
      winModal.style.display = "grid";
      win.innerText = "TIE UP";
      info.innerText = "";
      replaybtn.innerText = "REPLAY";
    } else {
      winModal.style.display = "grid";
      win.innerText = "YOU LOST";
      computer[random].classList.add("animation");
      count2 = compScore;
      count2 += 1;
      compScoreElem.innerText = count2;
      localStorage.setItem("score2", JSON.stringify(count2));
    }
  });
});
replaybtn.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.reload();
});
finalreplay.addEventListener("click", () => {
  victoryModal.style.display = "none";
});
