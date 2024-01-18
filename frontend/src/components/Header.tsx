import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import React from "react";

const Header = () => {

	const { logout } = useUserContext();

	const [isAccountOppen, setAccountOppen] = React.useState(false);
	const [isSpaceMenuOppen, setSpaceMenuOppen] = React.useState(false);

	return (
		<header className='p-2 bg-indigo-200'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center justify-between'>
					<div className='flex flex-1 items-center justify-start'>
						<div className='flex flex-shrink-0 items-center'>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
								alt='Your Company'
							/>
						</div>
						<div className='relative group ml-6'>
							<button
								id='dropdown-button'
								className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
								onClick={() =>
									setSpaceMenuOppen(!isSpaceMenuOppen)
								}
							>
								<span className='mr-2'>Open Dropdown</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-5 h-5 ml-2 -mr-1'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'
								>
									<path
										fill-rule='evenodd'
										d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
										clip-rule='evenodd'
									/>
								</svg>
							</button>
							<div
								id='dropdown-menu'
								className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${
									isSpaceMenuOppen ? 'block' : 'hidden'
								}`}
							>
								<a
									href='/'
									className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
								>
									Uppercase
								</a>
								<a
									href='/'
									className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
								>
									Lowercase
								</a>
								<a
									href='/'
									className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
								>
									Camel Case
								</a>
								<a
									href='/'
									className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
								>
									Kebab Case
								</a>
							</div>
						</div>
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<div className='relative ml-3'>
							<div>
								<button
									type='button'
									className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
									id='user-menu-button'
									aria-expanded='false'
									aria-haspopup='true'
									onClick={() =>
										setAccountOppen(!isAccountOppen)
									}
								>
									<span className='absolute -inset-1.5'></span>
									<span className='sr-only'>
										Open user menu
									</span>
									<img
										className='h-8 w-8 rounded-full'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
								</button>
							</div>

							<div
								className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
									isAccountOppen ? 'block' : 'hidden'
								}`}
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='user-menu-button'
							>
								<Link
									to={`/`}
									className='block px-4 py-2 text-sm text-gray-700'
									onClick={() => setAccountOppen(false)}
									>
									Your Profile
								</Link>
								<Link
									to='/settings'
									className='block px-4 py-2 text-sm text-gray-700'
									onClick={() => setAccountOppen(false)}
									>
									Settings
								</Link>
								<button
									onClick={logout}
									className='block px-4 py-2 text-sm text-gray-700'
								>
									Sign out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
