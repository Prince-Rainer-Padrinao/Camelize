function camelize(str){
    let subset = str.split('-')
    return subset.reduce((result, word, index)=>{
        if(index === 0){
            return result += word
        }else{
            return result += word.charAt(0).toUpperCase()+ word.slice(1)
        }
    }, '')
    
}

let camel = camelize("background-color");
console.log(camel)
