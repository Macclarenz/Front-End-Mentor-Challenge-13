const adviceNumber = document.querySelector('.advice-number')
const adviceText = document.querySelector('.advice-text span')
const diceButton = document.querySelector('.dice-button')

import { renderRawResponse } from "./renderResponse.js"

const getAdvice = async () => {
    try {
        const gettingAdvice = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-cache'
        })

        if (gettingAdvice.ok) {
            const jsonResponse = await gettingAdvice.json()
            const renderedResponse = await renderRawResponse(jsonResponse)
            
            adviceText.innerText = renderedResponse[0]
            adviceNumber.innerText = renderedResponse[1]

        } else throw new Error('Failed to connect!')

        
    } catch(err) {
        console.error(err.message)   
    }
}

getAdvice()

diceButton.addEventListener('click', getAdvice)