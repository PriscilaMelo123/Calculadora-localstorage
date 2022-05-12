const btn_calcular = document.getElementById('btn_calcular');
// Objetos de Receitas
const valor_base = document.getElementById('valor_base')
const valor_transporte = document.getElementById('valor_transporte')
const valor_alimentacao = document.getElementById('valor_alimentacao')
// Total de receitas
const valor_receita = document.getElementById('valor_receita')
 // Despesas
const valor_automovel = document.getElementById('valor_automovel')
const faltas = document.getElementById('faltas')
// Total descontos
const valor_descontos = document.getElementById('valor_descontos')
// Receita - Descontos
const valor_total = document.getElementById('valor_total')
const inputs = document.getElementsByTagName('input')

btn_calcular.addEventListener('click', function() {
    calcular()
    salvarLocalStorage()
})

function salvarLocalStorage() {
    for (let input of inputs) {
        localStorage.setItem(input.id, input.value)
    }
}

function lerLocalStorage() {
    for (let input of inputs) {
        input.value = localStorage.getItem(input.id)
    }
}

window.addEventListener('load', () => {
    for (let input of inputs) {
        input.addEventListener('blur', () => {
            calcular()
        })
    }
    lerLocalStorage()
})

function calcular() {
    
    const receita_total = Number(valor_base.value) + Number(valor_transporte.value) + Number(valor_alimentacao.value)
    const desconto_total = Number(valor_automovel.value) + Number(faltas.value)
    const total = receita_total - desconto_total 
   
    
    valor_receita.value = receita_total.toFixed(2)
    valor_descontos.value = desconto_total.toFixed(2)
    valor_total.value = total.toFixed(2)
}