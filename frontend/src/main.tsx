import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <CharacterPage/>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found")
}