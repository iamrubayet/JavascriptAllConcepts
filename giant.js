//01 - Course Introduction
----done


//02 - JavaScript Is Hard

---done


//03 - Don't Get Discouraged 



//04 - What Is JavaScript?


//05 - Download Tools



//06 - Your First JavaScript App


//07 - Prettier 



--done
----------------------------------------------------------------------------------------------------------
//08 - First Variable

let favNumber = 2

console.log(favNumber)

let a = 1
let b = 2
let c = 3

let d = c

console.log(c)







//09 - Number Type

let a = 1

console.log(typeof a)

let a = 1.2
let b = 2.2

console.log(a+b)






//10 - String Type

let a = "hellow world"

let b = 'john says "hell"'

let c  = "hello"
let d = "world"

console.log(c+" "+d)







//11 - Boolean Type

let a = true
let b = false







//12 - Null And Undefined Type
let a = null
let b = undefined
console.log(a)












//13 - Variable Comparison
let a = 1
let b = 2
console.log(a==b)

let c = null
let d = undefined

console.log(c==d)






//14 - Garbage Collection(new concept)
let a = 1
console.log(a)
let b =2
console.log(b)
let zzzz = 10000




//15 - Comments 

 //for single line "//"
 // multiple line   "/* */"


-------------------------------------------------------------------------------------------------------


//16 - Normal Functions

function myName(){
	console.log('rubayet')
}

function sum(a,b){
	console.log(a+b)
}

function sum(a,b){
	return a+b
}


sum(2,1)

function printName(name){
	console.log(name)

}

printname("rubayet")

function sayHi(name){
	return "hello" + name
}
let result = sayHi("ruba")

console.log(result)







//17 - Passing Functions As Arguments
function sumCallback(a,b,callback){
	callback(a+b)
}

function handlesum(sum){
	console.log(sum)
}

sumCallback(1,2,handlesum)

function printname(name,callback){
	callback("hello"+name)

}

printname("rubayet",function(variable){
	console.log(variable)

})//anonymous function(new concept)





//18 - Arrow Functions

function sum(a,b){
	return a+b
}

console.log(sum(1,2))

let sumArrow = (a,b) => {
	return a+b
}

let printname = name => {
	console.log(name)
}

console.log("ruba")





//19 - Stack Trace And Call Stack
function dostuff(a,b,name){
	print(sum(a,b))
	print(sayhi(name))
}

function print(variable){
	consol.log(variable)
}

function sum(a,b){
	return a+b
}

function sayHi(name){
	return "hi"+name

}

step into step over 






//20 - Hoisting
consol.log(sum(1,2))

function sum(a,b){
	return a+b
}

let a =1

arrow function do not moved up to the top . variable is not hoisted.

(new concept)









//21 - Scoping

function sayHi(name){
	let result = "Hi " + name
	console.log(result)
}

let result = "kyle"

sayHi(result)

{
	let a =1
	console.log(a)
}
{
	let a = 2
	console.log(a)
}

let  a =3
consol.log(a)






//22 - Closures

function print(variable){
	let c=3
	return function func(variable2){
		console.log(variable)
		console.log(variable2)
		console.log(c)
	}
} 

let a = print(1)

new concept(outside read)

----------------------------------------------------------------------------------------------------------
//23 - Const

const a =1 

a = 2

console.log(a)
(never changed)






//24 - Var

var a = 1

console.log(a)

(never use this best practise)
(var is not based on scope)
(var is hoisted to the top)
(new concept)






//25 - Type Coercion

let a = "1"

console.log(parseInt(a))


console.log(a)
console.log(typeof a)

let b = "2.3"

let c  = 3


console.log(parseFloat(b))


console.log(typeof c.toString())











//26 - == Vs ===

const a = 1

const b = "1"

console.log(a==b)

console.log(a===b)

(new concept)




//27 - NaN

const a = "ssddsd"

console.log(a)

console.log(typepof parseInt(a))

const b = 1

console.log(isNan(b))

Nan is always false
new concept

------------------------------------------------------------------------------------------------------------
//28 - Arrays

const a = [1,2,3,4,5,6,7,8,9,10]
a.push(11)

console.log(a[0])


const b = [[1,2,3,4],[7,9,0,5]]

console.log(b[1][1])

console.log(b.length)






29 - Objects

let name = "rubayet"

const age = 23

const favnumber = 2

let person = {

	name : "rubayet",
	age : 23,
	favnumber : 2,
	sayhi: function (){
		console.log('hi')
	}

}



console.log(person.name)


let car = {
	make: "nissan",
	model : x,
	isused: false,
	makenoise(){
		console.log("vroom")

	}
}


console.log(car.makenoise())


let person = {
	name : "rubayet",
	hobbies : ["cricket","football"],
	address:{
		street:"123"
		city : "somewhere"
	}

}


console.log(person.address.street)









//30 - Reference Vs Value
let a =1
let a = b;
let c = [1,2] //0x01
let d = c
d.push(3)
d= [1,2,3]
c= [1,2,3]

let a = [1,2,3]
let b = [1,2,3]

console.log(a === b)

const a = [1,2,3]
const b  = [1,2,3]
a.push(4)






//31 - Array Methods
a = [1,2,3,4]

a.forEach((number,index)=>{
	console.log(number)
	console.log(index)

})

const newa = a.map(number=>{
	return number*2
})

const newb = a.filter(number=>{
	return number <= 2
})

const n = a.find(number=>{
	return number > 2

})


const istrue = a.some(number=>{
	return number > 2

})



const rdc = a.reduce((sum,number)=>{
	return sum+number

},0)


const items = [
  {price:10},
  {price:12},
  {price:13},
  {price:15}
]

const rdc2 = items.reduce((sum,item)=>{
	return sum+item.price

},0)


const istrue = a.includes(2)







//32 - String Template Literals

let a = "hello"
let b = "world"

console.log(`{$a} {$b}`) 


//33 - New And This 

funciton createUser(name,age){
	return {name:name,age:age}
}

const user = createuser("ruba",23)

const date = new Date()

function User(name,age){
	this.name = name
	this.age = age
	this.human = true
}

const user = new user(ruba,23)


class user{
	constructor(name,age){
		this.name = name
		this.age = age
		this.human = human
	}
}







//34 - Async Vs Defer

async = download and execute

defer download all and execute last

normal = parse html download js execute js while downloading other







-----------------------------------------------------------------------------------------------------------
//35 - Window

console.log(window)

window.console.log(window)

alert(hi)
window.alert(hi)

const alert = "msg"

window.alert(alert)









//36 - Document

console.log(document)

console.log(document.documentElement)

console.log(document.createElement)

const element = document.createElement('span')

element.innerText = "hello world"

document.body.append(element)


//37 - Id And Class Selectors

const divwithid = document.getElementById("div-id")

divwithid.style.color = "red"

const divswithclass = document.getElementByClass("div-class")

const divswithclassarray = Array.from(divswithclass)

divswithclassarray.foreach(div=>(div.style.color="green"))

divswithclassarray[0].style.color = "green"








//38 - Query Selectors

const dataAttributeElement = document.querySelector("[data-test]")


const divwithclasses = document.queryselector(".div-class")

const divwithclasses = document.queryselectorall(".div-class")

divwithlcass.foreach(div=>(div.style.color="red"))














//39 - Event Listeners


const btn = docuement.querySelector('[data-btn]')

btn.addEventListener('click',()=>{
	console.log(clicked)

})


funciton printing(){
	console.log("clicked")
}

btn.removeEventlistener('click',printing)

const input = document.queryselector("data-input-text")

input.addEvenetListener("input",e=>{
	console.log(e.target.value===)
})


const form = document.queryselector("[data-form]")

form.addEventListener("submit",e=>{
	e.preventDefault()
	console.log('submitted')
})

click
mouseeneter
mouseleave
mouseover
focus










//40 - Additional Differences Between Arrow And Normal Functions

const btn = document.queryselector('btn')

btn.addEventListener('click',e=>{
	console.log("arrowed")
	console.log(this)

})


btn.addEventListener('click',function(){
	console.log("normal")
	console.log(this)

})













//41 - Data Attributes

cosnt buttons = document.querySelectorAll('button')


buttons.forEach(button=>{
	button.addEventListener('click',()=>{
		const currentClicks = parseInt(button.dataset.clicks)

		button.dataset.clicks = currentclicks + 1
	})
})


data-clicks
















42 - DOM Traversal







const grandparent = document.querySelector("#grand_parent")

grandparent.style.color = "red"


grandparent.children[0].style.color = "blue"

const parentone = grandparent.children[0]

const parenttwo = grandparent.children[1]

const parenttwo = parentone.nexSiblingElement

const childone = parentone.children[0]

const childtwo = parentone.childre[1]

const childtwo = childone.nextSiblingElement

const childone = childtwo.previousSiblingElement

const parentone = childone.parentElement

const grandparent = parentone.parentElement

const grandparent = childone.closest('.grand_parent')


const grandparent = document.queryselectorall("#grand_parent")


const children = grandparent.queryselector(".child")

children.foreach(child=>{

})



//43 - Simple Todo List
#project 01
//44 - Modal Introduction
#project 02
//45 - Modal Walkthrough 
#project 02

-------------------------------------------------------------------------------------------------------------
//46 - If

const loggedin = true
const ondashbaord = false

if(loggedin && ondashboard){

}else if(){

}else{

}






//47 - Ternary Operator
const isloggedin = true


if(isloggedin) console.log("user is logged in")

isloggedin ? console.log("log in") : console.log("not logged in")







//48 - Switch Statement

const favanimal = "cat"


switch(favanimal){
	case "cat":
	console.log('they are cool')
	break
	case 'dog':
	console.log(they are loud)
	break
	default:
	console.log("unfamiliar")
}












//49 - For Loop

for(let i=0;i<10;i++){
	if(i> 2) break
	if(i>1) continue
	console.log("hello petter")
}

const a = [1,2,3]


for(let i=0;i<a.length;i++){
	const element = a[i]
	console.log(element)
}








//50 - While Loop



let i =0

while(i<5){
	console.log(i)
	i++
}


let person {
	name : "kyle"
	friend : {
		name : "joe"
		friend :{
			name : "sally"
		}
	}
}


let currentperson = person


while(currentperson.friend!=null){
	console.log(currentperson.name)
	currentperson = currentperson.friend
}







//51 - Recursion

function printhi(){
	console.log("hi")
	printhi()
}



function printnumber(number){
	if(number > 10) return

	console.log(number)
   printnumber(number+1)

}

print(1)

function sumbelownumber(number){
	if (number <=0) return 
	return number + sumbelownumber(number-1)
}







//52 - Short Circuit Evaluation

true || true 
true || false

true && true

true && false

53 - Midi Piano
#project 03
54 - Quiz App Introduction
55 - Quiz App Walkthrough
#project 04
56 - Form Validation Introduction
57 - Form Validation Walkthrough 
#project 05


----------------------------------------------------------------------------------------------------------
//58 - Callbacks

--asynchornus code

setTimeout((){
	console.log("inside")
},1000)

console.log("outside")

addclickeventlistener(button,()=>{
	console.log("clicked")
})


function addclickeventlistner(element,callback){
	element.addeventlistener('click',callback)

}







//59 - Promises


const promise = new Promise((resolve,reject)=>{
	const sum = 1+1
	if(sum==2){
		resolve(sum)
	}else{
		reject('error')
	}

})

promise.then(message=>{
	console.log("success")

}).catch(message=>{
	console.log('error')
})

setTimeout(()=>{
	console.log("here")

},2500)

function setTimeoutPromise(){
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
	console.log("here")

},2500)

	})

}



function setTimeoutPromise(duration){
	new Promise((resolve,reject)=>{
		setTimeout(resolve,duration)

	})

}


setTimeoutPromise(250).then(()=>{
	console.log('here')
})



setTimeout(()=>{
	console.log("1")
	setTimeout(()=>{
	console.log("2")
	setTimeout(()=>{
	console.log("3")

},2500)


},2500)


},2500)




setTimeoutPromise(250).then(()=>{
	console.log('1') 
	return setTimeout(250)
})
.then(()=>{
	console.log("2")
}) return setTimeout(250)
.then(()=>{
	console.log("3")
})


const button = document.queryselector("button")


function addeventlistenerpromise(element,method){
	return new Promise((resolve,reject)=>
	{
		element.addeventlistener(method,resolve)



	})

}

addeventlisteneepromise(button,"click").then((e)=>{
	console.log("clicked")

})

promise.all

promise.resolve("value").then(message=> console.log(messge))

promise.reject("value").catch(message=> console.log(messge))

promise.any

promise.race([
	promise.reject("error on 1")
	promise.resolve("error 2")
	promise.reject("error 3")




])

.then(message=>{
	console.log(message)
})

.catch(error=>{
	console.log(error)
})

promise.allsettled

const promise = Promise.reject("here")


promise.then(message=>{
	console.log(message)
})
.catch(error=>{
	console.error(error)

}).finally(){

}














//60 - Async Await 


function setTimeoutPromise(delay){
	return new Promise((resolve,reject)=>{
		settimeout(resolve,delay)
	})
}


settimeoutpromise(250).then(()=>{
	console.log("1")
	return setitmeoutpromise(34)
})
.then(()=>{

})

async function dostuff(){
	try{

	}
	catch(error){

	}
	await settimeoutpromise(250)
	console.log("1")
	await settimeoutpromise(250)
	console.log("1")
}

dostuff()





























//61 - Fetch

fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
	return response.json()

}).then(data=>{
	console.log(data.map(user=>user.name))

})

const url = https://jsonplaceholder.typicode.com/users


async function dostuff(){
	const response = await fetch(url)
	const users = await response.json()
	console.log(users.map(user=>user.name))

	

}



 async function dostuff(){
 	const response = await fetch(url,{
 		method: "POST",
 		headers :{
 			"Content-Type": "application/json"

 		},
 		body: JSON.stringfy({
 			title:"new post"

 		})

 	})

 	const post = await response.json()
 	console.log(post)
 }

 const url = "https://jsonplaceholder.typicode.com/comments?postId=1"

 fetch(url).then(res=>res.json()).then(comments=>{
 	console.log(comments)
 })

//62 - Event Loop
main thread 
//63 - Event Delegation

const buttons = document.queryselectorall('button')
document.body.addeventlistener("click",()=>{
	console.log("clicked body")

})

document.addeventlistener("click",()=>{
	console.log("clicked document")
	
})

buttons.foreach(button=>{
	button.addeventlistener('click',e=>{
		e.stopPropagation()
		console.log("clicked button")
	})
})
//64 - Browser Storage

//local/session/cookie

localStorage.setItem("name","kyle")


sessionStorage.removeItem("name","kyle")

document.cookie = "name=ruba"





65 - Advanced Todo List
#project 06
66 - Expand Collapse Introduction
67 - Expand Collapse Walkthrough
#project 07
68 - Google Maps Clone 
#project 08

--------------------------------------------------------------------------------------------------
//69 - ES6 Modules


type = module

import me from ./user.js

export default me

//70 - Node Modules

require
//71 - NPM


//72 - Parcel
73 - Date Picker
#project 09
74 - Shopping Cart
#project 10 



