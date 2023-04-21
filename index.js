let quote= document.querySelector(".quote")
let person= document.getElementById("person")
let BtnNewQuote= document.getElementById("newQuote")

const quotes =[
    {
        quote: "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
        person: "Paulo Coelho"
    },

    {
        quote: "Loved you yesterday, love you still, always have, always will.",
        person: "Elaine Davis"
    },
    {
        quote: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
        person: "gee"
    },
    {
        quote: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
        person: "John green"
    },
    {
        quote: "A man is already halfway in love with any woman who listens to him",
        person: "Brendan Francis"
    },
    {
        quote: "I love you as certain dark things are to be loved, in secret, between the shadow and the soul",
        person: "Pablo Neruda"
    },
];

//document.addEventListener("event", function)

 let randomQuotes = ()=> {
    let randomQuote = Math.floor(Math.random() * quotes.length) 
    quote.innerText = quotes[randomQuote].quote
    person.innerText = quotes[randomQuote].person
}

BtnNewQuote.addEventListener('click', randomQuotes)
