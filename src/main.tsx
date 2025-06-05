import { createRoot } from 'react-dom/client'
import AppProvider from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProvider />
)
