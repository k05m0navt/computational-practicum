import f from "../InitExp";

function RungeKuttaMethod(x0, y0, X, h) {
    let n = Math.trunc((X - x0) / h);
    let y = y0;
    for (let i = 1; i <= n; i++) {
        let k1 = h * f(x0, y);
        let k2 = h * f(x0 + 0.5 * h, y + 0.5 * k1);
        y = y + (1 / 6) * (k1 + 2 * k2);
        x0 = x0 + h;
    }

    return y;
}
