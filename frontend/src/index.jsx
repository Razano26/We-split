import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import Space from './pages/Space';
import Setting from "./pages/Setting";
import Header from './components/Header';
import Login from './pages/Login';
import About from "./pages/About";
import NotFoundPage from './pages/NotFoundPage';

function Site() {
	
	const [isAuth, setIsAuth] = React.useState(false);
	
	React.useEffect(() => {
				setIsAuth(true);
	}, []);


	if (isAuth) {
		return (
			<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header />}>
						<Route path='/' element={<App />}/>
						<Route path='space' element={<Space />} />
						<Route path='setting' element={<Setting />} />
						<Route path='/about' element={<About />}/>
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
</>
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
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Site />);