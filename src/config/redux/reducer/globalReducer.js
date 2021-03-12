const initialState = {
    dataBlogs: [],
    name: 'Prawito'
}

const globalReducer = (state = initialState , action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Hudoro'
        }
    }
    return state;
}

export default globalReducer