function Pessoa(nomeCompleto, idade) {
    this.nomeCompleto = nomeCompleto;
    this.idade = idade;
}

function CharacterWoW(nomeCompleto, idade, nickname, server, faction, race, classe) {
    Pessoa.call(this, nomeCompleto, idade)

    if (idade < 14) {
        console.log('É necessário ter mais que 14 anos para jogar World of Warcraft!')
    } else {
        this.nickname = nickname;
    
        this.setNickname = function(newNickname) {
            if (newNickname.length > 12) {
                return "O seu novo apelido não segue os limites propostos."
            } else if (newNickname.length < 2) {
                return "O seu novo apelido não segue os limites propostos."
            } else {
                return "Apelido alterado com sucesso!"
            }
        }
    
        this.server = server;
    
        this.faction = faction;
    
        this.race = race;
    
        this.classe = classe;
    }
}

function CharacterDiablo(nomeCompleto, idade, nickname, classe) {
    Pessoa.call(this, nomeCompleto, idade)

    if (idade < 18) {
        console.log('É necessário ter mais que 18 anos para jogar Diablo IV!')
    } else {
        this.nickname = nickname;

        this.race = "Humano";

        this.classe = classe;
    }
}

const player1 = new CharacterWoW("Eduardo Teixeira", 25, "edTx", "Mankrik", "Horda", "Blood Elf", "Paladin")
const player2 = new CharacterDiablo("Lionel Messi", 36, "LeoMessi", "Sorcerer")
const player3 = new CharacterWoW("Mauricio Schafer", 26, "Melado", "Mankrik", "Horda", "Tauren", "Druid")

console.log(player1)
console.log(player2)
console.log(player3)