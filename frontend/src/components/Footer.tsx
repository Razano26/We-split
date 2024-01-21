import { useState } from "react";
import AddSplit from "./AddSplit";

function Footer() {

	const [isAddSplitOpen, setAddSplitOpen] = useState(false);

	return (
		<footer
			className='relative text-right'
			style={{ top: '-30px', right: '20px' }}
		>
			<button className='bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white text-5xl' onClick={() => setAddSplitOpen(true)}>
				+
			</button>
			<AddSplit open={isAddSplitOpen} setOpen={setAddSplitOpen} />
		</footer>
	);
}

export default Footer;
