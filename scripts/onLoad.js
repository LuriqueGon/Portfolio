'use strict'

document.querySelector('.sessaoProjetos').appendChild(document.createElement('div')).classList.add('cont')

for(let i=0;i < card.length;i++){
    cardGroup.appendChild(card[0])
    card = document.querySelectorAll('.card')
    let create = document.createElement('div')
    create.setAttribute('id', `cont${i}`)
    document.querySelector('.cont').appendChild(create).classList.add('contLine')
}

document.querySelector('#cont0').classList.add('contMark')