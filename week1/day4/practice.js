var message = "Hello, World";
function printChars(s) {
    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
function printVowels(s) {
    var vowels;
    (function (vowels) {
        vowels[vowels["a"] = 0] = "a";
        vowels[vowels["e"] = 1] = "e";
        vowels[vowels["i"] = 2] = "i";
        vowels[vowels["o"] = 3] = "o";
        vowels[vowels["u"] = 4] = "u";
    })(vowels || (vowels = {}));
    ;
    for (var i = 0; i < s.length; i++) {
        if (s[i] in vowels) {
            console.log(s[i]);
        }
    }
}
function getProduct() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var total = 1;
    nums.forEach(function (num) {
        total *= num;
    });
    return total;
}
console.log(getProduct(2, 2));
console.log(getProduct(2, 4));
console.log(getProduct(3, 3, 3, 3, 3));
console.log("Characters in Message: ");
printChars(message);
console.log("Vowels in Message: ");
printVowels(message);
