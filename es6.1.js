class chat{
    constructor(message){
        this.message = message;
    }
    say(){
        console.log(this.message);
    }
}

let es6 = new chat("Hello,World");
es6.say();

let array = ["A","B","C"];

console.log(array.includes("A"));