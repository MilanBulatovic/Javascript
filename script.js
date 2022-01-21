'use strict'
//First case

const dolphinsGameOne = 96;
const dolphinsGameTwo = 108;
const dolphinsGameThree = 89;

const koalasGameOne = 88;
const koalasGameTwo = 91;
const koalasGameThree = 110;

const dolphinsAvarageScore = (dolphinsGameOne + dolphinsGameTwo + dolphinsGameThree) / 3;
const koalasAvarageScore = (koalasGameOne + koalasGameTwo + koalasGameThree) / 3;

if (dolphinsAvarageScore > koalasAvarageScore) {
    console.log('Doplhins are winners')
} else {
    console.log('Koalas are winners')
}

//BONUS1
//First case


const dolphinsGameOne = 97;
const dolphinsGameTwo = 112;
const dolphinsGameThree = 101;

const koalasGameOne = 109;
const koalasGameTwo = 95;
const koalasGameThree = 123;

const dolphinsAvarageScore = Math.round((dolphinsGameOne + dolphinsGameTwo + dolphinsGameThree) / 3);
const koalasAvarageScore = Math.round((koalasGameOne + koalasGameTwo + koalasGameThree) / 3);

if(dolphinsAvarageScore >= 100 && dolphinsAvarageScore > koalasAvarageScore) {
    console.log('Dolphins are winners!');
} else if(koalasAvarageScore >= 100 && koalasAvarageScore > dolphinsAvarageScore) {
    console.log('Koalas are winners!')
} else if (dolphinsAvarageScore < 100 || koalasAvarageScore < 100) {
    console.log('Score is less than 100, make better score');
}



const bill = 10;

console.log(`Bill value is ${bill}. Tip the waiter ${bill >= 50 && bill <= 300 ? tip = bill / 100 * 15 : tip = bill / 100 * 20}. Total expense is ${bill + tip}`);



//Function that calculates average score of the teams
const calcAvg = (score1, score2, score3) => {
    const resultsAvg = Math.round((score1 + score2 + score3) / 3);
    return resultsAvg;
}

//Team1 avg score
const dolphinsScore = calcAvg(23, 43, 98);
// console.log(dolphinsScore);

//Team2 avg core
const koalasScore = calcAvg(24, 123, 156);
// console.log(koalasScore);

// //Function that check winner && if winner team has double points
const checkWinn = (dolphinsScore, koalasScore) => {
    if(dolphinsScore > koalasScore && dolphinsScore > koalasScore * 2) {
        console.log(`The winner is Dolphins with the score of ${dolphinsScore}:${koalasScore}`);
    } else if (koalasScore > dolphinsScore && koalasScore > dolphinsScore * 2){
        console.log(`The winner is Koalas with the score of ${koalasScore}:${dolphinsScore}`);
    } else {
        console.log(`One team has to have double points on other team in order to win!`);
    }
}
checkWinn(dolphinsScore, koalasScore);


// //----------------------------------------------------------------------

// //Arrays

// //Functio that calculates tip based on bill
const calcTip = (bill) => {

    if(bill >= 50 && bill <= 300) {
        let tip = Math.round((bill / 100) * 15);
        return tip;

    } else if(bill < 50 || bill > 300) {
        let tip = Math.round((bill / 100) * 20)
        return tip;
    } 
    
}
// console.log(calcTip(150));

// //Bill data
const bills = [125, 555, 44];

// //Tips array for bills values
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

//Total sum of bills and tips
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

const message = `Your total is ${total};`
// console.log(message);


// //Objects

const milan = {
    firstname: 'Milan',
    lastName: 'Bulatovic',
    job: 'Wordpress developer',
    colors: ['blue', 'white', 'green']
}

// console.log(milan);

//const question = prompt('What do you wanna know?')
const ime = milan.firstname;
const boje = milan.colors.length;
const posao = milan.job;


// console.log(`${ime} wrote ${boje} colors and his job is ${posao}`)

const newColorsItem = milan.colors.push('test');
const newObjectProp = milan['nickname'] = 'buli';
console.log(milan);


// //Challenge objects
const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = Math.round(this.weight / this.height ** 2 );
        return this.bmi;     
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.92,

    calcBMI: function(){
        this.bmi = Math.round( this.weight / this.height ** 2 );
        return this.bmi;
    }
}
mark.calcBMI();
// console.log(mark.bmi);

john.calcBMI();
// console.log(john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI of ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`);
}   

mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI of ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`) : console.log(`${john.fullName}'s ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`);


//LOOPS
const bills1 = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const tips1 = [];
const totals = [];

const calculateTip = (bill) => {

    if(bill >= 50 && bill <= 300) {
        let tip = Math.round((bill / 100) * 15);
        return tip;

    } else if(bill < 50 || bill > 300) {
        let tip = Math.round((bill / 100) * 20)
        return tip;
    }
}


for( let i = 0; i < bills1.length; i++) {
    const tips = calculateTip(bills1[i]);
    tips1.push(tips);
    
    totals.push(tips + bills1[i]);  
}

const totalAvg = function(arr) {
    let sum = 0;
    for( let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
// console.log(totalAvg(totals));

//-------------------------------------------------------
//POBLEM
//create  function which takes arr as a parametar and logs a string
//example - [17, 21, 23] will print 17degrees in 1 days, 21degrees in 2 days, 23degrees in 3 days

//TEST DATA [17, 21, 23]

//1.isprintati vrijednosti iz niza jedan po jedan
//2.izracunati dane
const temps = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
let days = 1;


function printForecast(something) {
   let str ='';
//loop kroz niz
 for(let i=0; i < something.length; i++)
//Printanje niza i dana sa ++ drugog elementa jer u nizu mozes inkrementovati svaki element na bilo kom mjestu u kodu 
    str+=`${something[i]}\xB0C in ${days++} days... `;
    console.log(`...${str}`);
    return str;
}
//     //calling
     printForecast(temps2);



//Reverse string function by words - split('') and join('') for character reverse
const reverseString = string => string.split(' ').
                                        reverse().
                                        join(' ');
    
console.log(reverseString('THis iS Some renadom teXt'));


//Capitalize first letter of each word in the string
function capitalizeLetters(str){
    const strArray = str.toLowerCase().split(' ');

    for(let i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
        
        //console.log(strArray);
        // console.log(res.toString(''));
    }
    return strArray.join(' ');
}
console.log(capitalizeLetters('SoME text To work wiTh'));


//FizBuzz
function FizzBuzz(){
    for(let i = 0; i <=100; i++){

        (i % 3 === 0 && i % 5 === 0) ? console.log('FizzBuzz') :
        ( i % 3 === 0 ) ? console.log('Fizz') :
        ( i % 5 === 0 ) ? console.log('Buzz') :
        console.log(i);

    }    
}
FizzBuzz();


//Palindrome
const ispalindrome = string => string.split('')
                                    .reverse()
                                    .join('').toLowerCase();
                                        
    
// console.log(ispalindrome('Ana'));

// //Palindrom of multiple words
function palindrome(str){
    const strRev = str.split('').reverse().join('').toLowerCase().replace(/ /g,'');
        console.log(strRev)
        return strRev === str.toLowerCase().replace(/ /g,'')

}
// console.log(palindrome('Ana'))


//Reverse an integer

const arr = [ 4, 2, 3 ]

function sumSquareRoots(arr) {  
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
         var sqrt = Math.sqrt(arr[i]);
         console.log(sqrt)
         total = total + sqrt;
         //console.log(total)
    }
    return total;
 }
 
 var result = sumSquareRoots(arr);
console.log(result);


/************************************************** */
// Napisati funkciju capital_cases(sentences) koja vraća početna slova rečenica iz unijetog teksta. 

// Ulaz: capital_cases (“Prva recenica. Ovo je druga recenica. Na kraju treca.”)
// Izlaz: PON
const sentences = 'Prva recenica. Ovo je druga recenica. Na kraju treca.'
function capital_cases(sentences){
//razdvojiti sa tackom
  const test = sentences.split(' .')
  //empty array to push split values
  const arr = [];
  test.forEach(char => {
      console.log(char.slice(1))
      //arr.push(char.charAt(0).toUppercase() + )
  } )
}
capital_cases(sentences);