// // Бодлого №1
// var sum = 0;
// var limit = 1000;
// for (i = 1; i <= limit; i = i + 1) {
//   if(i % 7 === 0)
//   {
//     sum = sum + i;
//     console.log(' i=' + i  +  ' байхад sum=' + sum);  
// }
// }
// console.log(' i=' + limit + ' хүртэлх тоонууаас 7-д хуваагддаг тоонуудын нийлбэр бол: ' + sum);


// БОДЛОГО №2

// for(i = 2; i<=100; i++)
// {
//   if((primeNumber(i) === true)) 
//   console.log(i + ' Тоо бол анхны тоо мөн')

// }

function primeNumber(too)
{
  var notPrimeNumber = false;
  for(i = 2; i < too; i++)
  {
    if (too % i === 0)
    {
      notPrimeNumber = true;
      break;
    }
  }
  return notPrimeNumber
}
console.log(primeNumber(56))
