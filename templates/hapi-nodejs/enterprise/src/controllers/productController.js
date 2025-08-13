exports.getAllProducts = async (request, h) => {
	return [
		{ id: 1, name: 'Laptop' },
		{ id: 2, name: 'Phone' },
	]
}

exports.getProductById = async (request, h) => {
	const { id } = request.params
	return { id, name: id === '1' ? 'Laptop' : 'Phone' }
}
