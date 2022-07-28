import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; // si JSON.parse en null, regresa un arreglo vacío
}


export const useTodo = (initialState = []) => {
    const [state, dispatch] = useReducer(todoReducer, initialState, init); // state son nuestros todos

    useEffect(() => {
        //   console.log(state)
        localStorage.setItem('todos', JSON.stringify(state) || []);

        return () => {
            // Cleanup
        }
    }, [state]);


    const onAddTodo = (newTodo) => {
        // console.log(newTodo);

        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = id => {
        // console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = id => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        ...state,
        state,
        todosCount: state.length,
        pendingTodosCount: state.filter(t => !t.done).length,
        onAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
