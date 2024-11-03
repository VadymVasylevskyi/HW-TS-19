// Задание 1: Напишите стрелочную функцию sumEvenNumbers которая принимает массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, number) => {
        return number % 2 === 0 ? sum + number : sum; 
    }, 0);
};


// Задание 2: Определите интерфейс StringToBooleanFunction для функции, принимающей строку и возвращающей boolean
interface StringToBooleanFunction {
    (input: string): boolean; 
}

// Реализуйте функцию
const isEmpty: StringToBooleanFunction = (input) => {
    return input.trim().length === 0; 
};

// Задание 3: Создайте тип CompareStrings принимающей две строки и возвращающей boolean
type CompareStrings = (str1: string, str2: string) => boolean;

// Напишите функцию соответствующую этому типу
const areStringsEqual: CompareStrings = (str1, str2) => {
    return str1 === str2; 
};


// Задание 4: Функция getLastElement принимает массив любого типа и возвращает последний элемент
function getLastElement<T>(array: T[]): T | undefined {
    return array[array.length - 1]; 
}

// Задание 5: Функция makeTriple принимает три аргумента одного типа и возвращает массив из этих трех элементов
function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c]; 
}
