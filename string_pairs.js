function maximumNumberOfStringPairs(words) {
    let wordSet = new Set(words);
    let pairs = 0;
    for (let word of wordSet) {
        let reverse = word.split('').reverse().join('');
        if (wordSet.has(reverse) && word !== reverse) {
            pairs++;
            wordSet.delete(word);
            wordSet.delete(reverse);
        }
    }
    return pairs;
}