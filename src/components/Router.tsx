import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'about',
		element: <AboutPage />,
	},
	{
		path: 'contact',
		element: <ContactPage />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
