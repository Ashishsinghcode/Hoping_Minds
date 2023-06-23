
export const multiplierReducer =(state = 1,action)=>{
    switch(action.type){
        case 'multiTwelve' : return state*action.payload;
        case 'multiZero' : return state*action.payload;
        case 'divTwo' : return state/action.payload;
        case 'divFour' : return state/action.payload;
        default :return state;
    }
}