// Add event listener to the "Inject Code" button
document.getElementById('inject-btn').addEventListener('click', function() {
    // Get the code from the code box
    var code = document.querySelector('.code-box').innerText;

    // Execute the code in a try-catch block to handle potential errors
    try {
        eval(code); // Execute the code in the terminal
    } catch (error) {
        console.error('Error executing code:', error); // Log any errors to the console
    }
});

// Add event listener to the "Submit" button for website code injection
document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the code from the website code textarea
    var websiteCode = document.getElementById('website-code').value;

    // Inject the website code into the webpage
    document.body.innerHTML = websiteCode; // WARNING: This method can be dangerous and should be used with caution
});

