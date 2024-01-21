import { Space } from '../pages/Spaces';
import { useUserContext } from '../context/UserContext';
import { Formik, Field, Form } from 'formik';
import { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

interface User {
    id: number;
    email: string;
    name: string;
    surname: string;
    pseudo: string;
    password: string;
}
	

export default function AddMember({
	open,
	setOpen,
	space,
	updateSpaces,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	space: Space;
	updateSpaces: () => void;
}) {
    const cancelButtonRef = useRef(null);
	const { token } = useUserContext();

    const [users, setUsers] = React.useState<User[]>([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    }, [token]);

    const submitAddMember = (values: any) => {
        fetch(process.env.REACT_APP_API_URL + '/splits/'+space.id+'/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                userId: values.user_id,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                updateSpaces();
                setOpen(false);
            });
    };

    return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transhtmlForm overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
									<div className='w-full flex justify-start text-gray-600 mb-3'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='icon icon-tabler icon-tabler-wallet'
											width='52'
											height='52'
											viewBox='0 0 24 24'
											strokeWidth='1'
											stroke='currentColor'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path
												stroke='none'
												d='M0 0h24v24H0z'
											/>
											<path d='M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12' />
											<path d='M20 12v4h-4a2 2 0 0 1 0 -4h4' />
										</svg>
									</div>
									<h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
										Find user
									</h1>
									<Formik
										initialValues={{
											user_id: '',
										}}
										onSubmit={(values, actions) => {
											submitAddMember(values);
											actions.setSubmitting(false);
										}}
									>
										<Form>
											<label
												htmlFor='name'
												className='text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2'
											>
												User
											</label>
											<Field
												name='user_id'
												className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-yellow-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
												as='select'
												required
											>
                                                {users?.map((user) => (
                                                    <option value={user.id}>{user.name}</option>
                                                ))}
                                            </Field>
											<div className='flex items-center justify-end w-full'>
												<button
													className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
													onClick={() =>
														setOpen(false)
													}
												>
													Cancel
												</button>
												<button
													type='submit'
													className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-400 bg-yellow-500 rounded text-white px-8 py-2 text-sm ml-3'
												>
													Submit
												</button>
											</div>
										</Form>
									</Formik>
									<button
										className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
										aria-label='close modal'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='icon icon-tabler icon-tabler-x'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											strokeWidth='2.5'
											stroke='currentColor'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
											onClick={() => setOpen(false)}
										>
											<path
												stroke='none'
												d='M0 0h24v24H0z'
											/>
											<line
												x1='18'
												y1='6'
												x2='6'
												y2='18'
											/>
											<line
												x1='6'
												y1='6'
												x2='18'
												y2='18'
											/>
										</svg>
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
