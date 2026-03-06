/* Challenge 2: Create the function that will calculate the balance in an account using compound
interest after t number of years.


Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/


function calculateCompoundInterest() {
    // Get the user input values
    let principal = parseFloat(document.getElementById("principalInput").value);
    let rate = parseFloat(document.getElementById("rateInput").value);
    let timesCompounded = parseInt(document.getElementById("timesInput").value);
    let years = parseInt(document.getElementById("yearsInput").value);
    let op=document.getElementById("output");


    // Initialize a variable to hold the output
    let output = '';


    // Loop through each year and calculate the balance
    for (let t = 0; t <= years; t++) {
        let balance = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * t);
        output += `Year ${t}: $ ${balance.toFixed(2)}<br>`;
    }
    op.innerHTML=output;


    // Display the output in the result div
}
