exports.getAllUsers = async (ctx) => {
	ctx.body = [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
	]
}

exports.getUserById = async (ctx) => {
	const { id } = ctx.params
	ctx.body = { id, name: id === '1' ? 'Alice' : 'Bob' }
}
