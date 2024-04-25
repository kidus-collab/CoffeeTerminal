import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Styles
import './index.css'
import './styles/tailwind.css'
import Root from './routes/Root';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);