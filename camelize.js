function camelize(str){
    let subset = str.split('-')
    let result = ''
    for(let i =0; i<subset.length; i++){
        if (i>0){
            result += subset[i].charAt(0).toUpperCase() + subset[1].slice(1)
        }        
        else{
            result += subset[i]
        }
    }
    return result
}

let camel = camelize("background-color");
console.log(camel)