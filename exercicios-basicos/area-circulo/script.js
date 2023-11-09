function calculo() {
    let r = document.getElementById(`raio`)
    let p = 2 * Math.PI * Number(r.value)
    let a = Math.PI * (Number(r.value)**2)
    let res = document.getElementById(`res`)
    res.innerHTML = `<p>O perímetro do círculo é de ${p} e a sua área é de ${a}.`
}