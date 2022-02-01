const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const visitors = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age >= 50) { visitors.senior += 1; return; }
    if (age >= 18) { visitors.adult += 1; return; }
    visitors.child += 1;
  });
  return visitors;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const keys = Object.keys(visitors);

  return keys.reduce((acc, i) => acc + data.prices[i] * visitors[i], 0);
};

module.exports = { calculateEntry, countEntrants };
