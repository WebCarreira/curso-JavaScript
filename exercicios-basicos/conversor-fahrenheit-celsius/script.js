function converte() {
    let far = document.getElementById(`tf`)
    let cel = (Number(far.value) - 32) * 0.5556
    let res = document.getElementById(`res`)

    res.innerHTML = `<p>A temperatura ${far.value}ºF são ${cel}ºC`
}