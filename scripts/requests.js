const getPuzzle = async (wordCount) => {
    // Making an HTTP request
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getPuzzleOld = (wordCount) => {
    // Making an HTTP request
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

// Make a new request for all countries
const getInfoCountry = async (alpha2Code) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => {
            return country.alpha2Code === alpha2Code
        })
    } else {
        throw new Error('And error has taken place')
    }   
}

const getInfoCountryOld = (alpha2Code) => new Promise((resolve, reject) => {   
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const myCountry = data.find((country) => {
                return country.alpha2Code === alpha2Code
            })
            resolve(myCountry)
        } else if (e.target.readyState === 4) {
            reject('And error has taken place')
        }
    })

    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()
})

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/?token=6050a5d733981e')
    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Error has taken place')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getInfoCountry(location.country)
}