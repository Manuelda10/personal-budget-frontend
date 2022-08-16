const API_URL = process.env.API_URL || 'http://localhost:3030'

const getOneCategory = async (id) => {
    return fetch(`${API_URL}/api/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    })
}

export default getOneCategory