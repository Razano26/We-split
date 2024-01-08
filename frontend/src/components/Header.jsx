import { Outlet, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='space'>Space</Link>
			<Link to='setting'>Setting</Link>
			<Link to='about'>About</Link>
			<Outlet />
		</div>
	);
};

export default Header;
