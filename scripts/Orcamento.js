'use strict'

let form = document.querySelector('.formulario')
let valor = document.querySelector('.valor')
let prazoTempo = document.querySelector('#prazoValue')
let valorFinal = 0
let taxaUrgencia = 0

form.addEventListener('change', CalcularValor)

function CalcularValor () {

    // Resetando o Valor, e a taxa
    valorFinal = 0
    taxaUrgencia = 0

    // Calculando Valor Pelas Paginas Solicitadas ... 
    let valuePages = Math.trunc(document.querySelector('#Pages').value)
    valorFinal = Number(valorFinal)
    valuePages = Number(valuePages)
    valuePages *= 100
    valorFinal += valuePages

    // Calculando Valor Pelo Layout
    let layout = document.querySelector('#LSim')
    if(document.querySelector('#LSim').checked){
        valorFinal += 60
    }

    // Calculando Valor Pelo Script
    let script = document.querySelector('#SSim')
    if(document.querySelector('#SSim').checked){
        valorFinal += 80
    }

    // Calculando Valor Pelo Prazo
    let prazo = document.querySelector('#prazo').value
    prazoTempo.innerHTML = `Prazo: ${prazo} semanas`
    taxaUrgencia = 1 - prazo*0.1    
    valorFinal *= 1 + taxaUrgencia

    console.log(prazo)
    // Valor Final, dentro do HTML
    valor.innerHTML = `R$ ${valorFinal.toFixed(0)},00 `
    return valorFinal, taxaUrgencia
}

const IsValid = () => {
    if(valorFinal != 0 && valorFinal > 0){
        return true
    }else{
        return false
    }
}

function Relatorio () {
    if(IsValid()){
        let email = prompt ("Insira seu email abaixo")
        if(validateEmail(email)){
            let layValue = 0
            let scriptValue = 0
            let pages = Math.trunc(document.querySelector('#Pages').value)
            let msg = `${pages} páginas (R$ ${pages * 100} , 00)\n \n`
            if(document.querySelector('#LSim').checked){
                layValue = 60
                msg += `Com um layout (R$ 60 , 00) \n \n`
            }
            if(document.querySelector('#SSim').checked){
                scriptValue = 80
                msg += `Com um script (R$ 80 , 00) \n \n`
            }
            msg += `Mais um prazo de ${document.querySelector('#prazo').value} semanas (10% de urgência adicional a  cada semana( R$ ${valorFinal - ((pages * 100) + layValue + scriptValue)},00) ) \n \n`

            msg += `Totalizando um valor final de  R$ ${valorFinal}, 00`

            alert(`enviar para ${email} \n \n Relatorio de Orçamento Final (detalhado)  \n \n ${msg}`)
        }else{
            alert("Seu email não é valido !!")
        }
    }    
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }