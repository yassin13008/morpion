// J'ai assigner des variable à des id précis pour le jeu 

let cases = [... document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

// Je crée un objet qui va contenir toutes les informations importantes de notre jeu appelé state

let state = {
    joueurEnCours : 1,
    scoreJ1 : 0,
    scoreJ2 : 0,
    matchNuls: 0,
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0,
    c6:0,
    c7:0,
    c8:0,
    c9:0,
}

// Création de la fonction jouer 

const jouerCase = (e)=> {
    let idCase= e.target.id;
    console.log(idCase)
}

// Création du jeu = 1er partie = L'event clic

cases.forEach((el)=> {
    el.addEventListener('click',jouerCase);
})