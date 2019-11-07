// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$(document).ready(function () {
    // Contatore Click Square
    greenCounter = 0;
    redCounter = 0;

    // Imposto background al click
    $('.square').click(function() {
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