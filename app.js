document.addEventListener('DOMContentLoaded', () => {

    // Card Options

    const cardArray = [
        {
            name: 'goku',
            img: 'images/goku.jpg'
        },
        {
            name: 'naruto',
            img: 'images/naruto.jpg'
        },
        {
            name: 'luffy',
            img: 'images/luffy.jpg'
        },
        {
            name: 'deku',
            img: 'images/deku.jpg'
        },
        {
            name: 'asta',
            img: 'images/asta.jpg'
        },
        {
            name: 'naofumi',
            img: 'images/naofumi.jpg'
        },
        {
            name: 'lelouch',
            img: 'images/lelouch.jpg'
        },
        {
            name: 'light',
            img: 'images/light.jpg'
        },
        {
            name: 'goku',
            img: 'images/goku.jpg'
        },
        {
            name: 'naruto',
            img: 'images/naruto.jpg'
        },
        {
            name: 'luffy',
            img: 'images/luffy.jpg'
        },
        {
            name: 'deku',
            img: 'images/deku.jpg'
        },
        {
            name: 'asta',
            img: 'images/asta.jpg'
        },
        {
            name: 'naofumi',
            img: 'images/naofumi.jpg'
        },
        {
            name: 'lelouch',
            img: 'images/lelouch.jpg'
        },
        {
            name: 'light',
            img: 'images/light.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];


    // Starting Countdown timer
    function countdownTimer() {
    setTimeout(function(){ alert("Your time is up !"); }, 3000);
    }

    // Creating  Board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    

    // Check for matches

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenID[0];
        const optionTwoId = cardsChosenID[1];

        if (optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert('You have clicked the same image !')
        }


        else if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match !')
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations ! You found them all !'

        }
    }



    // Flip your card

    function flipCard(){
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length === 2 ){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();

})

// Timer

