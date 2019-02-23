export default function( state = [], action ) {
    switch ( action.type ) {
        case 'history':
            return [action.payload, ...state];
        default:
            return state;
    }
}