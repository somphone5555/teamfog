
///1
let arrowFunc = function(value){
    return value;
};

console.log(arrowFunc(122)); 	// 122

///-----// ->

let arrowFunc = value => {
    return value;
};
console.log(arrowFunc(122)); 	// 122

///2

let arrowFunc = value => value;
console.log(arrowFunc(122)); //122

///----

let arrowFunc2 = value => console.log(value);
arrowFunc2(122); 				// 122

///---

let arrowFunc2 = function(value){
    return console.log(value);
};
arrowFunc2(122);

///3

let arrowFunc = () => 122;
console.log(arrowFunc());

///---

let arrowFunc = function(){
    return 122;
};
console.log(arrowFunc());

///4

let arrowFunc = () => {};
arrowFunc();

///---

var arrowFunc = function(){};
arrowFunc();

///5

let getFont = () => ( { color: "red", size: 200 } );
console.log(getFont());			// {color: "red", size: 200}

///---

let getFont = function(){
    return {color: "red", size: 200};
};
console.log(getFont());			// {color: "red", size: 200}

///6

let sum = (val1, val2, val3) => val1 + val2 + val3;
console.log(sum(1,2,3));		//  6

///---

let sum = function(val1, val2, val3){
    return val1 + val2 +val3;
};
console.log(sum(1,2,3));		//  6

///7

let sum = (val1 = 1, val2 = 2, val3 = 3) => val1 + val2 + val3;
console.log(sum());				//  6

///---

let sum = function(val1 = 1, val2 = 2, val3 = 3){
    return val1 + val2 +val3;
};
console.log(sum());				//  6

///8

let max = (...value) => Math.max(...value);
console.log(max(1, 2, 3, 6));	// 6

///---

let max = function(...value){
    return Math.max(...value);
};
console.log(max(1, 2, 3, 6));	// 6





let div = `<div>
<h1>Hello world</h1>
</div>`;

console.log(div);
