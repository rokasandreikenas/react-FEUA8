/*
  Funkcijos aprašomos tokiu būdu:
    * apibūdinami(aprašomi tipais) visi funkcijos parametrai
    * nurodomas funkcijos iškvietimo grąžinimo tipas
*/

// Funkcija aprašoma deklaruojant

const addNumbersJS = (num1, num2) => {
  return num1 + num2;
};
//                  parametras:tipas)           return tipas
const addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

// Funkcijos tipas aprašytas prieš funkcijos deklaravimą
/*
    Aprašius funkciją tipu nebereikia įvardinti tipų deklaruojant funkciją.
    funkcijų tipai yra deklaruojami atskirai, kuomet:
      * norima funkcijos tipą pritaikyti ne vienai funkcijai
      * funkcijos parametrų ar grąžinimo tipas yra sudėtingi
  */
type binaryStringBuilder = (str1: string, str2: string) => string;

const joinStrings: binaryStringBuilder = (str1, str2) => {
  return str1 + " " + str2;
};

const joinStringsTS = (str1: string, str2: string) => {
  return str1 + " " + str2;
};

const createInitials: binaryStringBuilder = function (str1, str2) {
  return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
};

const sum: number = addNumbers(5, 7);
const joinedString: string = joinStrings("Penediktas", "Tušinis");
const initials: string = createInitials("Penediktas", "Tušinis");

console.log({
  sum,
  joinedString,
  initials,
});

/*
    Kuomet funkcijos nieko negrąžina, turime nurodyti tipą
      * void - funkcijos grąžinimo tipas nebus reikalaujamas
  */

function printRedText(text: string): void {
  console.log(`%c ${text}`, "color: #ee0000");
}

printRedText("printRed funkcijos argumentas");

console.group("1. Aprašykite funkcijoms tipus jas deklaruojant");
{
  const add = (a: number, b: number) => {
    return a + b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const power = function (base, power) {
    return base ** power;
  };

  const squareRoot = (number) => number ** (1 / 2);

  const root = function (base, nthRoot) {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text) => console.log(`%c${text}`, "color: #0000ee");

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText("printBlueText funkcijos argumentas");
}
console.groupEnd();

console.group("2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas");
{
  type AddNumber = (a: number, b: number) => number;
  const add: AddNumber = (a, b) => a + b;

  const multiply = (a, b) => {
    return a * b;
  };

  const power = function (base, power) {
    return base ** power;
  };

  const squareRoot = (number) => number ** (1 / 2);

  const root = function (base, nthRoot) {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text) => console.log(`%c${text}`, "color: #0000ee");

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText("printBlueText funkcijos argumentas");
}
console.groupEnd();
