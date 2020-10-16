function solution(x, c1) {
    // var y = x * (8 * (1 / Math.sqrt(x)) + 1) ** 2 + x;
    var y = 2 * x - 2 * c1 ** -0.5 * Math.sqrt(x) + c1 ** (-1);
    return y;
}

export default solution;
