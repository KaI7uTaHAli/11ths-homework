document.addEventListener("DOMContentLoaded", () => {
	//1
	document.title = "Али Рахметулла";

	//2
	const header = document.getElementById("header");
	if (header) {
	   const siteTitle = header.querySelector("h1");
		if (siteTitle) {
		   siteTitle.textContent = "Изучение JavaScript";
		}
	}

	//3
	const menuLinks = document.querySelectorAll(".menu-link");
	menuLinks.forEach(link => console.log(link.textContent));

	//4
	const featuresListItems = document.querySelectorAll(".features-list li");
	if (featuresListItems.length > 1) {
	   featuresListItems[1].innerHTML = "<b>Поддержка API</b>";
	}
});
