import f from "../InitExp";

function EulerMethod(x0, y, h, X) {
    while (x0 < X) {
        y = y + h * f(x0, y);
        x0 = x0 + h;
    }

    return y;
}

export default EulerMethod;
