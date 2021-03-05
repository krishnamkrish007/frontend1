
const initalState= {

    model_list: [],
    current_model: [],
    
}

export default function foo(state= initalState, action){

    switch(action.type){

        case "GET_MODELS":
            console.log(action.payload);
            return {
                ...state,
                model_list: action.payload,
            
            };
            case "GET_MODEL":
            console.log(action.payload);
            return {
                ...state,
                current_model: action.payload,
            
            };
        default:
            return state;
    }
}