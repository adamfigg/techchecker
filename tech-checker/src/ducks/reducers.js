import { CHECK_NAME } from "./actions"


export default function checkName(state = { nameToCheck: "" }, action) {
    switch (action.type) {
        case CHECK_NAME:
            return Object.assign(state, { nameToCheck: action.payload });
        default:
            return state;
    }
}