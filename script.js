console.log('script launch...');
let devlogs = [
    {
        imgSrc: "perso.png",
        text: "Perso"
    },
    {
        imgSrc: "pnj.png",
        text: "Personnage non joueur avec dialogue"
    },
    {
        imgSrc: "ui.png",
        text: "nos ui (user interface)"
    },
    {
        imgSrc: "multi.png",
        text: "un systeme de multijoueur"
    },
    {
        imgSrc: "mob.png",
        text: "des enemies avec une ia avancé"
    },
    {
        imgSrc: "boss.png",
        text: "des boss de donjon avec des mecaniques"
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
