let data = [{
		id: 1,
		name: "Andrea Smith",
		job: "Web Developer",
		picture: "img/1.jpg",
		review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, adipisci?"
	},
	{
		id: 2,
		name: "Stephanie Johanna",
		job: "Influencer",
		picture: "img/2.jpg",
		review: "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sit saepe cupiditate delectus quas error quisquam."
	},
	{
		id: 3,
		name: "Amelia",
		job: "UI/UX Designer",
		picture: "img/3.jpg",
		review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
	}
]

const image = document.querySelector(".review-img");
const name = document.querySelector(".review-name");
const job = document.querySelector(".review-job");
const review = document.querySelector(".review-text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let index = 0;
window.addEventListener("DOMContentLoaded", function () {
	render(index);
})


function render(person) {
	const item = data[person]
	image.src = item.picture
	name.textContent = item.name
	review.textContent = item.review
	job.textContent = item.job

}

nextBtn.addEventListener("click", function() {
	index++;
	if (index > data.length - 1) {
		index = 0;
	}
	render(index);
})

prevBtn.addEventListener("click", function() {
	index--;
	if (index < 0) {
		index = 2;
	}
	render(index);
})