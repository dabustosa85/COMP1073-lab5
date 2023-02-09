/* Declare and initialize global variables
-------------------------------------------------- */
const pageBg = document.querySelector('html');
const sliders = document.getElementsByTagName('input');
let rgb = [0, 0, 0];


/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i ++) {
    // Loop through the three range inputs and for each one, add an onchange event listener
    sliders[i].onchange = function() {
        // If an input range slider is moved, grab it’s id attribute value
        let whichSlider = this.getAttribute('id');
        console.log(whichSlider)
        // …also, grab the numerical value that it is set to
        let sliderValue = this.value;
        // Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
        newRgb = changeRgb(whichSlider, sliderValue);
        console.log(newRgb);
        // Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
        let newCSS = writeCSS(newRgb);
        // Directly change the background-color of the page using the new CSS rgb value
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions
-------------------------------------------------- */
// STEP 1: Write a function called changeRgb() that accepts two parameters, channel and value
function changeRgb(channel, value) {
    // STEP 2: Build a switch based on the value of the channel parameter (red, green, or blue
    switch (channel) {
        // STEP 3: Inside each case, update the appropriate global rgb array element (0, 1, or 2
        case 'red':
            rgb[0] = value;
            break;
        case 'green':
            rgb[1] = value;
            break;
        case 'blue':
            rgb[2] = value;
            break;
    }

    // STEP 4: Return the updated rgb array back to the event handler
    return rgb;
}

// STEP 5: Write a new function called writeCSS() that accepts one parameter, the updated rgb array
function writeCSS(newRgb) {
    // STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb('
    let newColor = 'rgb(';
    // STEP 7: Create a while loop that iterates through the array passed into this function, called newRgb (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
    i = 0;
    while (i < newRgb.length) {
        // STEP 8: For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma
        newColor += newRgb[i];
        newColor += ",";
        i++;
    }
    // STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    newColor = newColor.slice(0, -1);
    // STEP 10: Finish off the newColor string by adding the closing ')'
    newColor += ')';
    // STEP 11: Return the string newColor back to the event handler
    console.log(newColor)
    return newColor;
}