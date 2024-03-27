function longest(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");

    // Initialize the `longestWord` variable to an empty string
    let longestWord = "";

    // Iterate through each word in the `words` array
    for (const word of words) {
        // If the length of the current word is greater than the length of the `longestWord`, update `longestWord`
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Return the longest word found
    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); // Output: "mengerjakan"