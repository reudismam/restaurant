import {createStore} from 'redux';
import {Reducer} from './reducer';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}