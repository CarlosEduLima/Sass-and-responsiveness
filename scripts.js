// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Ferrari 488 GTB",
    location: "Curitiba",
    thumb: "./imgs/gtb.png",
  },
  {
    title: "Ferrari 488 GTB",
    location: "Brasília",
    thumb: "./imgs/gtb.png",
  },
  {
    title: "Ferrari 488 GTB",
    location: "Curitiba",
    thumb: "./imgs/gtb.png",
  },
  {
    title: "Ferrari 488 GTB",
    location: "Porto Alegre",
    thumb: "./imgs/gtb.png",
  },
  {
    title: "Ferrari 488 GTB",
    location: "Brasília",
    thumb: "./imgs/gtb.png",
  },
  {
    title:
      "Ferrari 488 GTB",
    location: "Curitiba",
    thumb: "./imgs/gtb.png",
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.location;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.ferrari.com/en-EN`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO