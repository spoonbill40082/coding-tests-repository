function solution(a, b) {
    var AB = a.toString()+b.toString()
    var ans1 = Number(AB)
    var BA = b.toString()+a.toString()
    var ans2 = Number(BA)
    
    if (ans1 > ans2) {
        return ans1
    } else if (ans1 < ans2) {
        return ans2
    } else {
        return ans1
    }
    
   
    // switch (answer1 || answer2) {
    //     case answer1 > answer2: 
    //         return answer1;
    //         break;            
    //     case answer1 < answer2: 
    //         return answer2;
    //         break;
    //     case answer1 = answer2: 
    //         return answer1;
    //         break;
    // }
}
