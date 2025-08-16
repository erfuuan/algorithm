function isValid(s){
    let stack=[]
    const mapP={")":"(" ,"}":"{","]":"["}

    for(const ch of s){
        if(("{[(").includes(ch)){
            stack.push(ch)
        }else{
            let popStack=stack.pop()
            if(popStack!==mapP[ch]){return false}
        }

    
    }
    return stack.length===0
}

console.log(isValid(")()[]{}")); 
console.log(isValid("()[]{}"));