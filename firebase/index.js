/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */

var dog = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@***,@@@@@@@@@@@@
@@@@@@@@@@@@/,,,...,,////**...,@@@@@@@@
@@@@@@@@#... ... *(/*,,.@&(**,,,@@@@@@@
@@@@@@@@ . . .../(///*,.,&@#*...@@@@@@@
@@@@@@@@@@... ..(///*,.   %&/   @@@@@@@
@@@@@@@@@@.... .,/,. *  . ,&&(,.@@@@@@@
@@@@@@,&@#(/.,,.,/*,,...,&&., . &@@@@@@
@@@@%..@@#(/*(/*///*,.*(@@&&&**.&&@@@@@
@%/(@.,&@@%(&@///(*,..,(@@@@&*,./&@@@@@
//@@@,.,/@@&@&&*.,  ..,*&&&@%.. ,#@@@@@
*/@@@@,,.,&@@@%&%* , ,(&@@&*##%##@@@@@@
//(@@@@@.,..*@@&&%#*,,..//%&%#%%%@@@@@@
///#&@@@@@.,....(%%%#*..##%#,%(%@@@@@@@
/(//#@@@@@@@@# .     .@@@@@@@@@@@@@@@@@
//((#@@@@@@@@&@&%%#(##@@@@@@@@@@@@@@@@@
/(/((@@@@@@@@&&&&%###%@@@@@@@@@@@@@@@@@
//(/(&@@@@@@&&%#%####%@@@@@@@@@@@@@@@@@
///(((@@@@@@&&%%%%##%#@@@@@@@@@@@@@@@@@
//(/((((@@&&&%#%&%###%@@@@@@@@@@@@@@@@@
`;

var cat = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@*,*@@@@@@,*/@@@@@@
@@@@@@@@@@@@@@@@@@@@@...,*##(*...@@@@@@
@@@@@@@@@@@@@@@@@@@@@. * ,,/, ., @@@@@@
@@@@@@@@@@@@@@@@@@@@@#/,***./***(@@@@@@
@@@@@@@@@@@@@@@@@@@@@(/,,., ..,*(@@@@@@
@@@@@@@@@@@@@@@@@@@@@@/,.,,,*,.,%@@@@@@
@@@@@@@@@@@@@@@@@@@@@.**,,....,*,(@@@@@
@@@@@@@@@@@@@@@@@@@,,,,,,..     ./@@@@@
@@@@@@@@@@@@@@@@@@..,*,,, .     ,*#@@@@
@@@@@@@@@@@@@@@@@*,..*/*..     .,/#@@@@
@@@@@@@@@@@@@@@@. *,..(*,,.,.  . /&@@@@
@@@@@@@@@@@@@@@.  /.. */...,, ../(@@@@@
@@@@@@@@@@@@@@   *,*, .(/..,*  .*(@@@@@
@@@@@@@@@@@@.   .*,,,..,(*,*(,..,(@@@@@
@@@@@@@@@@   ..,/,.,,,../*,*(* ,*&@@@@@
@@@@@@*. ....@@@/, ,@*  ,*,*(*.,*@@@@@@
@@@,,....@@@@@@@/,.@@@  ./,*(,.*(@@@@@@
@@@@@@@@@@@@@@@@(, ,@@@. *(,/.,/@@@@@@@
@@@@@@@@@@@@@@@@@*./@@@@   *..*/@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@*.,*/@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@&.,/@@@@@@@@
`
// flakiness is a float between 0 and 1; higher values create a flakier API
function getPet(flakiness) {
  if(Math.random() < flakiness) {
    return "ERROR\n";
  }
  
  if(Math.random() > 0.5) {
    return dog;
  } else {
    return cat;
  }
}

// unflaky API
exports.pet = (req, res) => {
  res.send(getPet(0));
};

// flaky API
exports.pet_flaky = (req, res) => {
  res.send(getPet(0.8));
};