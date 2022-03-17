/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    while (!set.has(n)) {
        set.add(n);
        let x = 0;
        while (n > 0) {
            const y = n % 10;
            x += y * y;
            n = Math.floor(n / 10);
        }
        if (x == 1) return true;
        n = x;
    }
    return false;
};