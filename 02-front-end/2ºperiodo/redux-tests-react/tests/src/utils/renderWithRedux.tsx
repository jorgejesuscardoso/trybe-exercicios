import { legacy_createStore as createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState } from '../App';
import counterReducer from '../redux/reducer/counterReducer';

function renderWithRedux(
  component:JSX.Element,
  state: RootState | undefined = undefined,
  store = createStore(combineReducers({ counterReducer}), state)
) {
  return {
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
  }
}