import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import{ SidebarProvider} from "./Components/SideBar/SidebarProvider";
import { AuthContextProvider } from "./Components/UserContext/AuthContext";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AuthContextProvider>
        <SidebarProvider>
    <App />
    </SidebarProvider>
    </AuthContextProvider>
  </StrictMode>,
)
