const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keyGrid');



//  listen for all key presses and 
// (2) determine the type of key that is pressed.

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
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

    }
});


