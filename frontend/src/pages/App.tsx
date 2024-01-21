import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import '../styles/index.css';
import Spaces from './Spaces';
import Settings from './Settings';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Login from './Login';
import Register from './Register';
import About from './About';
import NotFoundPage from './NotFoundPage';

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

function App() {
	const { user } = useUserContext();

	if (user) {
		return (
			<>
				<div className='grid place-items-center h-screen'>
					<div className='container'>
						<div className='flex flex-col min-h-screen max-h-screen'>
							<BrowserRouter>
								<Header />
								<Routes>
									<Route index element={<Spaces />} />
									<Route
										path='/settings'
										element={<Settings />}
									/>
									<Route path='/about' element={<About />} />
									<Route
										path='*'
										element={<NotFoundPage />}
									/>
								</Routes>
							</BrowserRouter>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	} else {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
