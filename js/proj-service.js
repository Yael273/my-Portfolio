'use strict'

var gProjs = [
    _createProj('guess-me', 'Guess me', 'Can i guess the right person?', 'https://yael273.github.io/Guess-Me/', ["Guess", "Genie", "Game"]),
    _createProj('touch-nums', 'Touch Nums', 'Press the numbers', 'https://yael273.github.io/Num-Game/', ["Matrixes", "Game", "Numbers"]),
    _createProj('minesweeper', 'Minesweeper', 'sweep all the mines', 'https://yael273.github.io/mine-sweeper-3/', ["Matrixes", "Mines", "Game"]),
    _createProj('book-shop', 'Book Shop', 'Pick a book', 'https://yael273.github.io/bookShop/', ["Buy", "Books"]),
    _createProj('pacman', 'Pacman', 'eat all the food', 'https://yael273.github.io/Pacman/', ["Matrixes", "keyboard events", "Game"]),
    _createProj('in-picture', 'In picture', 'Choose the correct Answer', 'https://yael273.github.io/in-picture/', ["Pictures", "Trivia"]),
    _createProj('ball-board-game', 'Ball Board Game', 'Collect Those Balls', 'https://yael273.github.io/ball-board-game/', ["Matrixes", "keyboard events", "Game"]),
]


function _createProj(id, name, title, url, labels) {
    return {
        id,
        name,
        title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url,
        publishedAt: getDate(),
        labels,
    }
}


function getProjs() {
    return gProjs
}

function submitForm(){
    var $elEmail = $('.email').val()
    var $elSubject = $('.subject').val()
    var $elComment = $('.comment').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yaelital27@gmail.com&su=${$elSubject}&body=${$elComment}`)
}

function getDate(){
    const date = new Date("2022-05-11T23:50:21.817Z");
    return date.toLocaleDateString()
}