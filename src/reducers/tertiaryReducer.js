export default function( state = null, action ) {
    switch ( action.type ) {
        case 'set_tertiary':
            return action.payload;
        default:
            return state;
    }
}