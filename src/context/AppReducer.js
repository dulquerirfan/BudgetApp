const AppReducer= (state,action) => {
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
export default AppReducer;