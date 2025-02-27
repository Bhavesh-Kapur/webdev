//topics: predefiend api for the promise 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),3000)
}   );

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2),5000)
}   );

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3),4000)
}   );



// async function promiseExecutor() {
//     const result = await Promise.all([promise1, promise2, promise3]);
//     console.log(result);
// }

// async function promiseExecutor() {
//     data1 = await promise1;
//     data2 = await promise2;
//     data3 = await promise3;
//     sum = data1 + data2 + data3;
//     console.log(sum);

// }

// async function promiseExecutor() {
//     data = await Promise.all([promise1, promise2, promise3]);  //promise.all takes in array of promises as the parameter and returns a single promise.
//     sum = data.reduce((acc, val) => acc + val,0);
//     console.log(sum);
// }
// promiseExecutor();
 //the use case for promise all is when we want to wait for all the promises to resolve and then do something with the data.   //promise.all takes in array of promises as the parameter and returns a single promise.




// async function promiseExecutor() {
//     data =
//         await Promise.allSettled([promise1, promise2, promise3]); 
// sum = data.reduce((acc, obj) => {  
//     if (obj.status === 'fulfilled') {   
//         return acc + obj.value;
//     }
//     return acc;


// },0)
// console.log(sum);
// }
// promiseExecutor();


// async function promiseExecutor() {
//     data = await Promise.race([promise1, promise2, promise3]); 
//     console.log(data);
// }
// promiseExecutor();

async function promiseExecutor() {
    data = await Promise.any([promise1, promise2, promise3]); 
    console.log(data);
}
promiseExecutor();