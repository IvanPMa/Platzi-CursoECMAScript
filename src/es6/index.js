function newFunction(name,age,country){
    var name = name || 'Ivan';
    var age = age  || 32;
    var country = country || 'MX';
    console.log(name, ade, country);
};

//es6
function newFunction2(name = 'oscar', age= 32, country= 'MX'){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo',23,'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea
let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n"
+ "otra frase epica que necesitamos";
 //es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

let { name, age, country} = person;
console.log(name, age);

// Operador de propagacion - nos permite expandir de ciertas situacion varios elementos
// Ciertps elementos en arreglos y unirlos en uno solo para poderlo presentar
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila']; 

let education = ['David', ...team1, ...team2];
console.log(education);

//Scope
{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}
console.log(globalVar);
// const a = 'b';

// Crear objetos mas rapidamente
let name = 'Ivan'
let age = 22;
//es5
obj = {name: name, age: age };
//Es6
obj2 = {name, age}; 
console.log(obj2);

//Arrow functions
const names = [
    {name: 'Ivan', age:22},
    {name: 'Yesica', age: 27}
]

let listOfNames = names.map (function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country) =>{
//
}

const listOfNames4 = name=>{

}

const square = num => num * num;

//Promesas - Halgo va a pasar, en algn momento o tiempo
const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!')
        }
        else{
            reject('ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Clases 
class calculator{
    
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB;
    }
    sum2(){
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));
console.log(calc.sum2(2,2));

//Modulos
import {hello} from './module';
hello();