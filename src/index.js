// define callback function to be called when DOM loads
const init = () => {
    // grab form & store
    const inputForm = document.querySelector('form')
    
    // add listener to form for submit event
    inputForm.addEventListener('submit', (event) => {
        // prevent page refresh
        event.preventDefault()

        // grab user input & store
            //either from event or from DOM
        // event.target.children[1].value;
        const input = document.querySelector('#searchByID')

        // fetch data based on user input
            // since we are searching by ID, 
            // can load only part of data we need
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((resp) => resp.json())
        .then((data) => {
            // {debugger}) 
            // data returns an array of objects
            // but movies/ID returns one object

        //display data
        // access & store title & summary
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')

        // change inner text to data
            // grab key in data using dot notation
        title.innerText = data.title
        summary.innerText = data.summary
        // debugger
        })
    })
}

// when DOM loads, call init
document.addEventListener('DOMContentLoaded', init);

