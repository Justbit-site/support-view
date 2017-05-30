const initialState = {
  email: '',
  company: '',
  result: [],
  id: ''
}

const reducer = (state = initialState, action ) => {
  switch(action.type){
    case 'SAVE_START': {
      return Object.assign({}, state, { company: action.saveCompany, email: action.saveEmail });
    }
    case 'SAVE_UPDATE': {
      return Object.assign({}, state, { company: action.saveCompany, email: action.saveEmail });
    }
    case 'SAVE_SUCCESS': {
      return Object.assign({}, state, { result: action.result, id: action.saveId });
    }
    default: {
      return state;
    }
  }
}

export default reducer;
