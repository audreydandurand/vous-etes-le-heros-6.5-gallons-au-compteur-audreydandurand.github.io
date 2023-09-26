let chapters = {
    debut : {
        titre: "Aventure de rêve", 
        description: "En après-midi, tu décides d'aller faire un tour d'hélicoptère avec ton ami qui vient de terminer sa formation en tant que pilote privé. Vous vous êtes promené au dessus de la mer et vous avez parcouru une bonne distance. Votre ami remarque donc qu'il vous reste 6,5 gallons d'essence. Étant assez loin des berges, vous ne savez pas qu'elle est la meilleure décision à prendre.", 
        image: "./assets/image/helicoptere.jpg",
        boutons: [
            {titre: 'Atterissage sur un banc de sable', 'destination': 'atterissage'},
            {titre: 'Continuer d\'avancer vers la rive la plus proche', 'destination': 'rive'}
        ]
    },

    atterissage : {
        titre: "Atterissage forcé", 
        description: "Vous avez réalisé que vous rendre à votre point de départ ou de l'autre côté de la rive était impossible. Atterrir sur le banc de sable que vous voyiez du haut de l'hélicoptère était la meilleure option. Que sera la meilleure action à faire suite à votre atterissage forcé?  ", 
        image: './assets/image/atterissage.jpg',
        boutons: [
            {titre: 'Partir à la recherche des rames', 'destination': 'rame'},
            {titre: 'Partir à la recherche du bateau de sauvetage', 'destination': 'bateau'},
            {titre: 'Faire un appel se secours avec la radio satellite', 'destination': 'radio'}
        ]
    },

    rive : {
        titre: "Vous vous écraser", 
        description: "Croyant vous rendre à la rive, vous avez dépensé tout votre carburant sans pouvoir atterrir sain et sauf. Vous vous êtes écrasé en plein milieu de la mer et vous n'avez pas survécu.", 
        image: "fdg",
        boutons: [
            {titre: 'Retour au début', 'destination': 'debut'}
        ]
    },

    rame : {
        titre: "À la recherche des équipements de survie", 
        description: "Votre ami vous explique que les rames ne sont pas rangées au même endroit que le bateau de sauvetage. Pendant qu'il cherche le bateau de sauvetage, vous avez décidé de regarder dans les compartiments de l'hélicoptère pour trouver les rames dans le but d'utiliser le bateau de sauvetage.  ", 
        image: "fdg",
        boutons: [
            {titre: 'Utiliser le bateau de sauvetage', 'destination': 'bateau'},
        ]
    },

    bateau : {
        titre: "Le bateau de sauvetage ", 
        description: "Après avoir atteri sur le banc de sable, vous commencez à chercher avec votre ami le bateau de sauvetage rangé dans l'hélicoptère. Dès que vous le trouvez, vous embarquez tous les deux dans le bateau prêt à regagner la rive. Vous vous éloignez assez rapidement du banc de sable à cause de la marée. Vous demandez à votre ami de vous donner une rame pour pagayer vers la rive.", 
        image: "./assets/image/bateau_sauvetage.jpg",
        boutons: [
            {titre: 'Avoir les rames à porter de main', 'destination': 'helicoptere'},
            {titre: 'N\'a pas les rames en sa possession', 'destination': 'derive'}
        ]
    },

    radio : {
        titre: "Appel à l'aide", 
        description: "Vous avez décidé de demander de l'aide à la garde côtière en utilisant la radio satellite. Par chance, ils vous répondent rapidement et ils viendront vous chercher. Vous ne savez pas exactement dans combien de temps, ils vous retrouveront. Les heures avancent et vous êtes toujours là. La marée, elle, elle augmente beaucoup plus vite. Vous ne croyez pas pouvoir rester assis dans le sable sec très longtemps encore. ", 
        image: "fdg",
        boutons: [
            {titre: 'Aller sur le toit de l\'hélicoptere', 'destination': 'helicoptere'},
            {titre: 'Embarquer dans le bateau de sauvetage', 'destination': 'helicoptere'}
        ]
    },

    derive : {
        titre: "La dérive", 
        description: " Vous réalisez que vous n'avez aucune rame dans le bateau de sauvetage. Vous avez déjà beaucoup dérivé du banc de sable lorsque vous le réalisez. Vous remarquez aussi que le bateau se dégonfle assez vite et qu'il a donc été percé. Les secours ne seront pas arrivés à temps pour vous sauver. ", 
        image: "./assets/image/derive.jpg",
        boutons: [
            {titre: 'Retour au début', 'destination': 'debut'}
        ]
    },

    
    helicoptere : {
        titre: "Les rescousses sont arrivées", 
        description: " Vous voyez lentement arriver dans le ciel un hélicoptère. Il se dirige vers vous et vous lui faites signent. Les secours sont enfin arrivé et ils vous remontent dans l'hélicoptère de la garde côtière. Vous êtes maintenant à bord et sain et sauf. Vous regardez le pilote vous ramener sur la terre ferme lorsqu'une alarme sonne sur le cadran de bord. Vous vous réveillez soudainement dans votre chambre. ", 
        image: "./assets/image/secours.jpg",
        boutons: [
            {titre: 'Retour au début', 'destination': 'debut'}
        ]
    },
}

function goToChapter(cle){

    var chapitre = chapters(cle);
    console.log(chapitre.titre + chapitre.description + chapitre.boutons)

}
//




goToChapter('debut')