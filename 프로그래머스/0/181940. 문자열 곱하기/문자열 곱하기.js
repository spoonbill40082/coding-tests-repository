function solution(my_string, k) {
    var answer = ''
    
    for(i=0; i<k; i++) {
        var answer = answer+my_string
    }
    
    console.log(answer)
    return answer;
}