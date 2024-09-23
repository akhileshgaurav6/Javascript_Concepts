// Javascript important for ReactJs

// function fun(a,b,c){
//     console.log("Hello Function")
//     console.log(a+b+c);
// }

// fun(10,20,40)

// const myFun = (a,b,c) => {
//     console.log("Hello Arrow Function")
//     console.log(a+b+c)
// } 

// myFun(10,20,30)

// function test (sayHello) {
//     console.log("calling sayhello")
//     sayHello();
// }

// test(() => {
//     console.log("this is say hello function")
// })

// function fetchData(url, successCallback){
//     console.log("Fetching Data!");
//     console.log(url);
    
//     successCallback();
// }

// fetchData('https://', ()=>{
//     console.log("Success");
// })


// ****Callbacks

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response) => {
//     console.log("success")
//     console.log(response)
// })

// .catch((error) => {
//     console.log("error")
//     console.log(error)
// })


// *****String Templates****

// let name="Akhi";
// let message=`Hello ${name}`
// console.log(message);

// let a=5;
// let b=9;

// console.log(`${a+b}`)

const fetchData=(url) => {
    console.log(url)
}

const baseUrl=`http://localhost:8080`
const userId = "12345";

fetchData (`${baseUrl}/api/v1/${userId}/images`)


// 4) ****Object and Array Destructing******

// localStorage.setItem(key, value)
// localStorage.getItem(key)
