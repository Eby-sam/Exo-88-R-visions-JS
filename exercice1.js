let input = document.getElementById("champ-text");
let buttonSend = document.getElementById("buttonSend");
let tableau = [];
let divContainer = document.getElementById("container");
let divFifth = document.getElementById("fifth");
let buttonRandom = document.getElementById("buttonRandom");
let buttonShowList = document.getElementById("buttonList");
let buttonDel = document.getElementById("buttonDel");

buttonSend.addEventListener("click", function () {
    let text = input.value;
    tableau.push(text);
    console.log(tableau);
    if (tableau.length < 10) {
        divContainer.innerHTML = "Entrez au moins 10 valeurs";
    }
    if (tableau.length === 5) {
        divFifth.innerHTML = tableau[4];
    }
    if (tableau.length === 10) {
        divContainer.innerHTML = tableau[(Math.trunc(Math.random()*10))];
    }

});

if (tableau.length === 4) {
    divFifth.innerHTML = tableau[4];
};

buttonRandom.addEventListener("click", function () {
    divContainer.innerHTML = tableau[Math.trunc(Math.random()*10)];
});

buttonShowList.addEventListener("click", function () {
    for (let x = 0; x < tableau.length; x++) {
        divContainer.innerHTML += "<br>" + x + " - " + tableau[x];
    }
})

buttonDel.addEventListener("click", function () {
    let del = (tableau.length - 1);

})