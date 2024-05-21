function solution(str1, str2) {
    var answer = '';
    const maxLength = (str1+str2).length
    
    for (i = 0; i < maxLength; i++) {
        if (i < str1.length) {
            answer += str1[i];
        }
        if (i < str2.length) {
            answer += str2[i];
        }
    }

       console.log(answer)
    return answer;
}