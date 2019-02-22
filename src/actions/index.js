export const test = () => dispatch => {
    console.log( 'test' );
    dispatch({ type: 'test', payload: 'test' });
}