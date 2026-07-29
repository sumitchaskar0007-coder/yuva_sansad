import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authAPI } from '../api';

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            
            if (!token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                await authAPI.verifyToken();
                setIsAuthenticated(true);
            } catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoutes;