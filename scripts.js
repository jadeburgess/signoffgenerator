// Define the phrases
const phrases = [
    "Peace out!",
    "Your friendly neighbourhood IT Tech,",
    "Gotta blast!",
    "Live Long and Prosper,",
    "May the Force Be With You,",
    "Stay cool,",
    "Tag, You’re It,",
    "To Infinity and Beyond,",
    "Fare Thee Well,",
    "Hasta La Vista!,",
    "GIF or JIF?",
    "Stay Tuned,",
    "That’s All, Folks,",
    "No trees were destroyed in the sending of this message,",
    "May the odds be ever in your favor,",
    "All social problems have a technical solution,",
    "Don’t stop believin’,",
    "Hakuna Matata,",
    "Yabba Dabba Do,",
    "You’re a wizard, Harry,",
    "One step closer to Friday,",
    "Anonymously,", 
    "Rock 'n' roll!",
    "See ya later, alligator,",
    "Keep on keepin' on,",
    "Life is like this email - unexpected,",
    "Work smarter, not harder,",
    "Stay slaying,",
    "Hasta La Pasta,",
    "xoxo, Gossip Girl,",
    "Over and out,",
    "Warm regards, from my desk to yours,",
    "Ending this email on a high note... or at least trying to,",
    "Leaving you with a smile, or at least an eye-roll,",
    "Yours in never-ending jest,",
    "Reach for the stars, starting with your inbox,",
    "Yours in cinematic flair,",
    "Unpredictably Yours,",
    "Brought to you by electricity,",
];

// Function to generate a random phrase
function generatePhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Function to display a phrase on the page
function displayPhrase() {
    const phrase = generatePhrase();
    document.getElementById('phrase').textContent = phrase;
}

// Attach the displayPhrase function to the button click event
document.getElementById('button').addEventListener('click', displayPhrase);
