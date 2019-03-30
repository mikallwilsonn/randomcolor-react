export default function( state = null, action ) {
    switch ( action.type ) {
        case 'set_secondary':
            return action.payload;
        default:
            return state;
    }
}