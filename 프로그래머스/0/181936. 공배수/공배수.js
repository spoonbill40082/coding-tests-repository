function solution(number, n, m) {
    const timesN = number % n
    const timesM = number % m
    
    if (timesN === 0 && timesM ===0) {
        return 1
    } else {
        return 0
    }
}