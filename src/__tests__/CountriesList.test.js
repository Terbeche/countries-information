import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CountriesList from '../components/countriesComponents/CountriesList';

it('CountriesDisplay component snapshot testing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CountriesList />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
