// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$(document).ready(function () {

    // Creazione Array: 15 Rossi e 49 Verdi
    var color = [];
    for (var i= 0; i < 64; i++) {
        if (i < 15) {
            color.push("red");
        } else {
            color.push("green")
        }
    }

    // Shuffle Array in modo da non far risultare Rossi i primi 15 (i <15) => push.('red')
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        }
    shuffle(color);

    // Mostro Array dopo Shuffle
    console.log(color);

    // Creazione loop 64 Cicli per aggiunta div con class green/red a seconda dell'Array
    var quadrato = "";
    for (var i = 0; i < 64; i++) {
        container = document.getElementById('container').innerHTML;
        document.getElementById('container').innerHTML = container + "<div" + " class='square " + color[i] + "'"  +  ">" + "</div>";
        };

    // Contatore Click Square
    var greenCounter = 0;
    var redCounter = 0;

    // Imposto background al click
    $('div .square').click(function() {
        if ($(this).hasClass("green")) {
            $(this).css('background', 'green');
            greenCounter += 1;
        }
        else if ($(this).hasClass("red")) {
            $(this).css('background', 'red');
            redCounter += 1;
        }
        // Collego il contatore al testo html
        $('.js-red-counter').text(redCounter);
        $('.js-green-counter').text(greenCounter);
    });
});