import React, { useState } from "react";
import { NavBar, SideBar } from "../../molecules";
import { ErrorBody } from '../../organisms';
import '../../styles/ErrorPage/styles.css';

function ErrorPage() {
    const [x0, setX0] = useState(1);
    const [y0, setY0] = useState(10);
    const [X, setX] = useState(15);
    const [N, setN] = useState(10);

    return (
        <div className="error_page">
            <NavBar
                logo="Comp Prac"
                homeLink="/plots"
                homeText="Plots"
                errorLink="#max_error"
                errorText="Max error"
            />
            <div className="error_content">
                <ErrorBody />
                <SideBar
                    title="Initial Values"
                    x0={x0}
                    y0={y0}
                    X={X}
                    N={N}
                    setX0={setX0}
                    setY0={setY0}
                    setX={setX}
                    setN={setN}
                />
            </div>
        </div>
    );
}

export default ErrorPage;
