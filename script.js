console.log('script launch...');
let devlogs = [
    {
        imgSrc: "téléchargement.jpeg",
        text: "Création d'un Loading Screen"
    },
    {
        imgSrc: "b87e6e8821362242302c8bcfd54b04a0.png",
        text: "Mise en place d'un Caracter Creator"
    },
    {
        imgSrc: "giphy.gif",
        text: "Creation d'un Personnage basic avec des mouvements"
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
