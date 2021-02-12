import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../reducers'
import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Container from 'react-bootstrap/Container';
import Posts from './Posts';
import Modal from './Modal';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const App = () => {

  return (
    <Provider store={store}>

      <Container className="justify-content-md-center postContainer mt-3">
        <h2 className='text-center' > Bienvenido al Administrador de Posts </h2>
        <hr />
        <Modal />
        <Posts />


  
      </Container>
    </Provider>
  );
}

export default App;
