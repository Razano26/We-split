import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider, { useUserContext } from '../context/UserContext';
import '../styles/index.css';
import Spaces from './Spaces';
import Setting from './Setting';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Login from './Login';
import About from './About';
import NotFoundPage from './NotFoundPage';

function App() {
	const { user } = useUserContext();

	if (user) {
		return (
			<div className='grid place-items-center h-screen'>
				<div className='container'>
					<div className='flex flex-col min-h-screen max-h-screen py-0 md:px-32 md:py-24'>
						<Header />
						<BrowserRouter>
							<Routes>
								<Route path='/' element={<Spaces />} />
								<Route path='/setting' element={<Setting />}/>
								<Route path='/about' element={<About />} />
								<Route path='*' element={<NotFoundPage />} />
							</Routes>
						</BrowserRouter>
						<Footer/>
					</div>
				</div>
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
