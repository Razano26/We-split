import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { Space } from '../pages/Spaces';
import AddExpense from './AddExpence';

const formatter = new Intl.NumberFormat('fr-FR', {
	style: 'currency',
	currency: 'EUR',
});

function SpaceBlock({ space, name, updateSpaces }: { space: Space; name: string; updateSpaces: () => void}) {
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
			<div className='bg-white rounded-3xl border p-6'>
				<div className='flex flex-col'>
					<div className='flex flex-row justify-around'>
						<div className='flex flex-col justify-center items-center'>
							<div className='flex justify-start items-center'>
								<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
								<p className='ml-2 text-base'>{name}</p>
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
							<p>Dernières transactions :</p>
							<table className='min-w-full'>
								<thead className='bg-gray-200 border-b'>
									<tr>
										<th
											scope='col'
											className='text-sm font-medium text-gray-900 text-left p-2'
										>
											Titre
										</th>
										<th
											scope='col'
											className='text-sm font-medium text-gray-900 text-left p-2'
										>
											Somme
										</th>
									</tr>
								</thead>
								<tbody>
									{space.expenses
										?.slice(0, 5)
										.map((expense) => {
											return (
												<tr
													className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'
													key={expense.id}
												>
													<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
														{expense.title}
													</td>
													<td
														className={`text-sm font-light whitespace-nowrap ${
															expense.paidBy ===
															user?.id
																? 'text-green-600'
																: 'text-red-600'
														}`}
													>
														{expense.paidBy ===
														user?.id
															? '+'
															: '-'}
														{formatter.format(
															expense.amount
														)}
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
					<div className='flex justify-end pt-6'>
						<button
							className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white h-7 w-7'
							onClick={() => setAddExpenseOpen(true)}
						>
							+
						</button>
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
