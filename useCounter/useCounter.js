import { useState } from "react";
import PropTypes from 'prop-types'

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (event, value = 1) => {
        setCounter(current => current + value);
    }

    // Si se omite el event, se debe llamar como () => decrement() en el evento
    const decrement = (event, value = 1) => { // para ello se debe mandar a llamar hacien referencia directamente a la función
        if (counter <= value) return;

        setCounter(current => current - value);
    }

    const reset = (event) => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}


useCounter.propTypes = {
    initialValue: PropTypes.number.isRequired
}
