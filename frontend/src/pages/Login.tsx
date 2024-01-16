import React from 'react';
import '../styles/Login.css';

function Login() {

	const [isContainerActive, setIsContainerActive] = React.useState(true);

	return (
		<div
			className={`container ${
				isContainerActive ? ' right-panel-active' : ''
			}`}
		>
			<div className='form-container sign-up-container'>
				<form action='#'>
					<h1>Créer un compte</h1>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button>S'enregistrer</button>
				</form>
			</div>
			<div className='form-container sign-in-container'>
				<form action='#'>
					<h1>Se conncter</h1>
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button>connection</button>
				</form>
			</div>
			<div className='overlay-container'>
				<div className='overlay'>
					<div className='overlay-panel overlay-left'>
						<h1>Bon retour</h1>
						<p>
							connecte toi merci
						</p>
						<button
							className='ghost'
							id='signIn'
							onClick={() => setIsContainerActive(false)}
						>
							se co
						</button>
					</div>
					<div className='overlay-panel overlay-right'>
						<h1>Bienvenue</h1>
						<p>
							Donne tes data et ta un comtpe
						</p>
						<button
							className='ghost'
							id='signUp'
							onClick={() => setIsContainerActive(true)}
						>
							s'enregistrer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
