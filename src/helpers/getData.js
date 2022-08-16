import roundNumber from './roundNumber'

const getData = (transactions, cantMonths) => {
    const months = new Map()
    months.set(0, 'January')
    months.set(1, 'February')
    months.set(2, 'March')
    months.set(3, 'April')
    months.set(4, 'May')
    months.set(5, 'June')
    months.set(6, 'July')
    months.set(7, 'August')
    months.set(8, 'September')
    months.set(9, 'October')
    months.set(10, 'November')
    months.set(11, 'December')

    const data = []
    const lastMonths = []
    let actualDate = new Date()
    let actualMonth = actualDate.getMonth()

    for (let i = 0; i < cantMonths; i++){
        lastMonths.push(actualMonth)
        actualMonth -= 1
        if (actualMonth === -1) {
            actualMonth = 11
        }
    }

    lastMonths.reverse().forEach(month => {
        let positiveAmount = 0;
        let negativeAmount = 0;
        transactions.forEach(transaction => {
            if (parseInt(transaction.date.substring(5, 7)) - 1 === month) {
                if (transaction.typeId === 1) {
                    positiveAmount+= transaction.amount
                } else {
                    negativeAmount+= transaction.amount
                }
                
            }
        })
        data.push({
            "name": months.get(month),
            "positive amount": parseFloat(roundNumber(positiveAmount)),
            "negative amount": parseFloat(roundNumber(negativeAmount)),
            "net income": parseFloat(roundNumber(positiveAmount - negativeAmount))
        })
    })

    return data
}

export default getData