const tituloOriginal = document.title;

document.addEventListener('visibilitychange', function () {

    if (document.visibilityState === 'hidden') {
        document.title = "Volte para minhas redes! 🤗";
    } else {
        document.title = tituloOriginal;
    }
});
