function solution(a, b, c) {

//     switch(a, b, c){
//         case a !== b && b !== c && a !== c:
//         return a + b + c
//         break
//         case a == b == c:
//         return  (a + b + c) * (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c )
        
//     }
    

    if (a != b && b != c && a != c) {
        return a + b + c
    } else if (a === b && b !== c || a === c && b !== c || a !== b && b === c) {
        return (a + b + c) * (a**2 + b**2 + c**2 )
    } else if (a = b = c) {
        return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
    }
    
}