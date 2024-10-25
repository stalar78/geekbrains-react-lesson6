const initialState = {
    isChecked: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            return {
                ...state,
                isChecked: !state.isChecked,
            };
        default:
            return state;
    }
};

export default profileReducer;