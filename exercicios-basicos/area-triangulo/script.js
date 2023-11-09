function calcular() {
    let b = document.getElementById(`base`)
    let a = document.getElementById(`altura`)
    let area = (Number(b.value) * Number(a.value)) / 2
    let res = document.getElementById(`res`)

    res.innerHTML = `A área de um triângulo com base ${base.value}cm e com altura de ${altura.value}cm é de ${area}cm2`
}