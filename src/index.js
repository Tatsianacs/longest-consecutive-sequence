module.exports =
function longestConsecutiveLength(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    array.sort(compareNumbers);
    var count = 1;
    var max = 1;
    var newarray = [];
    //console.log(array);
    for (var i = 0; i < (array.length -1); i++) {
      if (array[i + 1] == array[i] + 1) {
        count++;
      } else {
        if (count > max) {
          max = count;
        }
          count = 1;
      }
    }
    return max;
  }

  function compareNumbers(a, b) {
    return a - b;
  }
