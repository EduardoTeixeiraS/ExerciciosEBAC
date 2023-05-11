const form = document.getElementById('form-deposito')
const btn = document.getElementById('btn-enviar')
var formEValido = false

function checarValor(primeiroNum, segundoNum) {
    var eMaior = parseInt(segundoNum) > parseInt(primeiroNum)
    return eMaior
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const num1 = document.getElementById('campoa')
    const num2 = document.getElementById('campob')

    formEValido = checarValor(num1.value, num2.value)
    if (formEValido) {
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.equal-message').style.display = 'none'
        document.querySelector('.error-message').style.display = 'none'
        btn.classList.remove('error')
        btn.classList.remove('equal')
    } else if (num1.value === num2.value) {
        document.querySelector('.success-message').style.display = 'none'
        document.querySelector('.equal-message').style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'
        btn.classList.remove('error')
        btn.classList.add('equal')
    } else {
        document.querySelector('.success-message').style.display = 'none'
        document.querySelector('.equal-message').style.display = 'none'
        document.querySelector('.error-message').style.display = 'block'
        btn.classList.add('error')
        btn.classList.remove('equal')
    }
})