import '../css/App.css';
import { Routes, Route } from 'react-router';

import Layout from './Layout/Layout';
import Countries from './Countries';
import MyProfile from './Myprofile';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Countries />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Route>
  </Routes>
);

export default App;
