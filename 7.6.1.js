function isPalindrome(word) { 
    // Проверяем, равно ли слово своему перевернутому варианту
    if (word === word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

// Примеры использования
var word1 = "Довод";
var word2 = "Сантимент";

if (isPalindrome(word1)) {
    console.log("слово " + word1 + " является палиндромом");
} else {
    console.log("слово " + word1 + " не является палиндромом");
}

if (isPalindrome(word2)) {
    console.log("слово " + word2 + " является палиндромом");
} else {
    console.log("слово " + word2 + " не является палиндромом");
}
