var taustapildid = ['kontor1.jpg', 'kontor2.jpg', 'kontor3.jpg']; 
var hetkePilt = 0;
var intervalliPikkus = 5000;

function vahetaTaust() {
    document.getElementById('muutuv-taust').style.backgroundImage = (taustapildid[hetkePilt]);
    hetkePilt = (hetkePilt + 1) % taustapildid.length;
}

setInterval(vahetaTaust, intervalliPikkus);
