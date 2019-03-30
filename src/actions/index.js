export const randomColor = () => dispatch => {
    const color = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    dispatch({ type: 'create_color', payload: color });
}

export const colorHistory = ( value ) => dispatch => {
    dispatch({ type: 'history', payload: value });
}

export const setPrimary = ( value ) => dispatch => {
    dispatch({ type: 'set_primary', payload: value });
}

export const setSecondary = ( value ) => dispatch => {
    dispatch({ type: 'set_secondary', payload: value });
}

export const setTertiary = ( value ) => dispatch => {
    dispatch({ type: 'set_tertiary', payload: value });
}