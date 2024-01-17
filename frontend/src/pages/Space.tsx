
function Space() {
    return (
		<main className='flex-1 bg-indigo-50 p-2 overflow-auto'>
			<div className='flex flex-col space-y-5'>
				<div className='bg-white rounded-3xl border p-6'>
					<div className='flex flex-col'>
						<div className='flex flex-row justify-around'>
							<div className='flex flex-col justify-center items-center'>
								<div className='flex justify-start items-center'>
									<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
									<p className='ml-2 text-base'>My Space</p>
								</div>
								<div className='flex flex-col pt-4'>
									<p className='text-sm'>
										Mon solde :
										<span className='text-red-600'>-10 €</span>
									</p>
									<p></p>
									<p className='text-sm'>Solde total : 20 €</p>
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
												Prénom
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
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Mark
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+20€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jacob
											</td>
											<td className='text-sm font-light whitespace-nowrap text-red-600'>
												-10€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jules
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+40€
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='flex justify-end pt-6'>
							<button className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white h-7 w-7'>
								+
							</button>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-3xl border p-6'>
					<div className='flex flex-col'>
						<div className='flex flex-row justify-around'>
							<div className='flex flex-col justify-center items-center'>
								<div className='flex justify-start items-center'>
									<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
									<p className='ml-2 text-base'>My Space</p>
								</div>
								<div className='flex flex-col pt-4'>
									<p className='text-sm'>
										Mon solde :
										<span className='text-red-600'>-10 €</span>
									</p>
									<p></p>
									<p className='text-sm'>Solde total : 20 €</p>
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
												Prénom
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
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Mark
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+20€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jacob
											</td>
											<td className='text-sm font-light whitespace-nowrap text-red-600'>
												-10€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jules
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+40€
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='flex justify-end pt-6'>
							<button className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white h-7 w-7'>
								+
							</button>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-3xl border p-6'>
					<div className='flex flex-col'>
						<div className='flex flex-row justify-around'>
							<div className='flex flex-col justify-center items-center'>
								<div className='flex justify-start items-center'>
									<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
									<p className='ml-2 text-base'>My Space</p>
								</div>
								<div className='flex flex-col pt-4'>
									<p className='text-sm'>
										Mon solde :
										<span className='text-red-600'>-10 €</span>
									</p>
									<p></p>
									<p className='text-sm'>Solde total : 20 €</p>
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
												Prénom
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
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Mark
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+20€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jacob
											</td>
											<td className='text-sm font-light whitespace-nowrap text-red-600'>
												-10€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jules
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+40€
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='flex justify-end pt-6'>
							<button className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white h-7 w-7'>
								+
							</button>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-3xl border p-6'>
					<div className='flex flex-col'>
						<div className='flex flex-row justify-around'>
							<div className='flex flex-col justify-center items-center'>
								<div className='flex justify-start items-center'>
									<button className='inline-flex items-center justify-center w-9 h-9 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full'></button>
									<p className='ml-2 text-base'>My Space</p>
								</div>
								<div className='flex flex-col pt-4'>
									<p className='text-sm'>
										Mon solde :
										<span className='text-red-600'>-10 €</span>
									</p>
									<p></p>
									<p className='text-sm'>Solde total : 20 €</p>
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
												Prénom
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
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Mark
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+20€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jacob
											</td>
											<td className='text-sm font-light whitespace-nowrap text-red-600'>
												-10€
											</td>
										</tr>
										<tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
											<td className='text-sm text-gray-900 font-light whitespace-nowrap'>
												Jules
											</td>
											<td className='text-sm font-light whitespace-nowrap text-green-600'>
												+40€
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='flex justify-end pt-6'>
							<button className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white h-7 w-7'>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Space;
