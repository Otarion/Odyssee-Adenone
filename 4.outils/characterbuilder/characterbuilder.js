//REDIRECTION SIMPLE VERS

let idCourrante =null;
document.addEventListener('DOMContentLoaded', () => {

    // Fonction réutilisable pour rediriger
    const firstPage = (page) => {
        window.location.href = page;
    };

    // Attribuer la fonction à tous les boutons avec la classe 'btn'
    const btnValid = document.querySelectorAll('.valid');
    btnValid.forEach((btn) => {
        btn.addEventListener('click', (event) => {

            // Récupérer l'attribut 'data-page' ou 'href' pour déterminer la page
            const page = event.currentTarget.dataset.page || event.currentTarget.href;

            // Rediriger vers la page
            firstPage(page);
        });
    });
});

/******************
 *****PEUPLE*****
 ******************/

//AFFICHAGE DES BOUTONS DE SOUS-CATEGORIES LORSQUE L'ON CLIQUE SUR UN BOUTON
function showDivAndText(buttonId, divId) {

    // Obtenir le bouton
    const button = document.getElementById(buttonId);
 const tab = ["btnssH","btnssE","btnssN","btnssD","btnssB","btnssHy"]

    // Ajouter un écouteur d'événements au bouton
    button.addEventListener('click', function() {

    textssPeuple.style.display="block";
        
for(let element of tab){
    if(element ===divId){
        document.getElementById(divId).style.display = "block"
    }else{
        document.getElementById(element).style.display = "none"
    }
}
    });
 }
 showDivAndText('btnH', 'btnssH');
 showDivAndText('btnE', 'btnssE');
 showDivAndText('btnN', 'btnssN');
 showDivAndText('btnD', 'btnssD');
 showDivAndText('btnB', 'btnssB');
 showDivAndText('btnHy', 'btnssHy');

 //AFFICHAGE DU BOUTON DE VALIDATION SI CLIQUE SUR BTNSSPEUPLE
 function showButtonOnClick(buttonClass, buttonId) {
    // Obtenir tous les boutons avec la classe spécifiée
    const buttons = document.getElementsByClassName(buttonClass);

    // Ajouter un écouteur d'événements à chaque bouton
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {

        // Obtenir le bouton à afficher
        const button = document.getElementById(buttonId);
        // Vérifier si le bouton existe
        if (button) {
          // Modifier la propriété CSS 'display' pour afficher le bouton
          button.style.display = 'block';
          expP.style.display = 'block';
        }
      });
    }
   }
   showButtonOnClick('btnssPeuple', 'validPeuple');