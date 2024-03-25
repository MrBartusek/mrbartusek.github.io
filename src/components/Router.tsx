import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';

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
