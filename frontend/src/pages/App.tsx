import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider, { useUserContext } from '../context/UserContext';
import '../styles/index.css';
import Space from './Space';
import Setting from './Setting';
import Header from './../components/Header';
import Login from './Login';
import About from './About';
import NotFoundPage from './NotFoundPage';


function App() {
	const { user } = useUserContext();

	if (user) {
		return (
			<div className={`dybo`}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Header />}>
							<Route path='/' element={<Space />} />
							<Route path='space' element={<Space />} />
							<Route path='setting' element={<Setting />} />
							<Route path='/about' element={<About />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</div>
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

export default App;
