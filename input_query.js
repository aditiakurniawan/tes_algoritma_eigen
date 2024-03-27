function wordCount(input, query) {
    // Initialize an empty count array to store the counts
    const counts = [];

    // Iterate through each word in the `query` array
    for (const word of query) {
        // Initialize a count of 0 for the current word
        let count = 0;

        // Iterate through each word in the `input` array
        for (const inputWord of input) {
            // If the current word in `input` matches the current word in `query`, increment the count
            if (inputWord === word) {
                count++;
            }
        }

        // Add the count of the current word to the `counts` array
        counts.push(count);
    }

    // Return the `counts` array
    return counts;
}

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];
console.log(wordCount(input, query)); // Output: [1, 0, 2]