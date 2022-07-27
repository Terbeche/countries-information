import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CountriesDisplay from '../components/countriesComponents/CountriesDisplay';

it('CountriesDisplay component snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CountriesDisplay />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
