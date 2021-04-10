// practicing some async programing
const numberadder = async (number1,number2) =>{
    if(number1+number2 > 5){
        return 'num is larger than 5';
    } else {
        return 'num is less than 5';
    }
}

numberadder(1,4)
    .then((resolveValue)=>{
            console.log(resolveValue);
    })

// using online resources while learning as well, 
// just getting into async await into more detail! I will master Javascript within the month neforebfore moving onn