import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import React from 'react';

const Header = () => {
	const { logout } = useUserContext();

	const [isAccountOppen, setAccountOppen] = React.useState(false);

	return (
		<header className='p-2 bg-gradient-to-br from-yellow-400 to-yellow-500 m-2 mb-4 mt-6 rounded-full shadow-lg'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center justify-between'>
					<div className='flex flex-1 items-center justify-start'>
						<Link to='/'>
							<div className='flex items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='42'
									height='42'
									viewBox='0 0 24 24'
									fill='none'
									stroke='white'
									stroke-width='1'
									stroke-linecap='round'
									stroke-linejoin='round'
								>
									<path d='M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z' />
									<path d='M2 9v1c0 1.1.9 2 2 2h1' />
									<path d='M16 11h0' />
								</svg>
								<span className='ml-2 text-white font-bold text-2xl'>
									We Split
								</span>
							</div>
						</Link>
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<div className='relative ml-3'>
							<div>
								<button
									type='button'
									className='relative flex rounded-ful text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full'
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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='42'
										height='42'
										viewBox='0 0 24 24'
										fill='none'
										stroke='white'
										stroke-width='1'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<circle cx='12' cy='12' r='10' />
										<circle cx='12' cy='10' r='3' />
										<path d='M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662' />
									</svg>
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
