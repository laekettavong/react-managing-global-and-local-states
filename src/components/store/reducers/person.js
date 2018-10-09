import * as Actions from '../actions'

const initialState = {
    persons: []
}

const reducer = ((state = initialState, { type, person }) => {
    switch (type) {
        case Actions.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: person.name,
                age: person.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case Actions.DELETE:
            return {
                ...state,
                persons: state.persons.filter(per => per.id !== person.id)
            }

        default:
    }

    return state;
})

export default reducer;