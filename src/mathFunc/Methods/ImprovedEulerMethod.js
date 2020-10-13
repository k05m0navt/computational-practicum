import f from "../InitExp";

function predict(x, y, h) {
    return y + h * f(x, y);
}

function correct(x, y, x1, y1, h) {
    const e = 0.00001;
    let y1c = y1;

    do {
        y1 = y1c;
        y1c = y + 0.5 * h * (f(x, y) + f(x1, y1));
    } while (Math.abs(y1c - y1) > e);

    return y1c;
}

function ImprovedEulerMethod(x0, X, y0, h) {
    while (x0 < X) {
        let x1 = x0 + h;
        let y1p = predict(x0, y0, h);
        let y1c = correct(x0, y0, x1, y1p, h);
        x0 = x1;
        y0 = y1c;
    }

    return y0;
}

export default ImprovedEulerMethod;
