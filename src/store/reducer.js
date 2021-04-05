const initialState = {
    A: 1,
    B: 1
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case "UPDATE_A":
            newState.A = state.A + state.B;
        break;
        case "UPDATE_B":
            newState.B = state.A + state.B;
        break;
    }

    return newState;
}

export default reducer;