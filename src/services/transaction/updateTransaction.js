const API_URL = process.env.API_URL || 'http://localhost:3030'

const updateTransaction = async (id, { transaction }) => {
    return fetch(`${API_URL}/api/transactions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    }).then(res => {
        if (!res.ok) throw new Error('Update is not ok')
        res.json()
    })
}

export default updateTransaction