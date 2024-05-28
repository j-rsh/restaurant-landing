const decrementButton = document.getElementById('decrement');
        const incrementButton = document.getElementById('increment');
        const numericInput = document.getElementById('numeric');

        decrementButton.addEventListener('click', () => {
            let currentValue = parseInt(numericInput.value);
            let minValue = parseInt(numericInput.min);
            if (currentValue > minValue) {
                numericInput.value = currentValue - 1;
            }
        });

        incrementButton.addEventListener('click', () => {
            let currentValue = parseInt(numericInput.value);
                numericInput.value = currentValue + 1;
        });