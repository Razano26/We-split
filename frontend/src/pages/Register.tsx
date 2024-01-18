import { Field, Form, Formik } from 'formik';
import { useUserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

	const { setToken } = useUserContext();

	const onSubmitRegister = async (values: any, actions: any) => {
		console.log({ values, actions });

		let response = await fetch('http://localhost:8080/register', {
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		if (response?.status === 201) {
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
            navigate('/');
		} else if (response?.status === 409) {
			alert('user already exist');
			return console.log('user already exist');
		}
	};

	return (
		<div className='container max-w-full mx-auto py-24 px-6'>
			<div className='font-sans'>
				<div className='max-w-sm mx-auto px-6'>
					<div className='relative flex flex-wrap'>
						<div className='w-full relative'>
							<div className='mt-32'>
								<div className='text-center font-semibold text-black'>
									Wellcome to We Split
								</div>
								<Formik
									initialValues={{
                                        name: '',
										email: '',
										password: '',
									}}
									onSubmit={onSubmitRegister}
								>
									<Form className='mt-8'>
										<div className='mx-auto max-w-lg'>
											<div className='py-2'>
												<span className='px-1 text-sm text-gray-600'>
													Full Name
												</span>
												<Field
													placeholder='Jhon Smith'
													type='text'
													name='name'
													className='text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
												/>
											</div>
											<div className='py-2'>
												<span className='px-1 text-sm text-gray-600'>
													Username
												</span>
												<Field
													placeholder='example@wesplit.fr'
													type='text'
													name='email'
													className='text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
												/>
											</div>
											<div
												className='py-2'
												x-data='{ show: true }'
											>
												<span className='px-1 text-sm text-gray-600'>
													Password
												</span>
												<div className='relative'>
													<Field
														placeholder='Password'
														type='password'
														name='password'
														className='text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
													/>
												</div>
											</div>
											<div className='flex justify-end'>
												<label className='block text-gray-500 font-bold my-4'>
													<Link
														to='/'
														className='cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400'
													>
														<span>Login</span>
													</Link>
												</label>
											</div>
											<button
												className='mt-6 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black'
												type='submit'
											>
												Register
											</button>
										</div>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
