// ACTIONS

export const CHECK_NAME = 'CHECK_NAME'; 

// ACTION CREATOR
export function checkName(name) {
    return {
        type: CHECK_NAME,
        payload: name
    }
}

