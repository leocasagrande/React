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

var greeting = document.getElementById('greeting')
var username = ''

function login(){
    username = prompt('Enter your username')

    if(username === null || username === ''){
        alert('Please, enter your username')
    }else{
        greeting.innerHTML = `Bem vindo, ${username}`

        let logoutBtn = document.createElement('button')

        logoutBtn.innerText = 'Log out'

        logoutBtn.onclick = logout()

        greeting.appendChild(logoutBtn)
    }
}

function logout(){
    alert('You have been logged out')
    greeting.innerHTML = `Até mais, ${username}`
}