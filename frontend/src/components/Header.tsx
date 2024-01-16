import { Outlet, Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
	return (
		<div className={`main_display`}>
			<div className={`header`}>
				<Link to='/'>Home</Link>
				<Link to='space'>Space</Link>
				<Link to='setting'>Setting</Link>
				<Link to='about'>About</Link>

			</div>
			<div className={`current_page`}>
				<Outlet />
			</div>
		</div>
	);
};

export default Header;
