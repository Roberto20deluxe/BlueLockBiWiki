import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import PlayerCreationPage from './pages/PlayerCreationPage'
import NotFoundPage from './pages/NotFoundPage'
import ViewPlayerPage from './pages/ViewPlayerPage'
import LoginPage from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'

const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage/>},
  { path: "/", element: <HomePage/> },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element: <SignUpPage/> },
  { path: "/view/:id", element: <ViewPlayerPage/> },
  { path: "/create", element: <PlayerCreationPage/> }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found")
}