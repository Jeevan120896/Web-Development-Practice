import {add} from './Modules.js'
console.log(add(5, 6))

import {multiply} from './Modules.js'
console.log(multiply(8, 6))

import {subtract} from './Modules.js'
console.log(subtract(10, 6))

import greet from './Modules.js'
console.log(greet("Jeevan"))

import {welcome}  from './Modules.js'
console.log(welcome)

import { UserName } from './Modules.js'
console.log("User:", UserName());

import { ProductName } from './Modules.js'
console.log("Product:", ProductName());

import { employee } from './Modules.js'
console.log(employee.name, employee.age, employee.country);

import { products } from './Modules.js'
console.log(products[0].name, products[0].price);  
console.log(products[1].name, products[1].price);