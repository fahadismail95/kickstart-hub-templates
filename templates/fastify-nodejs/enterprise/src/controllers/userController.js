exports.getAllUsers = async (request, reply) => {
	return [
		{ id: 1, name: 'Alice' },
		{ id: 2, name: 'Bob' },
	]
}

exports.getUserById = async (request, reply) => {
	const { id } = request.params
	return { id, name: id === '1' ? 'Alice' : 'Bob' }
}
