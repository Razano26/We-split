import { Outlet, Link } from 'react-router-dom';
import '../styles/Header.css';
import { useUserContext } from '../context/UserContext';

const Header = () => {

	const { logout } = useUserContext();

	return (
		<div className={`main_display`}>
			<div className={`header`}>
				<Link to='/'>Home</Link>
				<Link to='space'>Space</Link>
				<Link to='setting'>Setting</Link>
				<Link to='about'>About</Link>
				<Link to='/' onClick={logout}>
					Logout
				</Link>
				

			</div>
			<div className={`current_page`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Header;
