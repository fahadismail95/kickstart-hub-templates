exports.getAllUsers = async (request, h) => {
	return [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
	]
}

exports.getUserById = async (request, h) => {
	const { id } = request.params
	return { id, name: id === '1' ? 'Alice' : 'Bob' }
}
