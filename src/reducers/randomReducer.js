export default function( state = null, action ) {
    switch ( action.type ) {
        case 'create_color':
            return action.payload;
        default:
            return state;
    }
}