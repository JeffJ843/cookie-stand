'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', `total`];

function generateRandom(minCust, maxCust, avgCookiebought){
  return Math.floor(avgCookiebought * (Math.random() * (maxCust - minCust)) + minCust)
}

function generateHourlyCookies(city){
  for(let i = 0; i < hours.length - 1; i++){
    city.hourlycookies[i] = generateRandom(city.minCust, city.maxCust, city.avgCookiebought);
  }
  return city.hourlycookies;
}

let seattle ={
  storeName : 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgCookiebought : 6.3,
  hourlycookies: []  
};
generateHourlyCookies(seattle);

let Tokyo ={
  storeName : 'tokyo',
  maxCust: 3,
  minCust: 24,
  avgCookiebought : 1.2,
  hourlycookies: []
};
generateHourlyCookies(tokyo);

let Dubai ={
  storeName : 'Dubai',
  maxCust: 38,
  minCust: 11,
  avgCookiebought : 3.7,
  hourlycookies: []
};
generateHourlyCookies(Dubai);

let Paris ={
  storeName : 'Paris',
  maxCust: 38,
  minCust: 20,
  avgCookiebought : 2.3,
  hourlycookies: []
};
generateHourlyCookies(Paris);

let Lima ={
  storeName : 'Lima',
  maxCust: 16,
  minCust: 2,
  avgCookiebought : 4.6,
  hourlycookies: []
};
generateHourlyCookies(Lima);

let sales = document.getElementById('cookie-table');
let seattlecity = document.createElement('ul')
sales.appendChild(seattlecity);
let seattleheader = document.createElement('h2');
seattleheader.textContent = seattle.storeName
seattlecity.appendChild(seattleheader);



for(let i = 0; i < hours.length; i++){
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.hourlycookies[i]}`;
  seattlecity.appendChild(li)

  let sales = document.getElementById('cookie-table');
  let Tokyociity = document.createElement('ul')
  sales.appendChild(seattlecity);
  let seattleheader = document.createElement('h2');
  seattleheader.textContent = Tokyo.storeName
  Tokyociity.appendChild(seattleheader);
  
  
  
  for(let i = 0; i < hours.length; i++){
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${seattle.hourlycookies[i]}`;
    seattlecity.appendChild(li)
}