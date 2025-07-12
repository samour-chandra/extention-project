const cardButton = document.querySelectorAll(".card-event");
const logoMood = document.querySelector(".header__right-logo");
const body = document.querySelector(".body");
const activationButtons = document.querySelectorAll(".btn");
const cardMianContainer = document.querySelectorAll(".card__main");
const activeButton = document.querySelector(".btn-active");
const inActiveButton = document.querySelector(".btn-inactive");
const allButton = document.querySelector(".btn-all");

// add the night and day mood
let mood = "light";
const logoChange = function () {
  if (mood === "light") {
    lightMood();
  } else if (mood === "dark") {
    darkMood();
  }
};
document
  .querySelector(".header__right")
  .addEventListener("click", function (e) {
    e.preventDefault();
    logoChange();
  });

const lightMood = function () {
  logoMood.src =
    "./browser-extensions-manager-ui-main/assets/images/icon-moon.svg";
  body.style.background = "linear-gradient(to left, #ECF3FD, #EFFBFB)";

  document.querySelector(".extention__left").style.color = "black";
  document.querySelector(".header").style.backgroundColor =
    "rgb(252, 253, 255)";
  mood = "dark";
};
const darkMood = function () {
  logoMood.src =
    "./browser-extensions-manager-ui-main/assets/images/icon-sun.svg";
  body.style.background =
    "linear-gradient(to left, rgb(5, 10, 30), rgb(9, 21, 63))";
  document.querySelector(".header").style.backgroundColor =
    "rgb(118, 119, 121)";
  document.querySelector(".extention__left").style.color = "white";
  mood = "light";
};

// showing the button is active

activationButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (!button.classList.contains("active")) {
      activationButtons.forEach((btn) => btn.classList.remove("active"));
    }
    button.classList.toggle("active");
  });
});

// functionality for card checkbox who show card is active or not
// cardButton.forEach((btn) => {
//   btn.addEventListener("change", function (e) {
//     const siblingDiv = btn.nextElementSibling;
//     const child = siblingDiv.children[0];
//     if (btn.checked) {
//       siblingDiv.classList.add("active-box");
//       child.classList.add("active-checkbox");
//     } else {
//       child.classList.remove("active-checkbox");
//       siblingDiv.classList.remove("active-box");
//     }
//   });
// });

// adding event handler in the card main container to handler all the card event easyly
cardMianContainer.forEach((container) => {
  // adding true false for active inactive buttons
  container.setAttribute("data-active", "false");

  container.addEventListener("click", function (e) {
    // find tag for leasing checkbos event
    const btnCheckbox = e.target.closest(".card-event");
    // find tag for lesting remove button event
    const btn = e.target.closest(".btn-card");
    // // find tag for lesting remove button event
    // const btnActive = e.target.closest(".btn-card");
    // functionality for card checkbox who show card is active or not
    if (btnCheckbox) {
      cheackBoxClick(container, btnCheckbox);
    } else if (btn) {
      // Add functionality for the card checkbox who shows this button is active or not
      e.preventDefault();
      removeCard(container);
    }
  });
});

// chekedbox clicked or not functionaliy
const cheackBoxClick = function (container, btnCheckbox) {
  btnCheckbox.addEventListener("change", function (e) {
    const siblingDiv = btnCheckbox.nextElementSibling;
    const child = siblingDiv.children[0];
    if (btnCheckbox.checked) {
      siblingDiv.classList.add("active-box");
      child.classList.add("active-checkbox");
      // adding true false for active inactive buttons
      container.setAttribute("data-active", "true");
    } else {
      child.classList.remove("active-checkbox");
      siblingDiv.classList.remove("active-box");
      // adding true false for active inactive buttons
      container.setAttribute("data-active", "false");
    }
  });
};

// card removing functionality
const removeCard = function (container) {
  container.classList.add("card-remove-frist");
  setTimeout(() => {
    container.remove();
  }, 1000);
};

// functionlity for acitve buttons
activeButton.addEventListener("click", function (e) {
  cardMianContainer.forEach((container) => {
    cardShowRemove(container, "false", "true");
  });
});

// functionality for inactive buttons
inActiveButton.addEventListener("click", function (e) {
  cardMianContainer.forEach((container) => {
    cardShowRemove(container, "true", "false");
  });
});

// functionality for all buttons
allButton.addEventListener("click", function () {
  cardMianContainer.forEach((container) => {
    container.classList.remove("card-remove-second");
    setTimeout(() => {
      container.classList.remove("card-remove");
    }, 1000);
  });
});

// function for card finding

const cardShowRemove = function (container, Boolean1, Boolen2, s) {
  if (container.getAttribute("data-active") === Boolean1) {
    container.classList.add("card-remove-second");
    setTimeout(() => {
      container.classList.add("card-remove");
    }, 1000);
  }
  if (container.getAttribute("data-active") === Boolen2) {
    container.classList.remove("card-remove-second");
    setTimeout(() => {
      container.classList.remove("card-remove");
    }, 1000);
  }
};
