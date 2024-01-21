import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { Space } from '../pages/Spaces';
import AddExpense from './AddExpence';
import AddMember from './AddMember';
import SpaceButton from './SpaceButton';
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
	const [isAddMemberOpen, setAddMemberOpen] = useState(false);

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
							<div className='inline-flex items-center justify-center w-10 h-10 text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z' />
									<path d='m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z' />
									<line x1='12' x2='12' y1='22' y2='13' />
									<path d='M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5' />
								</svg>
							</div>
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
						<SpaceButton setOpenAddExpence={setAddExpenseOpen} setOpenAddMember={setAddMemberOpen}/>
					</div>
				</div>
			</div>
			<AddExpense
				open={isAddExpenseOpen}
				setOpen={setAddExpenseOpen}
				space={space}
				updateSpaces={updateSpaces}
			/>
			<AddMember 
				open={isAddMemberOpen}
				setOpen={setAddMemberOpen}
				space={space}
				updateSpaces={updateSpaces}
			/>
		</>
	);
}

export default SpaceBlock;
