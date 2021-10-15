const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keyGrid');
const display = document.querySelector('.calculator-screen');




//  listen for all key presses and 
// (2) determine the type of key that is pressed.

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // function variables
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        // if statement
        if (!action) {
            console.log('number key!')
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
        }
        if (action === 'decimal') {
            console.log('decimal key!')
        }
        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
        if (action === 'delete') {
            console.log('delete key')
        }


        
        // if state
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
    }
});

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target;
//         const action = key.dataset.action;
        
//     }
// })

