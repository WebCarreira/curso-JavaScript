function clicou() {
    let n = document.getElementById(`num`)
    let res = document.getElementById(`res`)
    let cubo = Number(n.value)**3
    res.innerHTML = `<p>O cubo do número ${n.value} é ${cubo}.`
    n.value = ``
}