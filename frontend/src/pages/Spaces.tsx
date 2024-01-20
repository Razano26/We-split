import SpaceBlock from '../components/space';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

export interface Space {
	id: number;
	name: string;
	expenses: Expense[];
}

export interface Expense {
	id: number;
	title: string;
	amount: number;
	paidBy: number;
}


function Spaces() {
	const [spaces, setSpaces] = useState<Space[]>([]);
	const { token, user } = useUserContext();

	useEffect(() => {
		if (!token) return;

		fetch(
			process.env.REACT_APP_API_URL + '/users/' + user?.id + '/splits',
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSpaces(data.splits);
			});
	}, [token, user]);

	return (
		<main className='flex-1 bg-indigo-50 p-2 overflow-auto'>
			<div className='flex flex-col space-y-5'>
				{spaces.map((space) => {
					return (
						<SpaceBlock
							space={space}
							key={space.id}
							name={space.name}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default Spaces;
