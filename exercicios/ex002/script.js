function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var género = ''
        var img = document.createElement('img') //cria a tag img
        img.setAttribute('id', 'foto') // atribui à tag img o id ="foto"
        if (fsex[0].checked) {
            género = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')//Insere a imagem
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            género = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectámos ${género} com ${idade} anos.`
        res.appendChild(img) //mostra o img
    }
}