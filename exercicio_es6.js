const alunos = [
    {nome: 'Eduardo', nota: 8},
    {nome: 'Mauricio', nota: 9},
    {nome: 'Nicholas', nota: 5},
    {nome: 'Guilherme', nota: 6},
    {nome: 'Bernardo', nota: 3}
];

function alunosAprovados() {
    alunos.forEach(aluno => {
        if (aluno.nota >= 6) {
            console.log(`Parabéns ${aluno.nome}! Sua nota foi ${aluno.nota} e você foi aprovado(a)`)
        }
    })
}

function alunosReprovados() {
    alunos.forEach(aluno => {
        if (aluno.nota < 6) {
            console.log(`${aluno.nome}, sua nota foi ${aluno.nota}, abaixo do necessário e você foi reprovado.`)
        }
    })
}

alunosAprovados()
alunosReprovados()