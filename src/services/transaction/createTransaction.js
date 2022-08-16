const API_URL = process.env.API_URL || 'http://localhost:3030'

const createTransaction = async ({ transaction }) => {
    return fetch(`${API_URL}/api/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    }).then(res => {
        if (!res.ok) throw new Error('Reesponse is not ok')
        res.json()
    })
}

export default createTransaction