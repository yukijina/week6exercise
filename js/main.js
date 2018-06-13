document.write("tw");

var testOne = "What kind of variable am I?";
  console.log(testOne);

var testTwo = 256;
  console.log(testTwo);

var testThree = false;
  console.log(testThree);

var testFour = 'true';
  console.log(testFour);

var testFive = '128';
  console.log(testFive);

var testSix = "";
  console.log(testSix);

var testSeven = "hello" + "three";
  console.log(testSeven);

var testEight = '100' + 28;
  console.log(testEight);

var testNine = true + 3;
  console.log(testNine);

var testTen = 'false' + 5;
  console.log(testTen);

var testEleven = '128' - 3;
  console.log(testEleven);

var testTwelve = "" * 9;
  console.log(testTwelve);

var testThirteen = 'zero' -1;
  console.log(testThirteen);

var testFourteen = 'five'.length;
  console.log(testFourteen);

var testFifteen = 'five'[0] + 'ever';
  console.log(testFifteen);

var testSixteen = 'a' > 'b';
  console.log(testSixteen);

var testSeventeen = 'number'.length < 7;
  console.log(testSeventeen);

var testEighteen = '12' == 12;
  console.log(testEight);

var testNineteen = 'twelve' == 12;
  console.log(testNineteen);

var test1 = '14'=== 14;
  console.log(test1);

var test2 = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN?'[6];
  console.log(test2);

var string1 = "Hello, ";
    console.log(string1);

var string2 = "my name is ";
    console.log(string2);

var string3 = "Kingsley Pappagiorgio.";
    console.log(string3);

var combinedStrings = string1 + string2 + string3;
   console.log(combinedStrings);

var num1 = 8;
  console.log(num1);

var num2 = 52;
  console.log(num2);

var num3 = 60;
  console.log(num3);

var combinedNumbers = num1 + num2 + num3;
  console.log(combinedNumbers);

var mixedNum1 = 10;
  console.log(mixedNum1);

var mixedString1 = "ten";
  console.log(mixedString1);

var mixedNum2 = "10";
  console.log(mixedNum2);

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
  console.log(mixedConcatenation);


var num4 = 5;
var num5 = 0;

if(num4 > 1) {
  console.log("Num4 is greater than 1");
} else {
  console.log("Num4 is NOT greater than 1");
};



var num6 = 5;
var num7 = 0;

if(num6 < num7 || num6 === num7){
  console.log("if statement ran!");
} else if (num7 === "0" || true){
  console.log("Else if statement ran");
} else {
  console.log("Else statement ran");
};

// 12
var num8 = 5;
var num9 = 0;

if(num8 > num9 && num8 ===num9) {
  console.log("if statement ran!");
} else if(num9 === "0" || true) {
  console.log("Else if statement ran");
} else {
  console.log("Else statement ran");
};

var string11 = "this is a string";

for(var i = 0; i < string11.length; i = i + 1) {
    console.log(i, string11[i]);
};

var string12 = "coding";
var total = 0;

for(var i = 0; i < string12.length; i++) {
  total = total + i;
};

console.log(total);

// 15
var string13 = "onomatopoeia";

for(var i = 0; i < string13.length; i++) {
  if(string13[i] == "o") {
    console.log(i, string13[i]);
};
};

// 16
var string14 = "You're gonna need a bigger boat.";

for(var i = 0; i < string14.length; i ++) {
  if(string14[i] == "a" || string14[i] == "e" ||
string14[i] == "i" || string14[i] == "o" ||
string14[i] == "u") {
  console.log(string14[i]);
};
};

// 17.functiona

function testStuff(a, b) {
  if(a > 25 && b <100) {
    console.log(a + " is greater than 25 and " + b + " is less than 100");

  }else {
    console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
  };
};

testStuff(100, 25);

// 18
function testStuff2(c, d) {
  if(c == 25) {
    return c + " is equal to 25";

  } else if (d <= 100) {
    return d + " is less than or equal to 100";

  } else {
    return "Neither if nor else if statment ran";
  };
};

testStuff2(25, 99);

// 19
function countVowels(someString) {
  var vowels = 0;

  for(var i = 0; i < someString.length; i++) {
    if(someString[i] == "a" || someString[i] == "e"
     || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {
    vowels++;
  };
};
return vowels;
};

countVowels("I am the very model of a modern major general");
