import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/StateContext";
import App from './components/App';
import './styles.css'
import AppRouter from "./components/AppRouter";

 
const root = document.getElementById("appRouter");

createRoot(root).render(
    <BrowserRouter>
        <StateProvider>
            <AppRouter/>
        </StateProvider>
    </BrowserRouter>
)

