import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/MainLayout';
import CategoryCreatePage from '../pages/category-page/CategoryCreatePage';
import BrandCreatePage from '../pages/brand-page/BrandCreatePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Use element instead of component
        children: [
            {
                path : "dashboard/category-create",
                element : <CategoryCreatePage></CategoryCreatePage>
            },
            {
                path: 'dashboard/brand-create',
                element: <BrandCreatePage></BrandCreatePage>
            }
        ]
    }
]);
