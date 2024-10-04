/*Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.*/

function reverseWords(str) {
    return str.split(' ')  // Split the string into an array of words
              .reverse()    // Reverse the array of words
              .join(' ');   // Join the reversed array back into a string
}

/*str.split(' '):
Этот метод разбивает строку str на массив подстрок (слов), используя пробел ' ' в качестве разделителя.
Например, если str равно "hello world", то результатом будет массив ["hello", "world"].
.reverse():

Метод reverse() переворачивает порядок элементов в массиве.
Продолжая пример, массив ["hello", "world"] станет ["world", "hello"].
.join(' '):

Метод join(' ') объединяет элементы массива в одну строку, вставляя между ними указанный разделитель (в данном случае снова пробел).
После выполнения этого метода, массив ["world", "hello"] станет строкой "world hello".
Общий результат

Таким образом, функция reverseWords берет входную строку, разбивает её на слова, меняет порядок этих слов на обратный и объединяет их обратно в строку с пробелами между словами. Например:

Вход: "hello world"
Выход: "world hello"
Эта функция полезна, когда нужно изменить порядок слов в строке! */