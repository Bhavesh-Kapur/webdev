// agenda: learn about various high order functions 
// map, reduce, filter, foreach 

//map a=[2,5,4,6] ==> a=[4,10,8,12]

// for(let i=0;i<4;i++){
//     a[i]=a[i]*2;
// }
// console.log(a);

// a = [2, 5, 4, 6];
// function double(value){
//     return value*2;
// }

// b=a.map(double);
// console.log(a);

// a = [2, 5, 4, 6];
// a = a.map((data)=>{
//     return data*2;
// })


// console.log(a); 
//filter method 
// b = a.filter((data) => {
    //     return data % 2 == 0;
    // }
    // )
    // console.log(b);
    
    //reduce method   takes 2 parameters (one is accumulator and other is data)
// a = [2, 5, 4, 6];
// b=a.reduce((acc,data)=>acc+data,0);
// console.log(b)


//for each method 

// a = [2, 5, 4, 6];
// a.forEach(element => {
//     console.log(element);   
// });

//js objects 

// const faculty = {
//     Name: "Bhavesh",
//     Education: "B.Tech",
//     Workplace: "upes",
// }

// console.log(faculty.Name);
// console.log(faculty["Name"]);
// for(let pro in faculty){      //use of for in loop to iterate over the object 
//     // console.log(pro);
//     console.log(faculty[pro]);
// }   

const user = [
    {name:"Alice",purchase: ["laptop","phone"]},
    {name:"Bob",purchase: ["tablet","laptop"]},
    {name:"Charlie",purchase: ["phone","tablet"]},
];


const output= {};

user.forEach((data)=>{
    data.purchase.forEach((item)=>{
        if(!output[item]){
            output[item]= [];
        }
        output[item].push(data.name);
    })
}
)

console.log(output);    