"use strict";

var quotes = ["We don't make mistakes, just happy little accidents. - Bob Ross", "Talent is pursued interest.  Anything that you're willing to practice, you can do.  - Bob Ross", "There's nothing wrong with having a tree as a friend.  - Bob Ross", "I guess I'm a little weird.  I like to talk to trees and animals.  That's okay though; I have more fun than most people.  - Bob Ross", "Let's get crazy.  - Bob Ross", "There are no mistakes, just happy accidents.  - Bob Ross", "Believe that you can do it cause you can do it.  - Bob Ross"];

function newQuote() {
    var randomQuoteNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuoteNumber];
}