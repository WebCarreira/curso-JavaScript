//Recursividade
function fatorial(n) {
    if(n == 1) {
        return '1'
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*Fatorial de 5! é 5*4*3*2*1 
podemos dizer que:
n! = n*(n-1)!
1! = 1
*/