const Reducer1 = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [];
        case 'TOGGLE_TODO':
            return state;
    }
}
export default Reducer1