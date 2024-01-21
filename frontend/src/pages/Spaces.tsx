import SpaceBlock from '../components/SpaceBlock';
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

	const updateSpaces = () => {
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
	};

	return (
		<main className='flex-1 bg-transparent p-4 overflow-auto rounded-xl scrollbar-thumb-yellow-400/75 scrollbar-track-gray-100 scrollbar-thin'>
			<div className='flex flex-col space-y-5'>
				{spaces.map((space) => {
					return (
						<SpaceBlock
							space={space}
							key={space.id}
							name={space.name}
							updateSpaces={updateSpaces}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default Spaces;
