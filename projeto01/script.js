// var name = prompt('Please, enter a name')
// var matricula = prompt('Please, enter your matricula')
// var curso = prompt('Please, enter your course')
// var img = 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png'
// console.log('Nome = ' + name + ' Idade = ' + idade);

// var n1 = parseInt(prompt('Please, enter n1'))
// var n2 = parseInt(prompt('Please, enter n2'))
// var n3 = parseInt(prompt('Please, enter n3'))
// var n4 = parseInt(prompt('Please, enter n4'))
// var soma = n1 + n2 + n3 + n4
// var media = soma/4

// console.log(media);
// alert(media)

// document.write('<h1> Olá, seja bem vindo!</h1>')
// document.write('<h2> Olá, seja bem vindo!</h2>')
// document.write('<h3> Olá, seja bem vindo!</h3>')

// document.write(`<h1> Olá ${name}, da matrícula ${matricula} e curso ${curso}! </h1>`)
// document.write(`<img src=${img}/>`)

// var greeting = document.getElementById('greeting')
// var username = ''

// function login(){
//     username = prompt('Enter your username')

//     if(username === null || username === ''){
//         alert('Please, enter your username')
//     }else{
//         greeting.innerHTML = `Bem vindo, ${username}`

//         let logoutBtn = document.createElement('button')

//         logoutBtn.innerText = 'Log out'

//         logoutBtn.onclick = logout()

//         greeting.appendChild(logoutBtn)
//     }
// }

// function logout(){
//     alert('You have been logged out')
//     greeting.innerHTML = `Até mais, ${username}`
// }

// var lista = ['Victor', 'Thais', 'Sabrina', 'Matheus', 150]

// console.log(lista);

//Adiciona um novo indice no final da lista
// console.log(lista.push());

//Exclui o ultimo indice da lista
// console.log(lista.pop());
// console.log(lista);

//Adiciona em primeiro da lista
// console.log(lista.unshift('Leonardo'));
// console.log(lista);

//Apaga o primeiro da lista
// console.log(lista.shift());
// console.log(lista);

//Adiciona um separador entre os indices da lista
// console.log(lista.join(';'));
// console.log(lista);

//Transforma a lista em uma string
// console.log(lista.toString());
// console.log(lista);

// var homens = ['homem1', 'homem2', 'homem3']
// var mulheres = ['mulher1', 'mulher2', 'mulher3']

//Junta as duas listas
// console.log(homens.concat(mulheres));

// var month = ['Jan', 'Fev', 'Mar', 'April', 'May', 'June', 'July']
// var i = 0

//Loops basicos

// while(i <= month.length){
//     document.write(`<p>${month[i]}</p>`)
//     i++
// }

// for(var i = 0; i < month.length; i ++){
//     document.write(`<p>${month[i]}<p>`)
// }

//Funcao usando switch case
// function escolher(){
//     let options = Number(prompt('Digite a opção desejada!'))

//     switch(options){
//         case 1:
//             alert('Você escolheu ARROZ')
//             break;
//         case 2:
//             alert('Você escolheu FEIJÃO')
//             break;
//         case 3:
//             alert('Você escolheu BATATA FRITA')
//             break;
//         case 4:
//             alert('Você escolheu PEIXE')
//             break;
//         default:
//             alert('Opcão inválida!')
//             break;
//     }
// }

//Crie um programa que calcule o IMC do usuario e mostre os dados

    // let peso = prompt('Informe seu peso em kg')
    // let altura = prompt('Informe sua altura em metros')
    // let imc = peso/(altura * altura)
    // document.write(`<h2>Seu IMC é ${imc}</h2>`)


//Crie uma funcao que leia a temperatura do usuario e pergunte para qual temperatura deseja converter(Mostre o resultado para o usuario)

    // let temperatura = Number(prompt('Informe a temperatura'))

    // function calculaTemp(){
    //     let option = Number(prompt('Informe a opção'))

    //     switch(option){
    //         case 1:
    //             temperatura = temperatura + 273.15
    //             document.write(`Sua temperatura em Kelvin: ${temperatura}`)
    //             break;
    //         case 2:
    //             temperatura = 32 + (temperatura * 1.8)
    //             document.write(`Sua temperatura em Fahrenheit: ${temperatura}`)
    //             break;
    //         case 3:
    //             temperatura = temperatura - 273.15
    //             document.write(`Sua temperatura em Celsius: ${temperatura}`)
    //             break;
    //         case 4:
    //             temperatura = ((temperatura - 273.15) * 1.8) + 32
    //             document.write(`Sua temperatura em Fahrenheit: ${temperatura}`)
    //             break;
    //         case 5:
    //             temperatura = (temperatura - 32)/1.8
    //             document.write(`Sua temperatura em Celsius: ${temperatura}`)
    //             break;
    //         case 6:
    //             temperatura = (temperatura + 459.67) * 5/9
    //             document.write(`Sua temperatura em Kelvin: ${temperatura}`)
    //             break;
    //     }
    // }

//Crie um programa que gere quantidade pedida de numeros aleatorios da loteria para o usuario

function geraMega(){
    let lista = []
    for(let i = 0; i < 6; i ++){
        let n = Math.floor(Math.random() * (60 - 1) + 1)
        lista.push(n)
    }
    document.write(`<h2>Os numeros da sua mega: ${lista.toString()}</h2>`)
}

function geraQuina(){
    let lista = []
    for(let i = 0; i < 5; i ++){
        let n = Math.floor(Math.random() * (80 - 1) + 1)
        lista.push(n)
    }
    document.write(`<h2>Os numeros da sua quina: ${lista.toString()}</h2>`)
}

function geraMania(){
    let lista = []
    for(let i = 0; i < 50; i ++){
        let n = Math.floor(Math.random() * (99 - 1) + 1)
        lista.push(n)
    }
    document.write(`<h2>Os numeros da sua loto mania: <p>${lista.toString()}</p></h2>`)
}