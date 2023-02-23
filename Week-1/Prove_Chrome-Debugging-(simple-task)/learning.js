
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,80,9,10)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0

	//That's get a number of element in the array not the number
	/* 	
	for(let aNumber in theNumbers){
		sum += aNumber
	} 
	*/

	//The correct code to use the function
	for (let i = 0; i < theNumbers.length; i++){
		sum += theNumbers[i]
	}
	
	return sum
}
