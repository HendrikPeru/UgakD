var taustapildid = ['pilt1.jpg', 'pilt2.jpg', 'pilt3.jpg']; // Pane siia oma piltide URL-id

var hetkePilt = 0;
var intervalliPikkus = 5000; // Muuda vastavalt soovitud vahetuse ajale millisekundites

function vahetaTaust() {
    document.getElementById('muutuv-taust').style.backgroundImage = 'url(' + taustapildid[hetkePilt] + ')';
    hetkePilt = (hetkePilt + 1) % taustapildid.length;
}

setInterval(vahetaTaust, intervalliPikkus);
