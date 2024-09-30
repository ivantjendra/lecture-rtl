import 'bootstrap/dist/css/bootstrap.css'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import routesConfig from './routesConfig'

const router = createBrowserRouter(routesConfig)

function App() {
  return (
    <div className="container py-5">
      <h3>Testing example</h3>
      <hr />
      <RouterProvider router={router} />
      <hr />
      &copy; { new Date().getFullYear() }
    </div>
  )
}

export default App
