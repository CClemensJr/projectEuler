//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
//FROM THE ODIn PROJECT: just solve for numbers smaller than 1,000 and don't worry 
//about making it efficient. You won't need to do any crazy math -- think iteration 
//and make the computer do the work. Consider it extra credit to make your solution 
//solve for larger numbers in a way that isn't too slow.

var isPrime = function(number)
{
	var primeNum = true;

	for (var i = 2; i < number; i++)
	{
		if (number % i === 0 && number !== 2)
		{
			primeNum = false; 
		}
		else
		{
			primeNum = true;	
		}
	}
	
	if (primeNum) 
	{
		return console.log("The number is " + primeNum);
	}
	else
	{
		return console.log("The number is " + primeNum);
	}
};

var primeFactorFunction = function(number)
{
	var primFactorArray[] = [0];

	for (var i = 2; i < number; i++)
	{
		if (number % i === 0)
		{

		}

		
	}
};

primeFactorFunction(6);

