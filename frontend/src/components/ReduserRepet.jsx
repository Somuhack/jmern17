function Myreduser(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            return state=state+1
        default :
        return state
    }
}
export default Myreduser