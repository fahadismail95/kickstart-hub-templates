exports.getAllProducts = async (ctx) => {
	ctx.body = [
		{ id: 1, name: 'Laptop' },
		{ id: 2, name: 'Phone' },
	]
}

exports.getProductById = async (ctx) => {
	const { id } = ctx.params
	ctx.body = { id, name: id === '1' ? 'Laptop' : 'Phone' }
}
