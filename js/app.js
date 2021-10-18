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
        const previousKeyType = calculator.dataset.previousKeyType;
        // log button type statement
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
        if (!action) {
            console.log('number key!');
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
                console.log(displayedNum);
                console.log('appended number');
                console.log(keyContent);
            }
        } 

        // operator keys
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!');
            // key.classList.toggle('.active');
            key.classList.add('is-depressed');
            // when user hits a number key after an operator key
            // method tell if the previous key is an operator key via a custom attribute: data-previous-key-type 
            calculator.dataset.previousKeyType = 'operator';
            // to save first number and the operator is to add it to a custom attribute when the operator button gets clicked.
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            display.textContent = keyContent;
        }
        // decimal key
        if (action === 'decimal') {
            display.textContent = displayedNum + ',';
        }
        // clear(reset) key

        if (action === 'clear') {
            console.log('clear key!');
            display.textContent = displayedNum - displayedNum;
            calculator.dataset.previousKeyType = 'clear';
        }
        // equal button logic
        if (action === 'calculate') {
            console.log('equal key!');
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            console.log(firstValue);
            console.log(operator);
            console.log(secondValue);
            // calculate ();
            // parseFloat() required to convert strings into a float number (decimal numbers)
            let calculate = (n1, operator, n2) => {
                let result = '';

                if(operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2);
                } else if (operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2);
                } else if (operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2);
                } else if (operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2);
                }

                return result;
            };
            // end of calculate ();

            display.textContent = calculate(firstValue, operator, secondValue);
        }
        if (action === 'delete') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            console.log('delete key');
            display.textContent = '0';
        }
        
    }
});

