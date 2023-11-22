import Home from './pages/home/Home';
import Error from './pages/Error404/error404';
import About from './pages/about/About';
import FicheLogement from './pages/FicheLogement/ficheLogement';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/ficheLogement/:id",
		element: <FicheLogement />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
