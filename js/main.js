const slides = [
	{
		image: "img/01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
	},
	{
		image: "img/02.webp",
		title: "Ratchet & Clank: Rift Apart",
		text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
	},
	{
		image: "img/03.webp",
		title: "Fortnite",
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	},
	{
		image: "img/04.webp",
		title: "Stray",
		text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const slidesContainerElement = document.getElementById("slides-container");
const thumbsContainerElement = document.getElementById("thumbnails-container");

let activeSlide = 0;

slides.forEach((slide, index) => {
	const slideElement = document.createElement("div");
	slideElement.classList.add("slide");

	if (index == activeSlide) slideElement.classList.add("active");

	slideElement.innerHTML = `
    <img src="./img/${slide.image}" alt="" />
    <div class="slide-text">
      <h2>${slide.title}</h2>
      <p>${slide.text}</p>
    </div>`;

	slide.HTMLnode = slideElement;

	if (index == activeSlide) slideElement.classList.add("active");

	slidesContainerElement.append(slideElement);

	const nextButton = document.getElementById("go-next");
	const prevButton = document.getElementById("go-prev");

	nextButton.addEventListener("click", goNext);
	prevButton.addEventListener("click", goPrev);

	function goNext() {
		const oldSlide = slides[activeSlide].HTMLnode;
		oldSlide.classList.remove("active");

		activeSlide++;

		const newSlide = slides[activeSlide].HTMLnode;
		newSlide.classList.add("active");
	}

	function goPrev() {
		let prevIndex = activeSlide - 1;
		if (prevIndex < 0) prevIndex = slides.length - 1;
	}
});
