import f from "../InitExp";

function RungeKuttaMethod(x0, y0, h) {
    var y = y0;
    var k1 = h * f(x0, y);
    var k2 = h * f(x0 + 0.5 * h, y + 0.5 * k1);
    y = y + k2;

    return y;
}

export default RungeKuttaMethod;