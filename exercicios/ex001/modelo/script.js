function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 22 -- serve para forçar a hora e testar se está a funcionar em qualquer hora do dia
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = `imagens/sunrise-2667456_1280.jpg`
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = `imagens/sunset-4274662_1280.jpg`
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //Boa noite!
        img.src = `imagens/wolf-647528_1280.jpg`
        document.body.style.backgroundColor = '#515154'
    }
}



