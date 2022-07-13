'use strict'

const next = document.querySelector('#next')
const previous = document.querySelector('#previous')
let card = document.querySelectorAll('.card')
const cardGroup = document.querySelector('.cardGroup')

const nextCard = () => {
    cardGroup.appendChild(card[0])
    card = document.querySelectorAll('.card')
    contNext()
    return card
}
const previousCard = () => {
    const lastCard = card[card.length   -1]
    cardGroup.insertBefore(lastCard, card[0])
    card = document.querySelectorAll('.card')
    contPrevious()
    return card
}

const contNext = ( ) => {
    const cont = document.querySelectorAll('.contLine')   
    let j = 1
    for(let i = 0; i<cont.length;i++){    
        if(document.querySelector(`#cont${i}`).classList.value == 'contLine contMark'){
            if(i == cont.length-1){
                document.querySelector(`#cont0`).classList.add('contMark')
                document.querySelector(`#cont${i}`).classList.remove('contMark')
            }else{
                document.querySelector(`#cont${j}`).classList.add('contMark')
                document.querySelector(`#cont${i}`).classList.remove('contMark')
                return false
            }
        }
        j++
    }
}
const contPrevious = ( ) => {
    const cont = document.querySelectorAll('.contLine') 
    for(let i = 0; i<cont.length;i++){
        if(document.querySelector(`#cont${i}`).classList.value == 'contLine contMark'){
            if(i <= 0){
                document.querySelector(`#cont0`).classList.remove('contMark')
                document.querySelector(`#cont${cont.length-1}`).classList.add('contMark')
                return false
            }else{
                document.querySelector(`#cont${i-1}`).classList.add('contMark')
                document.querySelector(`#cont${i}`).classList.remove('contMark')
                return false
            }
        }
    } 
}

next.addEventListener('click', nextCard)
previous.addEventListener('click', previousCard)

