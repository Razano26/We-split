export default function SpaceButton() {
	return (
		<div className='group relative bottom-0 right-0 p-2 flex items-end justify-end w-24 h-24'>
			<div className='text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 z-9 absolute focus:bg-gradient-to-br focus:from-yellow-400/5 focus:to-yellow-500/5'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<circle cx='12' cy='12' r='1' />
					<circle cx='12' cy='5' r='1' />
					<circle cx='12' cy='19' r='1' />
				</svg>
			</div>
			<div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path d='M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3' />
					<path d='M14 2v4a2 2 0 0 0 2 2h4' />
					<path d='M4 11.5a6.02 6.02 0 1 0 8.5 8.5' />
					<path d='M14 16c0-3.3-2.7-6-6-6v6Z' />
				</svg>
			</div>
			<div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
					<circle cx='9' cy='7' r='4' />
					<line x1='19' x2='19' y1='8' y2='14' />
					<line x1='22' x2='16' y1='11' y2='11' />
				</svg>
			</div>
			<div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path d='M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z' />
					<path d='M8 12h5' />
					<path d='M16 9.5a4 4 0 1 0 0 5.2' />
				</svg>
			</div>
		</div>
	);
}
