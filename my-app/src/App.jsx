import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="container py-5">
      <h3>Testing Example</h3>
      <hr />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='users' element={<UserList />} />
      </Routes>
      <hr />
      &copy; { new Date().getFullYear() }
    </div>
  );
}

export default App;
