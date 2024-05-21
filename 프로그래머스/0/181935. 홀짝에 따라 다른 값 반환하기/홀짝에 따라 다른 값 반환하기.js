function solution(n) {
    
    let sum = 0
    
    if (n % 2 !== 0 ) {
        for (i = 1; i <= n; i += 2) {
            sum += i
        }
    } else {
        for (i = 0; i <= n; i += 2) {
            sum += i * i
        }
    }
    
    return sum
}