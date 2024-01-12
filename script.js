console.log('script launch...');
let devlogs = [
    {
        imgSrc: "image.png",
        text: "Loading Screen"
    },
    {
        imgSrc: "ala.png",
        text: "Page de Connexion"
    },
    {
        imgSrc: "creation_de_perso.png",
        text: "Customisation de personnage"
    },
    {
        imgSrc: "images.png",
        text: "Mots de passe"
    },
    {
        imgSrc: "feur.png",
        text: "Page d'inscription"
    }

];

let menu = document.getElementById('logsOne');
let btnprev = document.getElementById('prev');
let btnnext = document.getElementById('next');
let currentIndex = 0;

function showLog(index) {
    menu.style.background = `url('${devlogs[index]["imgSrc"]}')`;
    menu.style.backgroundRepeat = "no-repeat";
    menu.style.backgroundSize = "cover";
    menu.style.borderRadius = "10px";
    menu.innerHTML = `<p style="margin: 0; padding: 2% 10%; width: 80%;">${devlogs[index]["text"]}</p>`;
}

function prevLog() {
    currentIndex = (currentIndex - 1 + devlogs.length) % devlogs.length;
    showLog(currentIndex);
}

function nextLog() {
    currentIndex = (currentIndex + 1) % devlogs.length;
    showLog(currentIndex);
}

btnprev.addEventListener('click', prevLog); // Utilisation de la référence de fonction
btnnext.addEventListener('click', nextLog); // Utilisation de la référence de fonction

// Affichage initial du premier élément du carrousel
showLog(currentIndex);

// Défilement automatique toutes les 6 secondes (6000 ms)
// setInterval(nextLog, 6000);
