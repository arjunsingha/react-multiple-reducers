const initialState = {
    A:1,
}

const reducerA = (state = initialState, action) => {
    console.log("reducerA",state);
    if(action.type === "UPDATE_A"){
        var B = 0
        if(!isNaN(action.value)){
            B = action.value;
        }
        return {
            ...state,
            A: state.A + B
        };
    }else{
        return {
            ...state
        }
    }
}

export default reducerA;