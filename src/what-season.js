const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  function between(x, min, max) {
    return x >= min && x <= max;
}
if (!date) return 'Unable to determine the time of year!';

if (Object.getOwnPropertyNames(date).length > 0 || (Object.prototype.toString.call(date) !== '[object Date]')) {
    throw new Error('Invalid date!');
}

const month = date.getMonth() + 1;

if (between(month, 1, 2) || month === 12) return 'winter'
else if (between(month, 3, 5)) return 'spring'
else if (between(month, 6, 8)) return 'summer'
else if (between(month, 9, 11)) return 'autumn'
}

module.exports = {
  getSeason
};
