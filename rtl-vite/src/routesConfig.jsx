import Home from './pages/Home'
import UserList from "./pages/UserList";

const routesConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/users',
    element: <UserList />
  }
]

export default routesConfig