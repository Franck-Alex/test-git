var Input = document.getElementById('input');
var Btn_ajouter = document.getElementById('btn_ajouter');
var Taches = document.getElementById('taches');

function test() {
    // vérifie si vide
    if (Input.value != "") {
        // céer un paragraphe
        var paragraph = document.createElement('p');
    }
    //ajouter du contenu au paragraphe
    paragraph.innerText = Input.value;

    //ajouter une classe
    paragraph.classList.add('paragraphe');

    //insérer dans le conteneur
    Taches.appendChild(paragraph);

    //effacer le contenue après remplissage
    Input.value = "";

    //barrer la tache que on click dessus
    paragraph.addEventListener('click', function () {
        paragraph.classList.toggle('paragraphe_click');
    })

    //supprimer la tache que on double click sur elle
    paragraph.addEventListener('dblclick', function () {
        Taches.removeChild(paragraph);
    })
}