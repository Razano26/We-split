import { useState } from 'react';
import AddSplit from './AddSplit';

function Footer() {
	const [isAddSplitOpen, setAddSplitOpen] = useState(false);

	return (
		<footer className='fixed bottom-4 right-4'>
			<div className='group flex items-end justify-end'>
				<div
					className='text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 z-9'
					onClick={() => setAddSplitOpen(true)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-6 h-6 group-hover:rotate-90 transition-all duration-[0.6s]'
					>
						<path d='M5 12h14' />
						<path d='M12 5v14' />
					</svg>
				</div>
			</div>
			<AddSplit open={isAddSplitOpen} setOpen={setAddSplitOpen} />
		</footer>
	);
}

export default Footer;
