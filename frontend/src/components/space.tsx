import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { Space } from '../pages/Spaces';
import AddExpense from './AddExpence';
import SpaceButton from './spacebutton';
import { SpaceChart } from './SpaceChart';

const formatter = new Intl.NumberFormat('fr-FR', {
	style: 'currency',
	currency: 'EUR',
});

function SpaceBlock({
	space,
	name,
	updateSpaces,
}: {
	space: Space;
	name: string;
	updateSpaces: () => void;
}) {
	const { user } = useUserContext();

	const [isAddExpenseOpen, setAddExpenseOpen] = useState(false);

	const myTotal = space.expenses?.reduce((acc, expense) => {
		if (expense.paidBy === user?.id) {
			return acc + expense.amount;
		} else {
			return acc - expense.amount;
		}
	}, 0);

	const total = space.expenses?.reduce((acc, expense) => {
		return acc + expense.amount;
	}, 0);

	return (
		<>
			<div className='bg-white rounded-3xl border p-6 shadow-xl'>
				<div className='grid grid-cols-[auto_200px_100px] gap-x-0 gap-y-0'>
					<div>
						<div className='flex justify-start items-center'>
							<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
							<p className='ml-2 text-base font-bold'>{name}</p>
						</div>
						<div className='flex flex-col pt-4'>
							<p className='text-sm'>
								Mon solde :
								<span
									className={`${
										myTotal >= 0
											? 'text-green-600'
											: 'text-red-600'
									}`}
								>
									{' '}
									{formatter.format(myTotal)}
								</span>
							</p>
							<p></p>
							<p className='text-sm'>
								Solde total : {formatter.format(total)}
							</p>
							<p></p>
						</div>
					</div>
					<div>
						<SpaceChart />
					</div>
					<div className='flex items-end'>
						<SpaceButton />
					</div>
				</div>
			</div>
			<AddExpense
				open={isAddExpenseOpen}
				setOpen={setAddExpenseOpen}
				space={space}
				updateSpaces={updateSpaces}
			/>
		</>
	);
}

export default SpaceBlock;
