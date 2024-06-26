import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from './Const/routes';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';

import Details from './Pages/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.details,
        element: <Details />,
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
