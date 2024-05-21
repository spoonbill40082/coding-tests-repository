function solution(my_string, overwrite_string, s) {    
    const answer = [...my_string]
    answer.splice(s, overwrite_string.length, overwrite_string)
    // console.log(answer)
    
    // const answer2 = [...my_string]
    // const result = answer.splice(s, overwrite_string.length, overwrite_string).join('')
    // console.log(result)
    
    return answer.join('');
}

