const { NotImplementedError } = require('../extensions/index.js');
//const { notAnInstanceOfTheArray } = ;

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(array) {
  if (!Array.isArray(array)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  const MARK = /^--d/;
  let transformedArray = Array.from(array);
  let sequences = Array.from(transformedArray.entries())
    .filter(cV => MARK.test(cV[1]));

  for (let i = 0; i < sequences.length; i++) {
    if (!MARK.test(transformedArray[sequences[i][0] + 1]) && sequences[i][0] < transformedArray.length - 1) {
      if (/--discard-next/.test(sequences[i][1])) {
        transformedArray[sequences[i][0] + 1] = '--discard';
      }
      if (/--double-next/.test(sequences[i][1])) {
        transformedArray[sequences[i][0]] = transformedArray[sequences[i][0] + 1];
      }
    }
    if (!MARK.test(transformedArray[sequences[i][0] - 1]) && sequences[i][0] > 0) {
      if (/--discard-prev/.test(sequences[i][1])) {
        transformedArray[sequences[i][0] - 1] = '--discard';
      }
      if (/--double-prev/.test(sequences[i][1])) {
        transformedArray[sequences[i][0]] = transformedArray[sequences[i][0] - 1];
      }
    }
  }

    return transformedArray.filter(cV => !/--discard.*/.test(cV) && !/--double.*/.test(cV));
  }

module.exports = {
  transform
};


  /*if (/--discard-next/.test(sequences[i][1]) && !MARK.test(transformedArray[sequences[i][0] + 1]) && sequences[i][0] < transformedArray.length - 1) {
      transformedArray[sequences[i][0] + 1] = '--d';
      }
      if (/--discard-prev/.test(sequences[i][1]) && !MARK.test(transformedArray[sequences[i][0] - 1]) && sequences[i][0] > 0) {
        transformedArray[sequences[i][0] - 1] = '--d';
      }
      if (/--double-next/.test(sequences[i][1]) && !MARK.test(transformedArray[sequences[i][0] + 1]) && sequences[i][0] < transformedArray.length - 1) {
        transformedArray[sequences[i][0]] = transformedArray[sequences[i][0] + 1];
      }
      if (/--double-prev/.test(sequences[i][1]) && !MARK.test(transformedArray[sequences[i][0] - 1]) && sequences[i][0] > 0) {
        transformedArray[sequences[i][0]] = transformedArray[sequences[i][0] - 1];
      }*/

  /*let sequences = Array.from(transformedArray.entries())
    .filter(cV => MARK.test(cV[1]))
    .map((cV, _, array) => {
      if (/--discard-next/.test(cV[1]) && !MARK.test(transformedArray[cV[0] + 1]) && cV[0] < transformedArray.length - 1) {
        transformedArray[cV[0] + 1] = '--d';
        //console.debug(transformedArray);
        return 'done';
      }
      if (/--discard-prev/.test(cV[1]) && !MARK.test(transformedArray[cV[0] - 1]) && cV[0] > 0) {
        transformedArray[cV[0] - 1] = '--d';
        //console.debug(transformedArray);
        return 'done';
      }
      if (/--double-next/.test(cV[1]) && !MARK.test(transformedArray[cV[0] + 1]) && cV[0] < transformedArray.length - 1) {
        transformedArray[cV[0]] = transformedArray[cV[0] + 1];
        //console.debug(transformedArray);
        return 'done';
      }
      if (/--double-prev/.test(cV[1]) && !MARK.test(transformedArray[cV[0] - 1]) && cV[0] > 0) {
        transformedArray[cV[0]] = transformedArray[cV[0] - 1];
        //console.debug(transformedArray);
        return 'done';
      }
      return 'done';
    });
    console.debug(transformedArray);
    console.debug(sequences);
    return transformedArray.filter(cV => !MARK.test(cV));

  console.debug(sequences);
  console.debug(transformedArray);*/


  /*return array
  .map((cV, cI) => {
      if (/--discard-next/.test(Array[cI-1]) || /--discard-prev/.test(Array[cI+1])) {
        return cV = '--d';
      }
      if (/--double-next/.test(cV)) {
        return cV = Array[cI+1];
      }
      if (/--double-prev/.test(cV)) {
        return cV = Array[cI-1];
      }
      return cV;
  })
  .filter(cV => !MARK.test(cV));*/
  /*transformedArray = transformedArray
    .map((cV, cI) => {
        if (!MARK.test(cV) && /--discard-next/.test(transformedArray[cI-1]) && cI+1 <= array.length - 1) {
          return '--d';
        }
        return cV;
    });
  transformedArray = transformedArray
    .map((cV, cI) => {
        if (!MARK.test(array[cI+1]) && /--double-next/.test(cV) && cI+1 <= array.length - 1) {
          return array[cI+1];
        }
        return cV;
    });
  transformedArray = transformedArray
    .map((cV, cI) => {
        if (!MARK.test(cV) && /--discard-prev/.test(transformedArray[cI+1]) && cI-1 >= 0) {
          return '--d';
        }
        return cV;
    })
  transformedArray = transformedArray
    .map((cV, cI) => {
        if (!MARK.test(array[cI-1]) && /--double-prev/.test(cV) && cI-1 >= 0) {
          return array[cI-1];
        }
        return cV;
    });

  return transformedArray.filter(cV => !MARK.test(cV));*/

    /*for (let i = 0; i < array.length; i++) {
      if (!MARK.test(array[i]) && /--discard-next/.test(array[i - 1])) {
        array[i] = '--d';
      }
      if (/--double-next/.test(array[i]) && i+1 <= array.length - 1) {
        array[i] =  array[i + 1];
      }
      if (!MARK.test(array[i]) && /--discard-prev/.test(array[i + 1])) {
        array[i] =  '--d';
      }
      if (!MARK.test(array[i - 1]) && /--double-prev/.test(array[i]) && i - 1 >= 0) {
        array[i] =  array[i - 1];
      }
    return array.filter(cV => !MARK.test(cV));
    }*/