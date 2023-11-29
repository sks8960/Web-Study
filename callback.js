let add = (a, b, asd) => {
    var result = a + b;
    var result2 = a - b;
    if(result2 > 0){
        asd(result2);
    }
    else
        asd(result);
}

let log = (callback) => {
  callback();
}

let back = () => {
  console.log("this is result");
}

log(back);

let EX = (value) => {
  {
    console.log(value);
  }
}
add(8, 8, EX =>{
  console.log(EX);  
})
add(1, 1, EX)
