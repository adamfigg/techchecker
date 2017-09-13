const NAME_TO_CHECK = 'NAME_TO_CHECK';


const initialState = {
    checkThisName: []
};

export function nameToCheck(name) {
    return {
        type: NAME_TO_CEHCK,
        payload: name
    }
}