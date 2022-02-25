// - renders and return the rendered data into an array
const renderRawResponse = (rawResponse) => {
    return new Promise((resolve, reject) => {
        if (!rawResponse) reject('Falsy result!')
        {
            const advice = rawResponse.slip.advice
            const id = rawResponse.slip.id
            resolve([advice, id])
        }
    })
}

export { renderRawResponse }