import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import Header from './components/Header';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

export default function Site() {
	
	const [isAuth, setIsAuth] = React.useState(false);
	
	React.useEffect(() => {
				setIsAuth(false);
	}, []);


	if (isAuth) {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header />}>
						<Route index element={<App />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Login />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Site />);