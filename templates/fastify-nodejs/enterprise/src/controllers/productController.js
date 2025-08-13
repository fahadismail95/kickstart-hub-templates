exports.getAllProducts = async (request, reply) => {
	return [
		{ id: 1, name: 'Laptop' },
		{ id: 2, name: 'Phone' },
	]
}

exports.getProductById = async (request, reply) => {
	const { id } = request.params
	return { id, name: id === '1' ? 'Laptop' : 'Phone' }
}
