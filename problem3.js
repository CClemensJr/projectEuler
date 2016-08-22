//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
//FROM THE ODIn PROJECT: just solve for numbers smaller than 1,000 and don't worry 
//about making it efficient. You won't need to do any crazy math -- think iteration 
//and make the computer do the work. Consider it extra credit to make your solution 
//solve for larger numbers in a way that isn't too slow.

//function to find the highest prime number
var optimusPrime = function(number)
{
	//go through the numbers leading up to the number entered, starting with the
	//first prime number, 2
	for (var i = 2; i < number; i++)
	{
		//if i divides evenly into the number...
		if (number % i === 0)
		{
			//...then we know that i is a multiple of number...
			console.log(i + " is a multiple of " + number);

			//so we just keep dividing number by i until it can't be divided
			//no more...
			return optimusPrime(number / i);
		}

		//...which yields the largest prime number...
		console.log(number + " is the Optimused Prime Factor");
	}
};



primeFactorFunction();

