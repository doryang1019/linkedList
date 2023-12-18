

const isPalindrome = (x) =>  {
    var num = Number(x);
    var arr = [];
    if(x < 0) {
        return false;
    }
    while (num) {
        var buffer = num % 10;
        // console.log(buffer);
        num = (num - buffer)/10;
        arr.push(buffer);
        console.log(num)
    }
    var result = 0;
    var y = 0;
    for(var i =arr.length - 1; i>=0 ;i--) {
        console.log(arr[i], i);
        result += Number(arr[i]) * Math.pow(10,y);
        y++;
    }
    return result === Number(x);

};

console.log(isPalindrome(121));
