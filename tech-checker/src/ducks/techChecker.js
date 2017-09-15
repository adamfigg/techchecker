const NAME_TO_CHECK = 'NAME_TO_CHECK';


const initialState = {
    checkThisName: []
};

export function nameToCheck(name) {
    return {
        type: NAME_TO_CHECK,
        payload: name
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME_TO_CHECK:
        return Object.assign({}, state, { checkThisName: [...state.checkThisName, action.payload]});
        default:
        return state;
    }
}