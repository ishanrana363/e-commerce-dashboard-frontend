import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Use element instead of component
        children: [
           
        ]
    }
]);
