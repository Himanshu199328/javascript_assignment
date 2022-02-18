function sayHello(param){
    console.log("hello",param );
    param();
    return "my name is himanshu";
}

function smaller(){
    console.log("hello i am smaller");
}
let result=sayHello(smaller);
console.log(result);