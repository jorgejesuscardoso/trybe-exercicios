import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  count: 0
}

type ActiobType = {
  type: string;
}

const reducer = (state = INITIAL_STATE, action: ActiobType) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1}
  }

  return state;
}

const store = createStore( reducer ,composeWithDevTools());

const action = { type: 'INCREMENT_COUNTER' };

const buttonEl = document.querySelector('button') as HTMLButtonElement;
buttonEl.addEventListener('click', () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();
  const countEl = document.querySelector('h2') as HTMLHeadingElement;  
  countEl.innerHTML = globalState.count.toString();
});