document.addEventListener("DOMContentLoaded", () => {
	//1
	const infoSection = document.getElementById("info");
	if (infoSection) {
	   const list = document.createElement("ul");

	   const itemsText = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"]; 
		itemsText.forEach(text => {
		   const listItem = document.createElement("li");
			listItem.textContent = text; 
			list.appendChild(listItem); 
 	  });

	   infoSection.appendChild(list); 
	}

	//2
	const header = document.getElementById("header");
	if (header) {
	   const link = document.createElement("a");  
	   link.textContent = "Мой профиль в Linkedin";
	   link.href = "https://www.linkedin.com/in/your-profile";
	   link.target = "_blank";
	   header.appendChild(link);
	}

	//3
	const main = document.getElementById("main");
	if (main) {
	   const dynamicSection = document.createElement("section");
	   dynamicSection.classList.add("dynamic");

	   const dynamicTitle = document.createElement("h2"); 
	   dynamicTitle.textContent = "Обучение JavaScript";

	   const dynamicParagraph = document.createElement("p");
	   dynamicParagraph.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

	   dynamicSection.appendChild(dynamicTitle);
	   dynamicSection.appendChild(dynamicParagraph);

	   main.prepend(dynamicSection); 
	}

	//4
	if (infoSection) {
	   const infoParagraph = infoSection.querySelector("p");
			if (infoParagraph) {
		infoSection.removeChild(infoParagraph);
 	  }
	}

	//5
	const footer = document.getElementById("footer");
	if (footer) {
	   footer.innerHTML = "";
	}
});
