var taustapildid = ['kontor1.jpg', 'kontor2.jpg', 'kontor3.jpg', 'kontor4.jpg', 'kontor5.jpg']; // taustapildid, mis käivad ringluses
var hetkePilt = 0; //alustab tsüklit indekstilt 0
var intervalliPikkus = 5000; // vahetab pilte iga 5 sekundi tagant

function vahetaTaust() { // funktsioon pilteide vahetamiseks
    document.getElementById('all').style.backgroundImage = 'url('+taustapildid[hetkePilt]+')'; 
    hetkePilt = (hetkePilt + 1) % taustapildid.length; //muudab indeksit ja võtab uue taustapilti listist
}

setInterval(vahetaTaust, intervalliPikkus); //funktsiooni väljakutsumine
