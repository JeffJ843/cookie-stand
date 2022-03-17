'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', `total`];

function generateRandom(minCust, maxCust, avgCookiebought){
  return Math.ceil(avgCookiebought * (Math.random() * (maxCust - minCust)) + minCust)
}

function generateHourlyCookies(city){
  for(let i = 0; i < hours.length; i++){
    city.hourlycookies[i] = generateRandom(city.minCust, city.maxCust, city.avgCookiebought);
  }
  return city.hourlycookies;
}

let seattle ={
  storeName : 'seattle',
  maxCust: 23,
  minCust: 65,
  avgCookiebought : 6.3,
  hourlycookies: []  
};
generateHourlyCookies(seattle);

let tokyo ={
  storeName : 'tokyo',
  maxCust: 3,
  minCust: 24,
  avgCookiebought : 1.2,
  hourlycookies: []
};
generateHourlyCookies(tokyo);

let Dubai ={
  storeName : 'Dubai',
  maxCust: 11,
  minCust: 38,
  avgCookiebought : 3.7,
  hourlycookies: []
};
generateHourlyCookies(Dubai);

let Paris ={
  storeName : 'Paris',
  maxCust: 20,
  minCust: 38,
  avgCookiebought : 2.3,
  hourlycookies: []
};
generateHourlyCookies(Paris);

let Lima ={
  storeName : 'Lima',
  maxCust: 2,
  minCust: 16,
  avgCookiebought : 4.6,
  hourlycookies: []
};
generateHourlyCookies(Lima);
