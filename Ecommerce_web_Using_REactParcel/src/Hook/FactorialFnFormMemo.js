

export function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}


