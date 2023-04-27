import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './login';

function AppRouter() {
    return (
        <div className="appRouter">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </div>
    )
}

export default AppRouter;