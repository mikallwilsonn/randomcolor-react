export default function( state = null, action ) {
    switch ( action.type ) {
        case 'create_color':
            return action.payload;
        case 'set_as_current':
            return action.payload;
        default:
            return state;
    }
}