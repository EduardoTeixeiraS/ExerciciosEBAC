$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: ' ___.___.___-__'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: ' (__) _____-____'
    })

    $('#cep').mask('00000-000', {
        placeholder: ' _____-___'
    })

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Campo obrigatório.',
            email: 'Campo obrigatório.',
            telefone: 'Campo obrigatório.',
            cpf: 'Campo obrigatório.',
            enderecoCompleto: 'Campo obrigatório.',
            cep: 'Campo obrigatório.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})