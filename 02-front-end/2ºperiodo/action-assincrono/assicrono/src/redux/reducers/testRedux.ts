import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions/action";


const initialStart = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  payload: string,
  type: string,
}

function dogReducer(state = initialStart, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED: 
      return {
        ...state, 
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };
    
      case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        imageURL: '',
      };

    default:
      return state;
  }
}

export default dogReducer;
