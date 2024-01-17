import ReadLine from "readline-sync"

const input = (text) => ReadLine.question(text)

function displayResult() {
    console.log(`Jogador(a): ${name}`)
    console.log(`Pontuação final: ${isTrue} acertos. `)
}

const questions = [
    { id: 1, question: 'Quando aconteceu o atentado as Torres Gêmeas?', response: '2001' },
    { id: 2, question: 'Em que ano foi detectado o primeiro paciente com coronavírus?', response: '2019' },
    { id: 3, question: 'Em que ano Steve Jobs apresentou o primeiro iPhone sem botão físico?', response: '2007' },
    { id: 4, question: 'Qual o ano da morte de Stan Lee?', response: '2018' },
    { id: 5, question: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', response: '1994' },
    { id: 6, question: 'O primeiro lançamento de foguete da SpaceX ocorreu em?', response: '2017' },
    { id: 7, question: 'Em que ano foi apresentado o primeiro computador eletrônico?', response: '1946' },
    { id: 8, question: 'Em que ano ocorreu a Revolução Francesa?', response: '1789' },
    { id: 9, question: 'Em que ano começou a Primeira Guerra Mundial?', response: '1914' },
    { id: 10, question: 'Em que ano terminou a Segunda Guerra Mundial?', response: '1945' },
    { id: 11, question: 'O muro de Berlim foi derrubado em qual ano?', response: '1989' },
    { id: 12, question: 'Qual o ano que o Titanic afundou?', response: '1912' },
    { id: 13, question: 'Qual o ano de lançamento do primeiro PlayStation?', response: '1994' },
    { id: 14, question: 'Em que ano a Declaração Universal dos Direitos Humanos foi assinada?', response: '1948' },
    { id: 15, question: 'Em que ano a World Wide Web (WWW) foi criada por Tim Berners-Lee?', response: '1990' },
    { id: 16, question: 'Em que ano o Euro foi introduzido como moeda única na Europa?', response: '1999' },
    { id: 17, question: 'Em que ano foi abolido a escravidão no Brasil?', response: '1888' },
    { id: 18, question: 'Qual ano foi instaurado o regime militar no Brasil?', response: '1964' },
    { id: 19, question: 'Em que ano o Brasil proclamou a República?', response: '1889' },
    { id: 20, question: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', response: '1904' },
    { id: 21, question: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', response: '1950' },
    { id: 22, question: 'Em que ano foi adotado o Acordo de Paris sobre mudanças climáticas?', response: '2015' },
    { id: 23, question: 'Em qual ano ocorreu a guerra das Malvinas?', response: '1982' },
    { id: 24, question: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', response: '1963' },
    { id: 25, question: 'Em que ano a União Europeia (UE) foi estabelecida?', response: '1993' },
    { id: 26, question: 'Em que ano a Guerra Civil Espanhola começou?', response: '1936' },
    { id: 27, question: 'Em que ano Nelson Mandela foi libertado da prisão?', response: '1990' },
    { id: 28, question: 'Em que ano a Alemanha foi reunificada após a Guerra Fria?', response: '1990' },
    { id: 29, question: 'Qual foi o ano do acidente nuclear em Chernobyl?', response: '1986' },
    { id: 30, question: 'Em que ano o homem pisou na Lua pela primeira vez?', response: '1969' }
];

console.log("\n---------Quiz de Fatos Históricos---------\n")

const name = input("Digite o seu nome: ")

questions.sort(() => Math.random() - 0.5)
let questionsSelected = questions.slice(0, 10)

let isTrue = 0

questionsSelected.forEach((question, i) => {

    console.log(`\n${i}: ${question.question}`)
    let responsePlayer = input("Digite sua resposta (ano): ")

    if (responsePlayer == question.response) {

        console.log("Resposta correta!")
        isTrue += 1

    } else {
        console.log("Resposta errada!\n")
    }

})

if (isTrue <= 3) {
    displayResult()
    console.log("OH NÃO! Tente mais uma vez.")
} else if (isTrue <= 6) {
    displayResult()
    console.log("BOM TRABALHO! Pratique um pouco mais.")
} else if (isTrue <= 9) {
    displayResult()
    console.log("MUITO BOM! Você acertou a maioria.")
} else {
    displayResult()
    console.log("EXCELENTE! Você é um verdadeiro expert.")
}