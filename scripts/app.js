// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#get-puzzle')
const guessesEl = document.querySelector('#get-remaining')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.getGuessedLetter(guess)
    render(game1)
})

const render = (game1) => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.message

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 2)
    render(game1)
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//======================================================
// const puzzle = getPuzzle()
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })
//======================================================
// getInfoCountry('VN').then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getInfoCountryOld('VN').then((country) => {
//     console.log(country.name)
// }, (error) => {
//     console.log(`Error: ${error}`)
// })
//========================================================
// getLocation().then((location) => {
//     console.log(location.city)
//     console.log(location.region)
//     console.log(location.country)
//     return getInfoCountry(location.country)
// }).then((country) => {
//     console.log(country.name)   
// }).catch((error) => {
//     console.log(error)
// })
//========================================================
// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })