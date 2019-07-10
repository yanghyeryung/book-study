function binary_search(list, item) {
    var low = 0,
        high = list.length - 1,
        mid,
        guess;

    while (low<=high) {
        mid = parseInt((low + high) / 2);
        guess = list[mid];

        if(guess === item)
            return mid;
        if(guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}