const API_URL = process.env.API_URL || 'http://localhost:3030'

const getTransactionsByType = async (id) => {
    return fetch(`${API_URL}/api/types/${id}/transactions`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export default getTransactionsByType