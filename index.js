const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke()

// using async await..
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    // Since fetch is asynchronous, so we've to wait until it's done fetching.
    // and also, Since fetch method returns a promise.
    const response = await fetch('https://icanhazdadjoke.com', config)
    // Since response.... also returns a promise. Therefore we've to include await keyword.
    const data = await response.json()

    jokeElement.innerHTML = data.joke

}

// .then() Method for getting the data..

// function generateJoke() {
//     // if we just make request like this we'll get html back
//     // fetch('https://icanhazdadjoke.com')

//     // We've to include headers(key: value) to get the data in json format
//     // fetch('https://icanhazdadjoke.com', {
//     //     headers: {
//     //         'Accept': 'application/json'
//     //     }
//     // })

//     // cleaner way
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json()) // --> to get the json data
//         // .then(data => console.log(data))
//         .then((data) => {
//             jokeElement.innerHTML = data.joke
//         })
// }











