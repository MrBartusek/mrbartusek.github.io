import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
