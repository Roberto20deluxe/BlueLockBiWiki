import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import PlayerCreationPage from './pages/PlayerCreationPage'
import NotFoundPage from './pages/NotFoundPage'
import ViewPlayerPage from './pages/ViewPlayerPage'
import SignUpPage from './pages/SignUpPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage/>},
  { path: "/", element: <HomePage/> },
  { path: "/sign-up", element: <SignUpPage/> },
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