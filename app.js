'use strict';
let hours = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let stores = [];
function generateRandom(minCust, maxCust, avgCookiebought) {
  return Math.floor(avgCookiebought * (Math.random() * (maxCust - minCust)) + minCust)
}

function generateHourlyCookies(city) {
  for (let i = 0; i < hours.length - 1; i++) {
    city.hourlycookies[i] = generateRandom(city.minCust, city.maxCust, city.avgCookiebought);
  }
  return city.hourlycookies;
}

let seattle = {
  storeName: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgCookiebought: 6.3,
  hourlycookies: []
};
stores.push(seattle);


generateHourlyCookies(seattle);

let Tokyo = {
  storeName: 'Tokyo',
  maxCust: 3,
  minCust: 24,
  avgCookiebought: 1.2,
  hourlycookies: []
};
stores.push(Tokyo);
generateHourlyCookies(Tokyo);

let Dubai = {
  storeName: 'Dubai',
  maxCust: 38,
  minCust: 11,
  avgCookiebought: 3.7,
  hourlycookies: []
};
stores.push(Dubai);
generateHourlyCookies(Dubai);

let Paris = {
  storeName: 'Paris',
  maxCust: 38,
  minCust: 20,
  avgCookiebought: 2.3,
  hourlycookies: []
};
stores.push(Paris);
generateHourlyCookies(Paris);

let Lima = {
  storeName: 'Lima',
  maxCust: 16,
  minCust: 2,
  avgCookiebought: 4.6,
  hourlycookies: []
};
stores.push(Lima);
generateHourlyCookies(Lima);

console.log(stores)



for (let i = 0; i < hours.length; i++) {
  //set header values
  let hour = document.createElement("th");
  hour.innerText = hours[i];
  let td = document.createElement("td");
  let tr = document.createElement("tr");


  let salesTable = document.getElementById('cookie-table');

  // only append first row once
  if (i === 0) {
    tr.id = "firstRow";
    salesTable.appendChild(tr);

  }
  // append store hours
  let firstRow = document.getElementById('firstRow');
  firstRow.appendChild(hour);

}

// looping through stores array to display store data
for (let index = 0; index < stores.length; index++) {
  // set store variables
  const storeName = stores[index].storeName;

  // set elements to render
  let td = document.createElement("td");
  td.innerText = storeName;
  let tr = document.createElement("tr");
  tr.id = storeName;

  let salesTable = document.getElementById('cookie-table');


  // append data
  salesTable.appendChild(tr);
  tr.appendChild(td);

}

function generateRandom(minCust, maxCust, avgCookiebought) {
  return Math.ceil(avgCookiebought * (Math.random() * (maxCust - minCust)) + minCust)
}

for (let index = 1; index < hours.length; index++) {

  let td = document.createElement("td");
  const hour = hours[index];

  for (let index = 0; index < stores.length; index++) {

    // get variable values
    const storeName = stores[index].storeName;
    const maxCust = stores[index].maxCust;
    const minCust = stores[index].minCust;
    const avgCookiebought = stores[index].avgCookiebought;

    let cookies = generateRandom(minCust, maxCust, avgCookiebought)

    // render cookies for this store
    let target = document.getElementById(storeName);
    let td = document.createElement('td');


    td.innerText = cookies
    target.appendChild(td)


    // call random generator

    console.log(`hour;${hour} at ${storeName} : cookies ${cookies}`);

  }
}

//add event listener to the form
let myform = document.getElementById('form');
form.addEventListener('submit', addStore);

//Event listener to add a new store
let storeResults = [];
function addStore(event) {

  //Prevent browser default action
  event.preventDefault();

  //Set the entry point for appending to the table
  let i = storeResults.length;

  //Capture form values to define variables
  let storeName = event.target.location.value;
  let min = parseInt(event.target.minCustomers.value);
  let max = parseInt(event.target.maxCustomers.value);
  let avg = parseInt(event.target.avgCookiePerSale.value);


  //Create new store
  let target = document.getElementById('cookie-table');
  const td = document.createElement('td');
  td.innerText = storeName;
  const tr = document.createElement('tr');
  tr.id = storeName;
  target.appendChild(tr);
  target = document.getElementById(storeName);
  target.appendChild(td);


  for (let index = 1; index < hours.length; index++) {
 
    const td = document.createElement('td');
    const tr = document.createElement('tr');

    //Generate random number of cookies
    let cookies = generateRandom(min, max, avg);


    // render cookies for this store
   
    
    td.innerText = cookies;
    target.appendChild(td);

  }

};