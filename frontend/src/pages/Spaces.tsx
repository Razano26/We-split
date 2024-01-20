import SpaceBlock from '../components/space';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

export interface Space {
	id: number;
	name: string;
}

function Spaces() {
	const [spaces, setSpaces] = useState<Space[]>([]);
	const user = useUserContext();

	useEffect(() => {
		if (!user.token) return;

		fetch(process.env.REACT_APP_API_URL + '/splits', {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setSpaces(data);
			});
	}, [user.token]);

	return (
		<main className='flex-1 bg-indigo-50 p-2 overflow-auto'>
			<div className='flex flex-col space-y-5'>
				{spaces.map((space) => {
					console.log(space);
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
