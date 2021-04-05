const initialState = {
    B:2,
}

const reducerB = (state = initialState, action) => {
    // const newState = {...state};
    // newState.B = newState.B + action.value;
    if(action.type === "UPDATE_B"){
        var A = 0
        if(!isNaN(action.value)){
            A = action.value;
        }
        return {
            ...state,
            B: state.B + A
        };
    }else{
        return {
            ...state
        }
    }
}

export default reducerB;