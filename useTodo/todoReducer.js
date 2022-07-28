// export const todoReducer = (initialState, action) => {
//     switch (action.type) {
//         case 'ABC':
//             throw new Error('Action.type = ABC no está implementada');
//             break;

//         default:
//             return initialState;
//     }
// }


export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(t => t.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (action.payload === todo.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}
