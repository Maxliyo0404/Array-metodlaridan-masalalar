// const fruits = ["olma", "behi", "nok", "uzum"];
// // console.log( "Uzunligi", fruits.length);
// for(let i = 0; i < fruits.length ; i++ ){
//     console.log(fruits);
    
// }
// const users = ["Ali", "Vali", "G'ani"];
// // user.push("Akmal");
// // console.log(user);
// const user = users.unshift("Ozodbek");
// console.log(users);
// console.log(user);

// const numbers = [1, 2, 3, 4, 5, 6];
// // numbers.reverse();
// // console.log(numbers);
// //  numbers [0] ='10';
// numbers.push(40);
//  console.log(numbers);
//  console.log(typeof numbers);
//  const users = [10, 20, 30, 40, 50,90];
//  const user = users.map((i) => i >= 20

//  )

// console.log(user);
// const raqam = (raqam , index, array)=>{
//     console.log(index);
//     console.log(array);
    
    
//     return raqam > 4
// }
// const num = [1, 5, 2, 4, 0, 6, 7];
// const raqam = num.reduce((i, el)=> i + el, 0)
// // const raqam = num.sort()
// // const raqam  = num.findIndex((el)=> el > 6)
// // const raqam = num.find((el)=>el > 4)
// // const raqam = num.map((el)=> el * 2)
// // const raqam = num.filter((el)=>el > 4);
// console.log(raqam);


// num.forEach((i, el)=>{
//     if(el === 2)
//     console.log(i);
    
// })
// const numbers = num.find(raqam)
// console.log(  numbers);
// console.log(num);

// const user = "SALOM-ANVAR";
// const arr = user.split("-");
// console.log(arr);

// const fruits = ["banana", "apple", "orange", "peach"];
// const fruit = fruits.splice(1, 3, "milon", "arvuz", "kivi");
// console.log(fruit);
// console.log(fruits);
//   let numbers = [1, 0, 3, 5, 7, 8, 4, 20];
//   let num = numbers.includes()
// //   let num = numbers.map((el)=> el * 2);
// //   let num = numbers.findIndex((el)=> el > 5)
// // let num = numbers.reduce((el, i, a)=> el + i + a, 0)
// //   let num = numbers.sort((a, b)=> b - a);
//   console.log(numbers);
  
  // let x = 5;
  // let y = x--;
  // console.log(x);
  // console.log(y);
  //  const a = 'salom dunyo';
  //  const b = a.split(" ");
  //  const arr = b.join(" ")
  //  console.log(b);
  //  console.log(a);
      // let son = [2, 3, 8, 10, 6, 5];
      // let num = son.sort((a, b)=> b-a);
      // // let num = son.find((el)=> el >= 3);
      // console.log(num);
      // const son = [20, 60, 40, 30,70];
      // let num = son.map((el, i)=>el +i);
      // console.log(num);
//       const users = [
//     { ism: "Ali", yosh: 25 },
//     { ism: "Vali", yosh: 30 },
//     { ism: "Gani", yosh: 22 }
// ];

// users.forEach((user) => {
//     console.log(`${user.ism} ${user.yosh} yoshda.`);
// });

// // 
// const num = -2;
// if(num > 0){
//   console.log("Berilgan son musbat" );
  
// }else{
//   console.log("Berilgan son manfiy");
  
// }
// for(let i = 0 ; i < 10; i++){

//   console.log(i);
  
// // }  
// (function(){
//   console.log("salom dunyo");
  
// } )()
// (()=>{
//   console.log("salomlar");
  
// // })();
// (function (name){
//   console.log(`salom, ${name} !`);
  
// })("Anvar");

// const counter = (function(){
//   let count = 0;
// return {
//     increment: () => ++count,
//     getCount: () => count,
//   };
// })();""

// counter.increment();
// console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined — himoyalangan

// function greeat (name, callback){
//   return callback(name)
// }
// greeat("Rano", (name)=>console.log(`salom, ${name}`));

// function great(name, callbak){
//   return callbak(name)
// }
// great('Ali',(name)=> console.log(`Salom, ${name}`));

// function num(ism, gullar){
//   return gullar(ism)
// }
//  
// function number(a){
//   return function (b){
//     return a / b
//   }
// }
// const res = number(120);
// console.log(res(4));

// const user = {
//   name: "Ali",
//   age: 20,
//   gereat(){
//   console.log(this.name, this.age);
  
//   },
// };
// user.gereat();


// const cars ={
//   name: "BMW",
//   modeli: "Molibu",
//   year: 2,
//   newCar(){
//     console.log(this.modeli, this.name, this.year);
    
//   },
// };
// cars.newCar();

// let a = "global";

// function first() {
//   let b = "first";

//   function second() {
//     let c = "second";
//     console.log(a, b, c); // scope chain orqali barchasiga yetadi
//   }
//   send();
// }
// first();


// let a = "orange";
// function fruit(){
//   let b = "apple";
//   function f(){
//     let c = "banana"
//     console.log(a,b, c);
    
//   }
//   f();
// }
// fruit();

// const num = function(a){
//   let son = 20;
//   return function(b){
//   let son1 = 40;
//   return son1 * son
//   }
  
  
// }
// const res = num(2)
// console.log(res());
// let  i = 1;
// for( let i = 0; i < 10; i++){
//   console.log(i);
  
// // }
// let i = 0; sum = 0;
// while(i <= 5){
//   sum += i;
//   i++;
// }
// console.log(`${sum}`);
  // let parol = "";
  // while(parol !== "1234"){
  //   parol =prompt("parolni kiriting");
  // }
  // console.log("To'g'ri parol kiritildi !");
    // let parol = "";
    // while(parol !== "12345"){
    //   parol = prompt("Parolni kiriting");
    // }
    // // console.log("Muvaffaqiyati o'tdingiz !!! ");
    //   let i = 0;
    //   while(i < 10){
    //     if( i ===5){
    //       console.log("loop to'xtaildi");
    //       break;
          
    //     }
    //     console.log(i);
    //     i++
        
  //   //   }
  // for(let i = 0; i < 5; i++){
  //   console.log(i);
    
  // }
  // console.log("Shart bajarilda va men chiqdim qalay ");
     

  // function seyHello(){
  //   console.log("salom Maxliyo");
    
  // }
  // function great (calback, name){
  //   alert(` salomlar, ${name}`);
  //   calback();
  // }
  // great(seyHello , "Maxliyo");
  

  // function seyHello(a, b){
  //   return a+b;
  // }
  // function great (){
  //   const result = seyHello(10, 28);
  //   console.log(result);
    
  // }
  // great();


  // function a(){
  //   console.log(`Birinchi funksiya `);
  //   console.log(`bir tugadi`);
    
    
  // }
  // function b(){
  //   console.log(`Ikkinxhi funksiya`);
  //   a();
  //   console.log(`2 tugadi`);
    
  // }
  // function c(){
  //   console.log(`Uchinchi funksiya`);
  //   b();
  //   console.log(`3 tugadi`);
    
  // }
  // c();

  // function a(value){
  //   return value * value;
  // }
  // function b(value){
  // return value * value * value;
  // }
  // function c(value){
  //   console.log(`${value} ning kvadrat:`, a(value));
  //   console.log(`${value} ning kubi :`, b(value));
    
    
  // }
  // c(7);

//   function paramets(a, b){
//     return a * b;
//   }
//  console.log( paramets(4,8));
 
// const users = function(name){
//   console.log(`Salom ${name}`);
  
// }
// users("Alimardon");


// const mevalar = ["olma", "banan", "nok"];

// console.log(mevalar[2]);

// const users ={
//   name: "Donyor",
//   age: 29
// }
// function seyHello({name, age}){
//   return(`Salom mening ismim ${name},  ${age} yoshdaman`);
// }
// console.log(seyHello(users));

// Ichki obyektni ajratish usuli
// const teacher ={
//   name: "Maxliyo",
//   age: 34,
//   adress:{
//     city: "Tashkent",
//     region: "Yunusabod"
//   }
// };
//  const {adress }= teacher;
//  const {city, region} = adress;
//  console.log(adress);
//  console.log(city);
//  console.log(region);

//Defualt qismi

// const user = {
//   name: "Alisher",
//   age: "35",
//   city: "Korea"
// }
// const {name, age, city = "Aniqlanmagan"} =user;
// console.log(city);

 
 
  // const user ={
  //   name: "Abdulloh",
  //   age: 12
  // }
  // const {name: firstname, age: userage} =user;
  // console.log(firstname);
  // console.log(userage);
  
//   function sum(...numbers){
//     let sum = 0;
  
//   for(let i = 0; i< numbers.length; i++){
//     sum += numbers[i];
//   }
//   return sum;
//   }
// console.log(sum(1, 2, 3, 4, 5, 6));

// const numbers = [1, 3, 6, 8, 9];
// const raqamlar = [10, 50, 70, 20];
// const raqam = [...numbers, ...raqamlar];
// console.log(raqam);
  // let  numbers =[20, 30, 2];
  // numbers.push("lola");
  // console.log(numbers);
 
  const nums ={
    name: "Sitora",
    age: 11,
  }
  const {name:Sitora student:true}
  ul