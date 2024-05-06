


const initialState = {
    user: null,
    error: null,
    isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
