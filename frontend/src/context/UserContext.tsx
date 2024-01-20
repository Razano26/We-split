import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
	id: number;
	username: string;
}

interface UserContextInterface {
	user: User | null;
	token: string;
	setToken: (string: string) => void;
	logout: () => void;
	register: (values: any, actions: any) => void;
}

export const UserContext = createContext<UserContextInterface>({
	user: null,
	token: '',
	setToken: (token: string) => {},
	logout: () => {},
	register: (values: any, actions: any) => {},
});

export const useUserContext = () => React.useContext(UserContext);

export function useCreateLoginContext(): UserContextInterface {

	const [user, setUser] = useState<User | null>(null);
	const [token, setStateToken] = useState<string>('');

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setUser(null);
		} else {
			setUser(jwtDecode<User>(localStorage.getItem('token') || ''));
		}
	}, [token]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setStateToken(token);
			setUser(jwtDecode<User>(token));
		}
	}, []);

	const setToken = (token: string) => {
		setStateToken(token);
		localStorage.setItem('token', token);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setStateToken('');
		setUser(null);
	};

	const register = (values: any, actions: any) => {};

	return { user, token, setToken, logout , register};
}

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const context = useCreateLoginContext();

	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
