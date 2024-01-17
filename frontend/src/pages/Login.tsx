import React from 'react';
import { Field, Form, Formik } from 'formik';
//import '../styles/Login.css';
import { useUserContext } from '../context/UserContext';

function Login() {
	const [isContainerActive, setIsContainerActive] = React.useState(true);

	const { setToken } = useUserContext();

	const onSubmitConnection = async (values: any, actions: any) => {
		console.log({ values, actions });
		const response = await fetch('http://localhost:8080/login', {
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const data = await response.json();
		console.log('data', data);

		setToken(data.token);
	};
	const onSubmitRegister = async (values: any, actions: any) => {
		console.log({ values, actions });

		let response = await fetch('http://localhost:8080/register', {
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});

		if (response?.status === 201){

			console.log('Go ce co maintenant');

			response = await fetch('http://localhost:8080/login', {
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				
			});

			const data = await response.json();
			console.log('data', data);
			setToken(data.token);

		} else if (response?.status === 409){
			alert('user already exist');
			return console.log('user already exist');
		}
	};

	return (
		<div
			className={`container ${
				
				isContainerActive ? ' right-panel-active' : ''
			}`}
		>
			<div className='form-container sign-up-container'>
				<Formik
					initialValues={{ name: '', email: '', password: '' }}
					onSubmit={onSubmitRegister}
				>
					<Form>
						<h1>Créer un compte</h1>
						<Field name='name' type='text' placeholder='Name' />
						<Field name='email' type='email' placeholder='Email' />
						<Field
							name='password'
							type='password'
							placeholder='Password'
						/>
						<button type='submit'>S'enregistrer</button>
					</Form>
				</Formik>
			</div>
			<div className='form-container sign-in-container'>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={onSubmitConnection}
				>
					<Form>
						<h1>Se conncter</h1>
						<Field name='email' type='email' placeholder='Email' />
						<Field
							name='password'
							type='password'
							placeholder='Password'
						/>
						<button type='submit'>connection</button>
					</Form>
				</Formik>
			</div>
			<div className='overlay-container'>
				<div className='overlay'>
					<div className='overlay-panel overlay-left'>
						<h1>Bon retour</h1>
						<p>connecte toi merci</p>
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
						<p>Donne tes data et ta un comtpe</p>
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
}

export default Login;
