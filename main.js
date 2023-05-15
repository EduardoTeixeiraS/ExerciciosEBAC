$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault() //Desativando o efeito padrão do botão

        const novaTarefa = $('#inputTarefa').val() //Criando container para o valor escrito no input
        const novoItem = $(`<li>${novaTarefa}</li>`) //Adicionando o valor de novaTarefa dentro da linha de código

        $(novoItem).appendTo('ul') //Adicionando a linha de código do novoItem dentro de "ul"

        $('#inputTarefa').val('') //Limpando o input
    })

    $('ul').on('click','li', function(e){ //Selecionando o evento
        $(this).toggleClass("tarefa-concluida") //toggleClass ativa e desativa a classe feita no css ".tarefa-concluida"
    })
})