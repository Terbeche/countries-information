import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Nav from '../components/Layout/Nav';

it('Nav component snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
