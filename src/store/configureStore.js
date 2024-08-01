import {withExtraArgument} from 'redux-thunk'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = applyMiddleware(withExtraArgument());
  const createStoreWithMiddleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
