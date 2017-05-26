// FIXME: missing {} caused the named export to be undefined :(
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], {type, payload} ){
    switch(type){
    case FETCH_WEATHER:
        console.log('payload in reducer ', payload.data);
        return [ payload.data, ...state ];
    default:
        console.log('unknwon action type', type);
    }
    return state;
}
