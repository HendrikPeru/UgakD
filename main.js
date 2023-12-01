// OFFICE QUOTIDD
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

// INDEX
function getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
}

// Function to retrieve a random quote
function getRandomQuote() {
    const randomIndex = getRandomIndex();
    return quotes[randomIndex];
}

// Function to display the random quote on the website
function displayRandomQuote() {
    const quoteContainer = document.getElementById("quote");
    quoteContainer.textContent = getRandomQuote();
}

// Generate the initial random quote
displayRandomQuote();

// Add event listener to the button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayRandomQuote);
