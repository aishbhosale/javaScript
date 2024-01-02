
console.log("**************************************Step-1*****************************************************");

function greaterNumber(a, b) {
    var a = 10;
    var b = -10;
    console.log("Given numbers are :");
    console.log("a =", a, ", ", " b=", b);
    var result = a > b ? " 10 is greater than -10" : "-10 is greater than 10";
    console.log("The result is :", result);
console.log(" ");
    var a = 800;
    var b = 899;
    console.log("Given numbers are :");
    console.log("a =", a, ",", "b =", b);
    var result = a > b ? "800 is greater than 899" : " 899 is greater than 800";
    console.log("The result is :", result);
}
greaterNumber();
console.log("******************************* Step-2*****************************************************************");

function isEvenOrOddNum(a, b, c, d) {
    var a = a;
    var b = b;
    var c = c;
    var d = d;
    console.log("The number is :", a);
    var result = a % 2 == 0 ? "Even" : "Odd";
    console.log("The given number is :", result);
    console.log("");

    console.log("The number is:", b);
    var result = b % 2 == 0 ? "Even" : "Odd";
    console.log("The given number is :", result);
console.log(" ");
    console.log("The number is :", c);
    var result = c % 2 == 0 ? "Even" : "Odd";
    console.log("The given number is:", result);
console.log("");
    console.log("The number is :", d);
    var result = d % 2 == 0 ? "Even" : "Odd";
    console.log("The given number is", result);

}

isEvenOrOddNum(29, 44, 0, 101)

console.log("*******************************Step-3*******************************************************");

function wordLength(a, b, c) {
    var a = a;
    var b = b;
    var c = c;
    console.log("Given word is :", a);
    var result = a.length;
    console.log("The length of word is :", result);
    var result = result % 2 == 0 ? "Even Number" : "Odd Number";
    console.log("The word length is an ", result);
    console.log(" ");

    console.log("Given word is :", b);
    var result = b.length;
    console.log("The length of word is :", result);
    var result = result % 2 == 0 ? "Even Number" : "Odd Number";
    console.log("The word length is an ", result);
    console.log(" ");

    console.log("Given number is :", c);
    var result = c.length;
    console.log("The length of word is :", result);
    var result = result % 2 == 0 ? "Even Number" : "Odd Number";
    console.log("The word length is an ", result);


}
wordLength("Javascript", "Developer", "Google");