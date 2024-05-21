function solution(a, b) {
    const AplusB = Number(a.toString()+b.toString())
    const AtimesB = 2 * a * b
    console.log(AplusB)
    console.log(AtimesB)
    
    if (AplusB > AtimesB) {
        return AplusB
    } else if (AplusB < AtimesB) {
        return AtimesB
    } else {
        return AplusB
    }
    
    
    // return answer;
}