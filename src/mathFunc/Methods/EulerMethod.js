import { f } from "../";

function EulerMethod(x, y, h) {
    y = y + h * f(x, y);
    return y;
}

export default EulerMethod;
