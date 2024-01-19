import app from "./Auth";



// ----------------------------------------------------------------------



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.create({
		data: {
			name: 'Louis',
			surname: 'Labeyrie',
			email: 'alice@prisma.io',
			pseudo: 'louislab',
			password: 'password',
		},
	});

	const allUsers = await prisma.user.findMany();
	console.dir(allUsers, { depth: null });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});



// ----------------------------------------------------------------------

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});