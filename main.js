// setting a number to one for now
let number = 1;

// executor function for promise
let execFunc = (resolve,reject) =>{
    // if statement to determine outcome 
    if(number ==1){
        resolve('were good');
    } else{
        reject('were not good, rejected promise');
    }
}

// resolve function, to log the value returned within resolve
const resolveFunc = (resval) =>{
    console.log(resval);
}

// resolve function, to log the value returned within reject
const rejectFunc = (rejval) =>{
    console.log(rejval);
}
// invoke a promise
let prom = new Promise(execFunc); 

//using then & catch to resolve or reject
prom
    .then(resolveFunc)
    .catch(rejectFunc);