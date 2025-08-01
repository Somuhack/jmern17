function Todos(state,action) {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {text: action.payload, completed: false}];
    case "reset":
      return [];
    default :
    return state;
  }
}
export default Todos