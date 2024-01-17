import Space from "../components/space";

function Spaces() {
    return (
		<main className='flex-1 bg-indigo-50 p-2 overflow-auto'>
			<div className='flex flex-col space-y-5'>
				<Space/>
				<Space/>
				<Space/>
			</div>
		</main>
	);
}

export default Spaces;
