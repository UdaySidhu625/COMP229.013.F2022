var hello;
// function hello(){
//     document.getElementById("demo").innerHTML+="Hello World";
// }

// hello=() =>{
//     document.getElementById("demo").innerHTML+=this;
// }

// document.getElementById("btn").addEventListener("click",hello);

// document.getElementById("btn").addEventListener("click",() =>{
//     document.getElementById("demo").innerHTML+="Hello World";
// });

// var numbers=[1,2,3,4,5];
// const squares=numbers.map(n=>n*n);
// document.write(squares);

// document.write("<br>");

// var evens=new Array();
// numbers.forEach(n=>{
//     if(n % 2 ===0){
//         evens.push(n);
//     }
// });
// document.write(evens);

// const author = {
//     fullName: "Bob Alice",
//     books: ["Book01","Book02","Book03"],

//     printBooks() {
//     this.books.forEach(book => document.log(book + 'by ' +this.fullName));},

//     printBooks1() {
//         function printValue(book){
//         this.books.forEach(book => document.log(book + 'by ' +this.fullName));}
//         this.books.forEach(printValue);
//     },

    
    // printBooks1() {
        
    //     this.books.forEach(book => document.log(book + 'by ' +this.fullName));}
    //     this.books.forEach(printValue);
    // },




// };

// function iterateVar() {
//     for(var i = 0; i < 10; i++) {
//     console.log(i);
//     }
//     console.log(i);
// }


// function iterateLet() {
//         for(let i = 0; i < 10; i++) {
//         console.log(i);
//         }
//     console.log(i);
// }

// iterateVar();
// iterateLet();

// function reinitConst()
// {
//     const me = 1;
//     me = 2;
// }

// reinitConst();

// function add(x,y=0)
// {
//     return x+y;
// }

// add(1);
// add(1,2);

// function userFriends(user, ...friends)
// {
//     console.log(user+' has '+friends.length+' friends. They are: ');
//     friends.map(n=> console.log(n));
// }
// userFriends('John','Bob','Alice');


// function userTopFriends(firstFriend,secondFriend,thirdFriend)
// {
//     console.log(firstFriend);
//     console.log(secondFriend);
//     console.log(thirdFriend);
// }

// userTopFriends(...["Uday","Anmol","Uday"]);
