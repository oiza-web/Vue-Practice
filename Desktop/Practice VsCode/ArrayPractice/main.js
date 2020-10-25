const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop Javascript

// for(i = 0; i < companies.length; i++ ){
//   console.log(companies[i])
// }

foreach

companies.forEach(function(company){
  console.log(company.start)
})

// using normal javascript filter

// const canDrink = ages.filter(function(age){
//   if (age >= 21){
//     return true;
//   }
// })

// using arrow function
// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink)

// const retailCompanies = companies.filter(function(company){
//   if (company.category === 'Retail'){
//    return true;
//   }
  
// })
// console.log(retailCompanies);

// const financeCompanies = companies.filter(function(company){
//   if (company.category === 'Finance'){
//     return true;
//   }
// })

// console.log(financeCompanies);

// const financeCompanies = companies.filter(company => company.category === 'Finance')
// console.log(financeCompanies);

// select companies that started in the 80s
// const companies80s =  companies.filter(company =>company.start <= 1990)
// console.log(companies80s)

//map

// get companies name,start and end date
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

//get squareroot of age
// const ageSquare = ages.map(age => Math.sqrt(age))
// console.log(ageSquare);

//sort companies by end date
// const sortCompanies = companies.sort((a,b) => a.end > b.end ? 1 : -1);
// console.log(sortCompanies);

//sort companies by start date
// const srtCompanies = companies.sort ((a,b) => a.start < b.start ? 1 : -1);
// console.log(srtCompanies);

//sort ages
// const sortAges = ages.sort((a,b) => a > b ? 1 : -1);
// console.log(sortAges);

//sort ages ascending order
// const sortAges = ages.sort((a, b)=>(a- b));
// console.log(sortAges);

//sort ages descending order
// const sortAges = ages.sort((a, b)=>(b -a));
// console.log(sortAges);

//Reduce
//add ages
// const sumAges = ages.reduce((total, age) => total + age , 0);
// console.log(sumAges);

// //add companys length of years
// const companyYears = companies.reduce((total,company) => total + company.end - company.start, 0);
// console.log(companyYears);

//Combined
const sumAges = ages
.map(age => age * 2)
.filter(age => age > 30)
.sort((a, b) => (b - a))
.reduce((total, age) => total + age , 0);

console.log(sumAges);