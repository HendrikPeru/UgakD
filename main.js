// JAVA SCRIPTI ABIL KUVAB TEINE LEHT JUHUSLIKU TSITAADI 'THE OFFICE' SARJAST 
// - JAVA SCRIPT LOODUD COPILOT EXTENSIONI ABIGA EHK KASUTADES CHATGPT 3.5 MOOTORIT

// 'THE OFFICE' TSITAATIDE LIST
const quotes = [
    "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. – Michael Scott (Hooaeg 5, The Duel)",
    "I am Beyoncé, always. – Michael Scott (Hooaeg 3, Beach Games)",    
    "I talk a lot, so I’ve learned to tune myself out. – Kelly Kapoor (Hooaeg 5, Moroccan Christmas)",
    "I am running away from my responsibilities. And it feels good. – Michael Scott (Hooaeg 4, Fun Run)",
    "I’m not superstitious, but I am a little stitious. – Michael Scott (Hooaeg 4, Fun Run)",
    "I knew exactly what to do. But in a much more real sense, I had no idea what to do. – Michael Scott (Hooaeg 5, Stress Relief)",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. – Michael Scott (Hooaeg 2, The Fight)",
    "I don’t hate it. I just don’t like it at all and it’s terrible. – Michael Scott (Hooaeg 4, Launch Party)",
    "’R' is among the most menacing of sounds. That's why they call it 'murder' and not 'mukduk.'  — Dwight Schrute (Hooaeg 6, Mafia)",
];

// FUNKTSIOON LEIAB QUOTES LISTIST SUVALISE TSITAADI INDEKSI
function getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
}

// FUNKTSIOON LEIAB EELMISE FUNKTSIOONI ABIL LISTIST SUVALISE TSITAADI KINDLA INDEKSIGA
function getRandomQuote() {
    const randomIndex = getRandomIndex();
    return quotes[randomIndex];
}

// FUNKTIOON VÕIMALDAB VEEBILEHEL KINDLAT TSITAATI KUVADA 
function displayRandomQuote() {
    const quoteContainer = document.getElementById("quote");
    quoteContainer.textContent = getRandomQuote();
}

// LOOB ESIALGSE SUVALISE TSITAADI, MIDA KASUTAJA NÄEB
displayRandomQuote();

// FUNKTSIOON VÕIMALDAB NUPUVAJUTUSEGA UUS TSITAAT VEEBILEHELE KUVADA
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayRandomQuote);
