import React from 'react';
import ReactDOM from 'react-dom/client';
import UserContextProvider from './context/UserContext';
import './styles/index.css';
import App from './pages/App';

function Site() {
	return (
		<UserContextProvider>
			<App />
		</UserContextProvider>
	);
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(
	rootElement ? rootElement : document.createElement('div')
);
root.render(<Site />);
