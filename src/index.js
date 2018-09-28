module.exports =
    function longestConsecutiveLength(array) {
        //array.sort();
        var count = 0;
        var max = 0;
        var array = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i + 1] == array[i] + 1) {
                count++;
            } else {
                if (count > max) {
                max = count;
            }
                count = 0;}
        }
        return max;
    }

