let student = {
    //attributes
    name:"Mark",
    age:205,
    isActive:true,
    sayHi: function(){
        return "Hello";
    },
    hobbies:["football", "Music","Video Games"],
    address:{
        street:"Palomar",
        zip:"22145",
        city:"San Diego",
        country:"USA"
    }
}

// console.log(student.hobbies[1]);
// //display address in the console
// console.log(student.address);

 let products = [];
// let product1={
//     name:"Laptop",
//     description:"HP laptop 14' ' core i7",
//     price:1200
// }

// let product2={
//     name:"Monitor",
//     description:"31.5' ' Asus 1440p 144hz curved",
//     price:289
// }

// let product3={
//     name:"GPU",
//     description:"NVIDEA GTX 3080",
//     price:1050
// }

// products.push


//homework hint


function Product(n,d,p){
    this.name=n;
    this.description=d;
    this.price=p;
}

let product1 = new Product("Speaker", "Sony wireless",20.50);
let product2 = new Product("Laptop","HP Omen",1300)
let product3 = new Product("Headset", "Senheisser", 200)
let product4 = new Product("Monitor","Asus", 250)
console.log(product1,product2,product3,product4);

//products.push(product1,product2,product3)

function displayNames(){
    for(let i=0;i<products.length;i++){
        console.log(products[i].description);
    }
}

displayNames();

