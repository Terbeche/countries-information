import '../css/App.css';
import { Routes, Route } from 'react-router';

import Layout from './Layout/Layout';
import Countries from './Countries';
import Country from './countriesComponents/Country';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Countries />} />
      <Route path="/countries" element={<Countries />} />
      <Route exact path="/countries/:name" element={<Country />} />

    </Route>
  </Routes>
);

export default App;
