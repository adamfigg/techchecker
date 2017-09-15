import { createStore } from 'redux';
import nameToCheck from './ducks/techChecker';
export default createStore(nameToCheck);