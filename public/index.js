async function main(){
    const countContainer = document.querySelector('#count-container');  //h1 id 'count-container' so that increment and decrement functions can insert text for the count value
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    // Edit main in index.js so that countValue is defined using the value from the server instead of being hard-coded to always start at 0.

    // In main, before defining countValue, invoke fetch.
    // Pass fetch the URL from above to send an HTTP request to the local server.
    // We know that fetch returns a promise. Use async/await to save the response that fetch returns to a variable.
    // We know that the server responds with JSON data. Use await response.json() to convert the JSON response into a JavaScript object and save the result to a variable.
    // Use console.log to inspect the object you've retrieved. Make sure you understand its structure before trying to use it in your code.
    // Use the value within the JavaScript object you've retrieved to define countValue.
    // When you're finished, the counter should start at 10, the value provided by the server, instead of 0.

    const response = await fetch('http://localhost:9001/counter')

    const resultObj = await response.json()
    // console.log(responseObj)

    // This was the original code to make the counter = 0 as seen in the last line of the async function, just before main().
    // let countValue = 0   
    // property in the URL calls is called 'value: 10', so calling it down below as resultObj.value to make countValue = 10.
    // If it was a property of say, 'time: 10', then it would be called resultObj.time
    let countValue = resultObj.value;

    // End of class code.

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()