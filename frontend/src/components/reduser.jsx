function reduser(state,action){
    switch(action.type){
        case 'increment':
            return state=state+1
        case 'decrement':
            return state=state-1
        case 'addby10':
            return state=state+10
        default:
            return state

    }
}
export default reduser