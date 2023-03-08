let tituloDoc = document.title;

window.addEventListener("blur", () => {
	document.title = "Volte para cá... 😢";
});

window.addEventListener("focus", () => {
	document.title = tituloDoc;
});