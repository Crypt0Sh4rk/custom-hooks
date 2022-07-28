import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        // setFormState({
        //     ...formState,
        //     [name]: value
        // });

        // Para las pruebas se recomienda establecer el estado utilizando el valor actual
        setFormState(current => {
            return ({
                ...current,
                [name]: value
            });
        });
    }

    const onResetForm = (event) => {
        // event.preventDefault();

        setFormState(initialForm);
    }

    return {
        ...formState, // devolver todas las propiedades del form
        formState,
        onInputChange,
        onResetForm
    }
}
