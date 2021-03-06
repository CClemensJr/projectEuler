//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//the sum of all multiple
var sum = 0;

//We are searching for multiple up to this number
var maxNum = 1000;

//We are searching for multiples of numbers
const var multiple1 = 3;
const var multiple2 = 5;

//Cycle through number, add to sum where appropriate
for (i = 1; i < maxNum; i++)
{
	if (i % multiple1 === 0)
	{
		sum = sum + i;
	}
	else if (i % multiple2 === 0)
	{
		sum = sum + i;
	}
}

console.log(sum);