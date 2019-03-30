export default function( state = [], action ) {
    switch ( action.type ) {
        case 'history':
            if ( !state.includes( action.payload ) ) {
                return [action.payload, ...state];
            } else {
                return state;
            }
        default:
            return state;
    }
}