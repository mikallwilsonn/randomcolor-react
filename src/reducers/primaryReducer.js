export default function( state = null, action ) {
    switch ( action.type ) {
        case 'set_primary':
            return action.payload;
        default:
            return state;
    }
}