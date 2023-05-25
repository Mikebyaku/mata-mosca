let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

//criando os níveis de dificuldade
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if(nivel === 'nightmare') {
    criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth 
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){

    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo

    }
},1000)


function posicaoRandomica () {
    let moscaInicial = document.getElementById('mosca')
    if(moscaInicial) {
        moscaInicial.remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "images/coracao_vazio.png"
        vidas++
        }
        
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    //criar o elemento html
    let mosca = document.createElement('img')
    mosca.src = 'images/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }
}

function tamanhoAleatorio () {
//fazer aparecer de forma randomica os tamanhos diferentes das moscas
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
    
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
    
}
