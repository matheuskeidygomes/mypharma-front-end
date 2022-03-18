const initialState = {
    name: '',
    email: '',
    token: ''
}

function UserReducer(state = initialState, action) {

    switch(action.type) {

        case 'ADD_NAME':

            return { ...state, name: action.payload };

        case 'ADD_EMAIL':

            return { ...state, email: action.payload };

        case 'ADD_TOKEN':

            return { ...state, token: action.payload };

        default:
            
            return state;

    }
}

export default UserReducer;