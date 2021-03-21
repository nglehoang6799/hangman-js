class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            }
            else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    getGuessedLetter(guessedLetter) {
        guessedLetter = guessedLetter.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guessedLetter)
        const isBadGuess = !this.word.includes(guessedLetter)
        if (isUnique) {
            this.guessedLetters.push(guessedLetter)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.caculateStatus()
    }
    caculateStatus() {
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
        })
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        }
        else if (finished) {
            this.status = 'finshied'
        }
        else {
            this.status = 'playing'
        }
    }
    get message() {
        let message
        if (this.status === 'playing') {
            message = `Guesses left: ${this.remainingGuesses}`
        }
        else if (this.status === 'failed') {
            message = `Nice try! The word was '${this.word.join('')}'`
        }
        else {
           message = 'Great work! You guessed the word'
        }
        return message
    }
}




