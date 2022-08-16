const API_URL = process.env.API_URL || 'http://localhost:3030'

const deleteTransaction = async (id) => {
    return fetch(`${API_URL}/api/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Delete is not ok')
        res.json()
    })
}

export default deleteTransaction