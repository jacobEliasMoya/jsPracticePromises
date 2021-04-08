let number = 1;

let execFunc = (resolve,reject) =>{
    if(number ==1){
        resolve('were good');
    } else{
        reject('were not good, rejected promise');
    }
}

const resolveFunc = (resval) =>{
    console.log(resval);
}

const rejectFunc = (rejval) =>{
    console.log(rejval);
}

let prom = new Promise(execFunc); 

prom
    .then(resolveFunc)
    .catch(rejectFunc);