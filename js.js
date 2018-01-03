// Används för att ta bort "Sök" ur sökfältet
function removeDefault(a, b) {
	if (a.value === b) {
		a.value = "";
	}
}

// Används för att sätta tillbaka "Sök" i sökfätet om fältet lämnas tomt
function resetDefault(a, b) {
	if (a.value === "") {
		a.value = b;
	}
}

// "Sätta" språk
function setLanguage(a) {
	switch (a) {
		case "sv":
			alert("Språk har ändrats till svenska.");
			break;
			
		case "fi":
			alert("Kielet on muutettu suomeksi.");
			break;
			
		case "en":
			alert("Language have been changed to English.");
			break;
	}
}

// Används för att visa och dölja menyn i mobilversionen
var mainMenu = 0;
function topMenu() {
	
	var d = document.getElementById("main-nav");
	
	if (mainMenu === 0) {
		mainMenu = 1;
		d.style.maxHeight = "300px";
		d.style.transition = "max-height 0.4s ease-in";
	}
	else {
		mainMenu = 0;
		d.style.maxHeight = "59px";
		d.style.transition = "max-height 0.15s ease-in";
	}
}