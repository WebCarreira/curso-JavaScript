function inverte() {
    let n = document.getElementById(`num`)
    let rev = reversedNum(num.value)
    let res = document.getElementById(`res`)

    res.innerHTML = `<p>O número invertido fica ${rev}.</p>`
}