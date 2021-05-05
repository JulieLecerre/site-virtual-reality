const boutonSeeAll= document.querySelector(".boutonSeeAll");
const imageAbove= document.querySelector(".imageAbove");
const imagePocket= document.querySelector(".imagePocket");
const imageCuriosity= document.querySelector(".imageCuriosity");
const imageFish= document.querySelector(".imageFish");

boutonSeeAll.addEventListener("click" , () => {
	imageAbove.classList.toggle("show");
	imagePocket.classList.toggle("show");
	imageCuriosity.classList.toggle("show");
	imageFish.classList.toggle("show");
})


 
