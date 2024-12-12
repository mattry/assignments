let message: string = "Hello, World";

function printChars(s: string): void {
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}

function printVowels(s: string): void {
    enum vowels {
        'a',
        'e',
        'i',
        'o',
        'u',
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] in vowels) {
            console.log(s[i]);
        }
    }
}

function getProduct(...nums: number[]): number {
    let total: number = 1;
    
    nums.forEach(num => {
        total *= num;
    });

    return total;
}

console.log(getProduct(2, 2));
console.log(getProduct(2, 4));
console.log(getProduct(3,3,3,3,3));

console.log("Characters in Message: ");
printChars(message);

console.log("Vowels in Message: ");
printVowels(message);